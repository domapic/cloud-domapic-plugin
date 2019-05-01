'use strict'

const Url = function (plugin, cloud) {
  const sync = () => {
    return cloud.syncUrl('http://localhost:3300')
      .catch(() => {
        return plugin.tracer.error('Error syncronizing url')
      })
  }

  return {
    sync
  }
}

module.exports = {
  Url
}
