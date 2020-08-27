const request = require('supertest')
const server = require('../../server')
const { OUT_OF_RANGE, INVALID_DATA } = require('../../helpers/statusMessage')

afterAll(async () => await server.close())

describe('Test /api/calculate/base-operations', () => {
  
  test('Should fail if no input data is present', async () => {
    const response = await request(server)
      .post('/api/calculate/base-operations')

    expect(response.status).toEqual(400)
    expect(response.body.message).toEqual(INVALID_DATA)
  })

  test('Should fail if input is invalid', async () => {
    const response = await request(server)
      .post('/api/calculate/base-operations')
      .send({ input: 'hello' })

    expect(response.status).toEqual(400)
    expect(response.body.message).toEqual(INVALID_DATA)
  })

  test('Should fail if input number is less than minimum allowed value', async () => {
    const response = await request(server)
      .post('/api/calculate/base-operations')
      .send({ input: '12' })

    expect(response.status).toEqual(400)
    expect(response.body.message).toEqual(OUT_OF_RANGE)
  })

  test('Should fail if input number is more than maximum allowed value', async () => {
    const response = await request(server)
      .post('/api/calculate/base-operations')
      .send({ input: 't'.repeat(200) })

    expect(response.status).toEqual(400)
    expect(response.body.message).toEqual(OUT_OF_RANGE)
  })

  test('Should pass if input data is correct', async () => {
    const response = await request(server)
      .post('/api/calculate/base-operations')
      .send({ input: '2 + 2' })

    expect(response.status).toEqual(200)
    expect(response.body.result).toEqual('4')
  })
})
