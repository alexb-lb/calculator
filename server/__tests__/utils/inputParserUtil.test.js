const { parseInputForBaseMathOperations } = require('../../utils/inputParserUtil')

describe('Test inputParserUtil.parseInputForBaseMathOperations', () => {

  test('Should fail if no user input', async () => {
    const result = parseInputForBaseMathOperations()
    expect(result).toEqual(null)
  })
  test('Should fail if user input is incorrect #1', async () => {
    const result = parseInputForBaseMathOperations('hello + 1')
    expect(result).toBe(null)
  })
  test('Should fail if user input is incorrect #2', async () => {
    const result = parseInputForBaseMathOperations('1 + hello')
    expect(result).toBe(null)
  })
  test('Should fail if user input is incorrect #3', async () => {
    const result = parseInputForBaseMathOperations('10e20 + 12')
    expect(result).toBe(null)
  })
  test('Should fail if user input is incorrect #4', async () => {
    const result = parseInputForBaseMathOperations('0.4 + 11E23')
    expect(result).toBe(null)
  })
  test('Should fail if user input is incorrect #5', async () => {
    const result = parseInputForBaseMathOperations('123hello + 1')
    expect(result).toBe(null)
  })
  test('Should fail if user input is incorrect #6', async () => {
    const result = parseInputForBaseMathOperations('0.7 + 11n')
    expect(result).toBe(null)
  })
  test('Should fail if user input is incorrect #7', async () => {
    const result = parseInputForBaseMathOperations('e+3')
    expect(result).toBe(null)
  })
  test('Should fail if user input is incorrect #7', async () => {
    const result = parseInputForBaseMathOperations('+1+3')
    expect(result).toBe(null)
  })

  test('Should successfully parse input and return specified object #1', async () => {
    const result = parseInputForBaseMathOperations('0.111111+-55')
    expect(result).toEqual({ 'command': 'ADDITION', 'operands': ['0.111111', '-55'] })
  })
  test('Should successfully parse input and return specified object #2', async () => {
    const result = parseInputForBaseMathOperations('-11-22')
    expect(result).toEqual({ 'command': 'SUBTRACTION', 'operands': ['-11', '22'] })
  })
  test('Should successfully parse input and return specified object #2', async () => {
    const result = parseInputForBaseMathOperations('-2--2')
    expect(result).toEqual({ 'command': 'SUBTRACTION', 'operands': ['-2', '-2'] })
  })
  test('Should successfully parse input and return specified object #3', async () => {
    const result = parseInputForBaseMathOperations('1+1')
    expect(result).toEqual({ 'command': 'ADDITION', 'operands': ['1', '1'] })
  })
  test('Should successfully parse input and return specified object #4', async () => {
    const result = parseInputForBaseMathOperations('2/-0')
    expect(result).toEqual({ 'command': 'DIVISION', 'operands': ['2', '-0'] })
  })
  test('Should successfully parse input and return specified object #4', async () => {
    const result = parseInputForBaseMathOperations('1.00001*-0.22222')
    expect(result).toEqual({ 'command': 'MULTIPLICATION', 'operands': ['1.00001', '-0.22222'] })
  })
})
