const request = require('supertest')
const server = require('../server')

afterAll(async () => await server.close())

/** Client bundle must be builded to pass tests */
describe('Get basic client bundle', () => {
  
  test('Should response with status 200 on base route: GET /', async () => {
    const response = await request(server).get('/')

    expect(response.status).toEqual(200)
    expect(typeof response.text).toEqual('string')
  })

  test('Should response with status 200 on any route: GET /random-route', async () => {
    const response = await request(server).get('/random-route')

    expect(response.status).toEqual(200)
    expect(typeof response.text).toEqual('string')
  })
})
