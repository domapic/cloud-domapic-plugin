'use strict'

const Users = function (plugin, cloud) {
  const addUserTokens = users => {
    return Promise.all([
      plugin.controller.apiKeys.get(),
      plugin.controller.users.me()
    ])
      .then(results => {
        const apiKeys = results[0]
        const controllerUserMe = results[1]
        return Promise.all(users.filter(user => user.role === 'admin' || user.role === 'operator').map(user => {
          const existantApiKey = apiKeys.find(apiKey => {
            return apiKey._user === user._id && apiKey.createdBy === controllerUserMe._id
          })
          if (existantApiKey) {
            return Promise.resolve({
              email: user.email,
              token: existantApiKey.token
            })
          }
          return plugin.controller.apiKeys.create({
            user: user._id
          }).then(response => {
            return Promise.resolve({
              email: user.email,
              token: response.apiKey
            })
          })
        }))
      })
  }

  const sync = () => {
    return plugin.controller.users.get()
      .catch(error => {
        if (plugin.errors.isControlled(error) && error.typeof === 'Forbidden') {
          return plugin.tracer.error('Plugin has not enough permissions to read users from Controller. Please update the plugin user and check the "Grant admin permissions"').then(() => {
            return Promise.reject(error)
          })
        }
        return Promise.reject(error)
      })
      .then(addUserTokens)
      .then(cloud.syncUsers)
      .then(() => {
        return plugin.tracer.info('Users have been synced in Domapic Cloud')
      })
      .catch(err => {
        return plugin.tracer.error('Error syncronizing users', err.message)
      })
  }

  return {
    sync
  }
}

module.exports = {
  Users
}
