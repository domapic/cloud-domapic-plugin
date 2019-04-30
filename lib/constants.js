'use strict'

const path = require('path')

const PACKAGE_PATH = path.resolve(__dirname, '..')

module.exports = {
  PACKAGE_PATH,
  CLOUD_API_KEY: 'cloudApiKey',
  CUSTOM_URL: 'customUrl',
  CUSTOM_PORT: 'customPort',
  CLOUD_URL: 'http://localhost:3100' // TODO, change by real cloud URL
}
