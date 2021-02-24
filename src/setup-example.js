const {
  After, AfterAll, Before, BeforeAll,
  Given, When, Then,
  defineParameterType,
  setWorldConstructor
} = require('cucumber')

const RestQube = require('./restqkube')

const config = {
  name: 'local',
  //kube: {
    //path: './config'
  //},
  data: {
    startSymbol: '{[',
    endSymbol: ']}'
  }
}

const rQube = new RestQube(config)

rQube.setParameterType(defineParameterType)
rQube.setSteps({ Given, When, Then })
rQube.setHooks({ Before, BeforeAll, After, AfterAll })

setWorldConstructor(rQube.getWorld())
