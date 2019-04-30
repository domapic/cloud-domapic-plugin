'use strict'

const path = require('path')
const domapic = require('domapic-service')

const options = require('./options')
const { PACKAGE_PATH } = require('./constants')

domapic.cli({
  packagePath: PACKAGE_PATH,
  script: path.resolve(PACKAGE_PATH, 'server.js'),
  customConfig: options
})
