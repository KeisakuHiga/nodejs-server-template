/* eslint-disable no-undef */
const request = require('supertest')
const app = require('../../app')

// an API integration test
describe('GET /ether/getUserBalance ', () => {
  test('It should respond with an users balance', async () => {
    const response = await request(app).get('/ether/getUserBalance')
    expect(response.body).toBe(10000)
    expect(response.statusCode).toBe(200)
  })
})
