'use strict'

const path = require('path')

const domapic = require('domapic-service')

const options = require('./lib/options')
const { Cloud } = require('./lib/Cloud')
const { Users } = require('./lib/Users')

domapic.createPlugin({
  packagePath: path.resolve(__dirname),
  customConfig: options
}).then(plugin => {
  const cloud = Cloud(plugin)
  const users = Users(plugin, cloud)

  plugin.events.once('connection', users.sync)
  plugin.events.on('user:*', users.sync)

  return plugin.start()
})
