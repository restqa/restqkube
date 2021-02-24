const Then = require('./functions')

describe('# Steps/Then', () => {

  describe('namespaces', () => {

    test('Throw error when namespace number doesn\'t match', () => {
      const $this = {
        cluster: {
          response: {
            getItems: jest.fn().mockReturnValue([])
          }
        }
      }

      expect(() => {
        Then.namespaces.length.call($this, 1)
      }).toThrow(`0 namespace(s) found but 1 expected`)

      expect($this.cluster.response.getItems.mock.calls.length).toBe(1)
      expect($this.cluster.response.getItems.mock.calls[0][0]).toBe('namespace')
    })

    test('Do not throw an error if assertion pass', () => {
      const $this = {
        cluster: {
          response: {
            getItems: jest.fn().mockReturnValue([1])
          }
        }
      }

      expect(() => {
        Then.namespaces.length.call($this, 1)
      }).not.toThrow()

      expect($this.cluster.response.getItems.mock.calls.length).toBe(1)
      expect($this.cluster.response.getItems.mock.calls[0][0]).toBe('namespace')
    })

    test('Throw error when a namespace doens\'t exist', () => {
      const $this = {
        cluster: {
          response: {
            getItems: jest.fn().mockReturnValue([])
          }
        }
      }

      expect(() => {
        Then.namespaces.contains.call($this, 'my-namespace')
      }).toThrow(`The namespace "my-namespace" doesn\'t exist`)

      expect($this.cluster.response.getItems.mock.calls.length).toBe(1)
      expect($this.cluster.response.getItems.mock.calls[0][0]).toBe('namespace')
    })

    test('Do not throw an error if the namespace exist', () => {
      const $this = {
        cluster: {
          response: {
            getItems: jest.fn().mockReturnValue([{
              metadata: {
                name: 'my-namespace'
              }
            }])
          }
        }
      }

      expect(() => {
        Then.namespaces.contains.call($this, 'my-namespace')
      }).not.toThrow()

      expect($this.cluster.response.getItems.mock.calls.length).toBe(1)
      expect($this.cluster.response.getItems.mock.calls[0][0]).toBe('namespace')
    })

  })
})
