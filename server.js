'use strict'

const path = require('path')

const domapic = require('domapic-service')

domapic.createPlugin({
  packagePath: path.resolve(__dirname)
}).then(() => {
  console.log('Domapic plugin created')
})
