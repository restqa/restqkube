const assert = require('assert')
const Then = {}

Then.namespaces = {
  length: function(nb) {
    const received = this.cluster.response.getItems('namespace').length
    assert.strictEqual(received, nb, `${received} namespace(s) found but ${nb} expected`)
  },
  contains: function(name) {
    const result = this.cluster.response.getItems('namespace').some(_ => _.metadata && _.metadata.name === name)
    assert.ok(result, `The namespace "${name}" doesn't exist`)
  }
}

module.exports = Then
