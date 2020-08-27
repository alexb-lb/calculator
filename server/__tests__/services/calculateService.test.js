const calculateService = require('../../services/calculateService')

describe('Test calculateService.add', () => {
  test('Should fail if no arguments provided', async () => {
    expect(() => calculateService.add()).toThrow()
  })

  test('Should fail if passed arguments invalid', async () => {
    expect(() => calculateService.add(10, 'hello')).toThrow()
  })

  test('Should pass if arguments are ok', async () => {
    const result = +calculateService.add(0.1, 0.2)
    expect(result).toEqual(0.3)
  })
})

describe('Test calculateService.subtract', () => {
  test('Should fail if no arguments provided', async () => {
    expect(() => calculateService.subtract()).toThrow()
  })

  test('Should fail if passed arguments invalid', async () => {
    expect(() => calculateService.subtract(10, 'hello')).toThrow()
  })

  test('Should pass if arguments are ok', async () => {
    const result = +calculateService.subtract(-12, 3)
    expect(result).toEqual(-15)
  })
})

describe('Test calculateService.multiply', () => {
  test('Should fail if no arguments provided', async () => {
    expect(() => calculateService.multiply()).toThrow()
  })

  test('Should fail if passed arguments invalid', async () => {
    expect(() => calculateService.multiply('hello', 'hello')).toThrow()
  })

  test('Should pass if arguments are ok', async () => {
    const result = +calculateService.multiply(0, 3)
    expect(result).toEqual(0)
  })
})

describe('Test calculateService.divide', () => {
  test('Should fail if no arguments provided', async () => {
    expect(() => calculateService.divide()).toThrow()
  })

  test('Should fail if passed arguments invalid', async () => {
    expect(() => calculateService.divide(5, 0)).toThrow()
  })

  test('Should pass if arguments are ok', async () => {
    const result = +calculateService.divide(5, 2)
    expect(result).toEqual(2.5)
  })
})
