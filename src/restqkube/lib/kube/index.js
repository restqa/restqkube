const k8s = require('@kubernetes/client-node');

const Kube = function (options) {

  const kc = new k8s.KubeConfig()
  kc.loadFromFile(options.config.kube.path)

  const k8sApi = kc.makeApiClient(k8s.CoreV1Api)

  const request = {
    setLabels: function(value) {
      this.labels = value
    },
    setResource: function(value) {
      this.resource = value
    },
  }
  async function get (resources) {
    const { body } = await k8sApi.listNamespace(false, null, null, null, request.labels)
    response.body =  body
  }

  const response = {
    getItems: function(resource) {
      return this.body.items
    }
  }
  
  
  return {
    request,
    get,
    response,
  }
}

module.exports = Kube

