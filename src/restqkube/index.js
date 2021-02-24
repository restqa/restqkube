const World = require('./world')
const Hooks = require('./hooks')
const Steps = require('./steps')

const RestQkube = function (config) {
  let _world = World

  config.data = config.data || {}

  if (!config.data.startSymbol) {
    config.data.startSymbol = '{{'
  }

  if (!config.data.endSymbol) {
    config.data.endSymbol = '}}'
  }

  return {
    setParameterType (defineParameterType) {
      const regexp = new RegExp(`${config.data.startSymbol.replace(/(?=\W)/g, '\\')}(.*)${config.data.endSymbol.replace(/(?=\W)/g, '\\')}`)
      defineParameterType({
        regexp,
        transformer: function (value) {
          value = `${config.data.startSymbol} ${value} ${config.data.endSymbol}`
          return this.data.get(value)
        },
        name: 'data'
      })
    },
    setSteps (obj) {
      Steps(obj)
    },
    setHooks (obj) {
      Hooks(config, obj)
    },
    setWorld (world) {
      _world = world
    },
    getWorld () {
      return _world
    }
  }
}


module.exports = RestQkube
