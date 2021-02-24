const Given = {}

Given.cluster = function() {
  this.cluster = this.createCluster()
}

Given.resource = function(resource) {
  const availableResources = [
    'namespace', 'ns',
  ]
  if (!availableResources.includes(resource.toLowerCase())) {
    throw new Error(`The resource "${resource}" is not handle by RestQA`)
  }
  this.cluster.request.setResource(resource)
}

Given.labels = function(labels) {
  this.cluster.request.setLabels(labels)
}

module.exports = Given

