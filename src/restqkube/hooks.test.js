beforeEach(() => {
  jest.resetModules()
})

describe('# hooks', () => {
  test('init', () => {
    const Hooks = require('./hooks')

    const $this = {
      debug: [
        'Simple Value',
        {
          foo: 'bar'
        }
      ],
      log: jest.fn(),
      attach: jest.fn(),
      setConfig: jest.fn(),
      data: {
        parse: jest.fn()
      }
    }

    const config = {
      foo: 'bar',
      data: {}
    }

    const feature = {
      name: 'sc1',
      pickle: {
        name: 'The scenario name'
      }
    }

    const fns = {
      Before: jest.fn((...params) => {
        return params.pop().call($this, feature)
      }),
      BeforeAll: jest.fn(),
      After: jest.fn((...params) => {
        return params.pop().call($this, feature)
      }),
      AfterAll: jest.fn()
    }

    Hooks(config, fns)

    expect(fns.Before.mock.calls.length).toBe(3)
    expect(typeof fns.Before.mock.calls[0][0]).toBe('function')
    expect($this.setConfig.mock.calls.length).toBe(1)
    expect($this.setConfig.mock.calls[0][0]).toEqual({ data: {}, foo: 'bar' })
    expect($this.data.parse.mock.calls.length).toBe(1)
    expect($this.data.parse.mock.calls[0][0]).toEqual(feature)

    expect(fns.Before.mock.calls[1][0]).toBe('@skip')
    expect(typeof fns.Before.mock.calls[1][1]).toBe('function')
    expect(fns.Before.mock.results[1].value).toBe('skipped')

    expect(fns.Before.mock.calls[2][0]).toBe('@wip')
    expect(typeof fns.Before.mock.calls[2][1]).toBe('function')
    expect(fns.Before.mock.results[2].value).toBe('skipped')

    expect(fns.BeforeAll.mock.calls.length).toBe(0)

    expect(fns.After.mock.calls.length).toBe(1)
    expect(fns.AfterAll.mock.calls.length).toBe(0)

    expect($this.skipped).toEqual(true)
  })

  test('init without Data', () => {
    const Hooks = require('./hooks')

    const $this = {
      attach: jest.fn(),
      setConfig: jest.fn(),
      debug: [],
      data: {
        parse: jest.fn()
      },
      apis: [{
        toJSON: () => {
          return {
            foo: 'bar'
          }
        }
      }]
    }

    const config = {
      foo: 'bar'
    }
    const fns = {
      Before: jest.fn((...params) => {
        return params.pop().call($this, { name: 'sc1' })
      }),
      After: jest.fn((...params) => {
        return params.pop().call($this, { name: 'sc1' })
      })
    }

    Hooks(config, fns)

    expect(fns.Before.mock.calls.length).toBe(3)
    expect(typeof fns.Before.mock.calls[0][0]).toBe('function')
    expect($this.setConfig.mock.calls.length).toBe(1)
    expect($this.setConfig.mock.calls[0][0]).toEqual({ foo: 'bar' })
    expect($this.data.parse.mock.calls.length).toBe(0)
    expect($this.debug).toEqual([])
  })
})
