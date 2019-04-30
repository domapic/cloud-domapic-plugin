'use strict'

const Users = function (plugin, cloud) {
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
      .then(users => cloud.updateUsers(users))
      .catch(() => {
        return plugin.tracer.error('Error sending users')
      })
  }

  return {
    sync
  }
}

module.exports = {
  Users
}
