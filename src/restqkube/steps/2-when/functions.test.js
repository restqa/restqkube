const When = require('./functions')

describe('# Steps/When', () => {
  test('Fetch the resources', async () => {
    const $this = {
      cluster: {
        get: jest.fn().mockResolvedValue('my-result')
      }
    }

    await When.resources.call($this)

    expect($this.cluster.get.mock.calls.length).toBe(1)
    expect($this.cluster.get.mock.calls[0][0]).not.toBeDefined()
  })
})
