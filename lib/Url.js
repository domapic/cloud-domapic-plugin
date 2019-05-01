'use strict'

const Url = function (plugin, cloud) {
  const sync = () => {
    return cloud.syncUrl('http://localhost:3300')
      .catch(err => {
        return plugin.tracer.error('Error syncronizing url', err.message)
      })
  }

  return {
    sync
  }
}

module.exports = {
  Url
}
