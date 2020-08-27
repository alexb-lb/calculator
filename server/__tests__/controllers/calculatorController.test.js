const { INVALID_DATA } = require('../../helpers/statusMessage')
const calculatorController = require('../../controllers/calculatorController')


describe('Test calculatorController.calcBase', () => {

  test('Should fail if no user input', async () => {
    try {
      await calculatorController.calcBase()
    } catch (e) {
      expect(e.message).toEqual(INVALID_DATA)
    }
  })

  test('Should fail if user input is invalid', async () => {
    try {
      await calculatorController.calcBase('10*')
    } catch (e) {
      expect(e.message).toEqual(INVALID_DATA)
    }
  })

  test('Should fail if operation out of method\'s scope', async () => {
    try {
      await calculatorController.calcBase('12 % 5')
    } catch (e) {
      expect(e.message).toEqual(INVALID_DATA)
    }
  })

  test('Should add numbers', async () => {
    const result = +await calculatorController.calcBase('0.1 + 0.2')
    expect(result).toEqual(0.3)
  })

  test('Should subtract number', async () => {
    const result = +await calculatorController.calcBase('0.7 - 0.33')
    expect(result).toEqual(0.37)
  })

  test('Should multiply by number', async () => {
    const result = +await calculatorController.calcBase('10 * 100')
    expect(result).toEqual(1000)
  })

  test('Should divide by number', async () => {
    const result = +await calculatorController.calcBase('10 / 2')
    expect(result).toEqual(5)
  })
})
