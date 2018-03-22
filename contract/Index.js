const path = require('path')
const chai = require('chai')
const { Pact } = require('@pact-foundation/pact')
const chaiAsPromised = require('chai-as-promised')

const expect = chai.expect
const MOCK_SERVER_PORT = 2202

chai.use(chaiAsPromised);

describe('Pact', () => {

  const provider = new Pact({
    consumer: 'PersonUi',
    provider: 'PersonApi',
    port: MOCK_SERVER_PORT,
    log: path.resolve(process.cwd(), 'logs', 'pact.log'),
    dir: path.resolve(process.cwd(), 'pacts'),
    logLevel: 'INFO',
    spec: 2
  })

  const EXPECTED_BODY = [{
    name:'Rathin',
    age:22,
    location:'Chennai',
    dob:'24-07-1996'
  }]

  context('list of persons', () => {
    describe('valid user', () => {
      before((done) => {
        provider.setup()
          .then(() => {
            return provider.addInteraction({
              withRequest: {
                method: 'GET',
                path: '/demo/all',
                headers: { 'Accept': 'application/json' }
              },
              willRespondWith: {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
                body: EXPECTED_BODY
              }
            })
          })
          .then(() => done())
      })

      it('List the persons', () => {
        const todoApp = new TodoApp();
        todoApp.getProjects()
          .then((persons) => {
      	    expect(persons).to.be.a('array')
      	    expect(provider.verify()).to.not.throw()
          })
      })

      after(() => {
        provider.finalize()
      })
    })
  })
})
