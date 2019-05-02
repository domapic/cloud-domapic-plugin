'use strict'

const path = require('path')

const PACKAGE_PATH = path.resolve(__dirname, '..')

module.exports = {
  PACKAGE_PATH,
  CLOUD_API_KEY: 'cloudApiKey',
  CUSTOM_URL: 'customUrl',
  CUSTOM_PORT: 'customPort',
  CURRENT_URL: 'currentUrl',
  CLOUD_URL: 'https://cloud.domapic.com',
  SYNC_URL_INTERVAL: 60000,
  FORCE_SYNC_URL_INTERVAL: 1800000
}
