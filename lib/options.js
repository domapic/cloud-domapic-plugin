'use strict'

const { CLOUD_API_KEY, CUSTOM_URL, CUSTOM_PORT } = require('./constants')

module.exports = {
  [CLOUD_API_KEY]: {
    type: 'string',
    alias: ['apiKey', 'cloudToken', 'token'],
    describe: 'Domapic Cloud apiKey',
    demandOption: true
  },
  [CUSTOM_URL]: {
    type: 'string',
    alias: ['custom-url', 'publicUrl', 'public-url'],
    describe: 'Defines a custom public url for connecting with the Controller'
  },
  [CUSTOM_PORT]: {
    type: 'number',
    alias: ['custom-port', 'publicPort', 'public-port'],
    describe: 'Defines a custom public port for connecting with the Controller'
  }
}
