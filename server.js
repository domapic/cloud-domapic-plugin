'use strict'

const path = require('path')

const domapic = require('domapic-service')

const options = require('./lib/options')
const { Cloud } = require('./lib/Cloud')
const { Users } = require('./lib/Users')
const { Url } = require('./lib/Url')

domapic.createPlugin({
  packagePath: path.resolve(__dirname),
  customConfig: options
}).then(plugin => {
  const cloud = Cloud(plugin)
  const users = Users(plugin, cloud)
  const url = Url(plugin, cloud)

  plugin.events.on('connection', users.sync)
  plugin.events.on('connection', url.sync)
  plugin.events.on('user:*', users.sync)

  return plugin.start()
})
