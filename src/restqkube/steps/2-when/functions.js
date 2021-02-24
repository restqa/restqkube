const When = {}

When.resources = async function() {
  await this.cluster.get()
}

module.exports = When
