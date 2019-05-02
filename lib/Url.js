'use strict'

const publicIp = require('public-ip')

const { CUSTOM_URL, CUSTOM_PORT, CURRENT_URL } = require('./constants')

const Url = function (plugin, cloud) {
  const getUrl = () => {
    return plugin.config.get(CUSTOM_URL)
      .then(customUrl => {
        if (customUrl) {
          return Promise.resolve(customUrl)
        }
        return Promise.all([
          plugin.config.get(CUSTOM_PORT),
          plugin.controller.config.get(),
          publicIp.v4()
        ]).then(results => {
          const customPort = results[0]
          const controllerConfig = results[1]
          const publicIp = results[2]

          const port = customPort || controllerConfig.port
          const protocol = controllerConfig.sslCert ? 'https' : 'http'

          return Promise.resolve(`${protocol}://${publicIp}:${port}`)
        })
      })
  }

  const sync = forced => {
    return getUrl()
      .then(url => {
        return plugin.storage.get(CURRENT_URL)
          .catch(() => {
            plugin.storage.set(CURRENT_URL, '')
          })
          .then(currentUrl => {
            if (currentUrl !== url || forced) {
              return cloud.syncUrl(url)
                .then(() => {
                  return plugin.storage.set(CURRENT_URL, url)
                    .then(() => {
                      return plugin.tracer.info('Url has been synced in Domapic Cloud to', url)
                    })
                })
                .catch(err => {
                  return plugin.tracer.error('Error syncronizing url', err.message)
                })
            }
            return plugin.tracer.info('Current url has not changed since last sync. Skipping')
          })
      })
  }

  return {
    sync
  }
}

module.exports = {
  Url
}
