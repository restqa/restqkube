const Given = require('./functions')

const options = {
  config: {
    kube: {
      path: '~/.kube/config'
    }
  }
}

describe('# Steps/Given', () => {

  let Kube

  beforeEach(() => {
    jest.mock('@kubernetes/client-node', () => {
      return {
        KubeConfig: function() {
          return {
            loadFromFile: jest.fn(),
            makeApiClient: jest.fn()
          }
        }
      }
    })
    Kube = require('../../lib/kube')
  })

  afterEach(() => {
    jest.resetModules()
  })

  test('Create a new cluster',() => {
    const $this = {
      createCluster : jest.fn().mockReturnValue(new Kube(options))
    }

    Given.cluster.call($this)

    expect($this.cluster).toHaveProperty('request')
    expect($this.cluster).toHaveProperty('get')
    expect($this.cluster).toHaveProperty('response')
  })

  test('filter through label', () => {
    const cluster = new Kube(options)
    const $this = {
      createCluster : jest.fn().mockReturnValue(cluster)
    }

    Given.cluster.call($this)
    Given.labels.call($this, 'foo=bar')

    expect($this.cluster.request.labels).toBe('foo=bar')
  })

  describe('Resource', () => {

    test('Select resource', () => {
      const cluster = new Kube(options)
      const $this = {
        createCluster : jest.fn().mockReturnValue(cluster)
      }

      Given.cluster.call($this)
      Given.resource.call($this, 'namespace')

      expect($this.cluster.request.resource).toBe('namespace')
    })

    test('Throw an error if the resource is not handle by the plugin', () => {
      const cluster = new Kube(options)
      const $this = {
        createCluster : jest.fn().mockReturnValue(cluster)
      }

      Given.cluster.call($this)

      expect(() => {
        Given.resource.call($this, 'Workflow')
      }).toThrow(`The resource "Workflow" is not handle by RestQA`)
    })

  })
})

