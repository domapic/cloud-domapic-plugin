'use strict'

const path = require('path')

const domapic = require('domapic-service')

const options = require('./lib/options')
const { Cloud } = require('./lib/Cloud')
const { Users } = require('./lib/Users')
const { Url } = require('./lib/Url')
const { CUSTOM_URL, SYNC_URL_INTERVAL, FORCE_SYNC_URL_INTERVAL } = require('./lib/constants')

domapic.createPlugin({
  packagePath: path.resolve(__dirname),
  customConfig: options
}).then(plugin => {
  const cloud = Cloud(plugin)
  const users = Users(plugin, cloud)
  const url = Url(plugin, cloud)

  plugin.config.get(CUSTOM_URL)
    .then(customUrl => {
      if (!customUrl) {
        setInterval(url.sync, SYNC_URL_INTERVAL)
      }
    })

  setInterval(() => {
    url.sync(true)
  }, FORCE_SYNC_URL_INTERVAL)

  plugin.events.on('connection', () => {
    users.sync()
    url.sync(true)
  })
  plugin.events.on('user:*', users.sync)

  return plugin.start()
})
