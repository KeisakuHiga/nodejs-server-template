/* eslint-disable no-undef */
const sum = require('./sampleTesting')
const getUsersModel = require('../src/models/getUsersModel')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('two plus two is four', () => {
  expect(2 + 2).toBe(4)
})

test('１足す１は２', () => {
  expect(1 + 1).toBe(2)
})

test('object assignment', () => {
  const data = { one: 1 }
  data.two = 2
  expect(data).toEqual({ one: 1, two: 2 })
})

test('object assignment2', () => {
  const data = { name: 'keisaku' }
  data.age = 32
  expect(data).toEqual({ name: 'keisaku', age: 32 })
})

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0)
    }
  }
})

// boolean, truthy, falsy
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})

// numeric
test('two plus two', () => {
  const value = 2 + 2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(3.5)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(4.5)

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4)
  expect(value).toEqual(4)
})

// string // check by Regex
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/)
})

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/)
})

// array and iterable object
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk'
]

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk')
  expect(new Set(shoppingList)).toContain('milk')
})

// exception
function compileAndroidCode () {
  throw new Error('you are using the wrong JDK')
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow()
  expect(() => compileAndroidCode()).toThrow(Error)

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK')
  expect(() => compileAndroidCode()).toThrow(/JDK/)
})

// Promise test
test('get users from db, testing by Promise', () => {
  return getUsersModel()
    .then(data => {
      expect(data[0].dataValues.user_id).toBe('0001')
    })
})
// async test
test('get users from db, testing by async/await', async () => {
  const result = await getUsersModel()
  expect(result[0].dataValues).toEqual({
    user_age: 32, user_first_name: 'Keisaku', user_id: '0001', user_last_name: 'Higa'
  })
})
// async test
test('get users from db, testing by async/await2', async () => {
  const result = await getUsersModel()
  expect(result[0].dataValues.user_id).toBe('0001')
})
