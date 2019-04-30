'use strict'

const requestPromise = require('request-promise')

const { CLOUD_API_KEY, CLOUD_URL } = require('./constants')

const Cloud = function (plugin) {
  let apiKeyPromise

  const getApiKey = () => {
    if (!apiKeyPromise) {
      apiKeyPromise = plugin.config.get(CLOUD_API_KEY)
    }
    return apiKeyPromise
  }

  const doRequest = (url, method, body) => {
    return getApiKey().then(apiKey => {
      return requestPromise({
        uri: `${CLOUD_URL}/api/${url}`,
        headers: {
          'x-api-key': apiKey
        },
        method,
        json: true
      })
    }).catch(error => {
      if (error.statusCode === 401 || error.statusCode === 403) {
        return plugin.tracer.error('Plugin has not permissions to connect with Domapic Cloud. Please provide a valid server apiKey').then(() => {
          return Promise.reject(error)
        })
      }
      return Promise.reject(error)
    })
  }

  const getServerMe = () => {
    return doRequest('/servers/me', 'get')
  }

  const updateUsers = users => {
    return getServerMe().then(server => {
      console.log('Server me:', server)
      console.log(users)
    })
  }

  return {
    updateUsers
  }
}

module.exports = {
  Cloud
}
