afterEach(() => {
  jest.resetModules()
})

describe('# restqapi', () => {
  test('setSteps', () => {
    const Restqapi = require('./index')

    const instance = new Restqapi({
      data: {
        startSymbol: '[[',
        endSymbol: ']]'
      }
    })

    const Definitions = {
      Given: jest.fn(),
      When: jest.fn(),
      Then: jest.fn()
    }
    instance.setSteps(Definitions)

    expect(Definitions.Given).toHaveBeenCalled()
    expect(Definitions.When).toHaveBeenCalled()
    expect(Definitions.Then).toHaveBeenCalled()
  })

  test('setHooks', () => {
    const Hooks = require('./hooks')
    jest.mock('./hooks')
    Hooks.mockReturnValue(1)

    const Restqapi = require('./index')

    const instance = new Restqapi({ a: 'b' })
    instance.setHooks({ foo: 'bar' })

    expect(Hooks.mock.calls.length).toBe(1)
    const expectedConfig = {
      a: 'b',
      data: {
        startSymbol: '{{',
        endSymbol: '}}'
      }
    }
    expect(Hooks.mock.calls[0][0]).toEqual(expectedConfig)
    expect(Hooks.mock.calls[0][1]).toEqual({ foo: 'bar' })
  })

  test('getWorld', () => {
    const World = require('./world')
    jest.mock('./world')

    const Restqapi = require('./index')

    const instance = new Restqapi({ a: 'b' })
    const world = instance.getWorld()

    expect(world).toEqual(World)
  })

  test('setWorld', () => {
    const Restqapi = require('./index')

    const newWorld = 'my-world'
    const instance = new Restqapi({ a: 'b' })
    instance.setWorld(newWorld)
    const world = instance.getWorld()

    expect(world).toEqual('my-world')
  })

  test('setParameterType', () => {
    const Restqapi = require('./index')
    const defineParameterType = jest.fn()

    const instance = new Restqapi({ a: 'b' })
    instance.setParameterType(defineParameterType)

    expect(defineParameterType.mock.calls.length).toBe(1)
    expect(defineParameterType.mock.calls[0][0].regexp).toEqual(/\{\{(.*)\}\}/)
    expect(defineParameterType.mock.calls[0][0].name).toEqual('data')
    expect(typeof defineParameterType.mock.calls[0][0].transformer).toEqual('function')

    // test the transformer
    const $this = {
      data: {
        get: jest.fn()
      }
    }
    defineParameterType.mock.calls[0][0].transformer.call($this, 'my-data')
    expect($this.data.get.mock.calls.length).toBe(1)
    expect($this.data.get.mock.calls[0][0]).toBe('{{ my-data }}')
  })
})
