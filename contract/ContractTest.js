'use strict'

const expect = require('chai').expect
const path = require('path')
const Pact = require('@pact-foundation/pact/pact').Pact
const fetch = require('./Client/client').fetch
const {somethingLike: eachArrayLike,like} = require('@pact-foundation/pact').Matchers

describe('The USER API', () => {
  const port = 5000

  const provider = new Pact({
    port: port,
    log: path.resolve(process.cwd(), 'logs', 'mockserver-integration.log'),
    dir: path.resolve(process.cwd(), 'pacts'),
    spec: 2,
    consumer: 'PersonUi',
    provider: 'personApi',
    pactfileWriteMode: 'overwrite'
  })

  const EXPECTED_BODY =
  [{ name:like('Pranav'),
    age: like(19),
    location: like('Coimbatore, India'),
    dob: like('2018-01-05') }]
  // { name: 'Rathin',
  //   age: 22,
  //   location: 'Chennai',
  //   dob: '1996-07-24' },
  // { name: 'Akash',
  //   age: 25,
  //   location: 'Chennai, India',
  //   dob: '2018-03-14' } ]


  before(() => provider.setup())

  after(() => provider.finalize())

  describe('get /demo/all', () => {
    before(done => {
      const interaction = {
        state: 'i have a list of users',
        uponReceiving: 'a request for all users',
        withRequest: {
          method: 'GET',
          path: '/demo/all',
          headers: {
            'Authorization': 'Basic QWRtaW46MTIzNDU='
          }
        },
        willRespondWith: {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          },
          body: eachArrayLike(EXPECTED_BODY,{
            min:1
          })
        }
      }
      provider.addInteraction(interaction).then(() => {
        done()
      })
    })


    it('returns the correct response', done => {
      fetch()
        .then(response => {
          //expect(response).to.eventually.have.deep.property('name').notify(done)
          expect(response.status).to.eql(200)
          done()
        }, done)
    })

    // verify with Pact, and reset expectations
    afterEach(() => provider.verify())
  })
})
