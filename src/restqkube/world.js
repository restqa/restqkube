const { World } = require('@restqa/restqa-plugin-bootstrap')
const { Kube } = require('./lib')

class RestQkubeWorld extends World {
  setup () {
    this.createCluster = () => {
      const options = {
        config: this._config
      }

      if (!options.config.kube || !options.config.kube.path) {
        options.config.kube = options.config.kube || {}
        options.config.kube.path = process.env.KUBE_CONFIG
      }
      

      return new Kube(options)
    }
  }
}

module.exports = RestQkubeWorld
