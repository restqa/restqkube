afterEach(() => {
  jest.resetModules()
})

describe('World', () => {

  test('setup - createCluster using the config', () => {

    const mockKube = jest.fn()
    jest.mock('./lib', () => {
      return {
        Kube: mockKube
      }
    })

    const World = require('./world')
    let instance = new World({})
    instance.setConfig({
      foo: 'bar',
      kube: {
        path: '/your/folder/config'
      }
    })
    instance.createCluster()
    expect(mockKube.mock.calls.length).toBe(1)
    let expectedOptions = {
      config: {
        foo: 'bar',
        kube: {
          path: '/your/folder/config'
        }
      }
    }
    expect(mockKube.mock.calls[0][0]).toEqual(expectedOptions)
  })

  test('setup - createCluster using the environement variable', () => {

    process.env.KUBE_CONFIG = '/my/folder/config'

    const mockKube = jest.fn()
    jest.mock('./lib', () => {
      return {
        Kube: mockKube
      }
    })

    const World = require('./world')
    let instance = new World({})
    instance.setConfig({foo: 'bar'})
    instance.createCluster()
    expect(mockKube.mock.calls.length).toBe(1)
    let expectedOptions = {
      config: {
        foo: 'bar',
        kube: {
          path: '/my/folder/config'
        }
      }
    }
    expect(mockKube.mock.calls[0][0]).toEqual(expectedOptions)
  })
})
