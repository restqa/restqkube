
module.exports = function (config, { Before, BeforeAll, After, AfterAll }) {

  Before(async function (scenario) {
    this.setConfig(config)
    if (this.data && config.data) {
      await this.data.parse(scenario)
    }
  })

  Before('@skip', function () {
    this.skipped = true
    return 'skipped'
  })

  Before('@wip', function () {
    this.skipped = true
    return 'skipped'
  })

  After(function (scenario) {
    this.log = this.log || console.log
  })
}
