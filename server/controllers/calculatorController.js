const { INVALID_DATA } = require('../helpers/statusMessage')
const { parseInputForBaseMathOperations, commands } = require( '../utils/inputParserUtil')
const calculateService = require( '../services/calculateService')

module.exports = {

  async calcBase(input) {
    const operation = parseInputForBaseMathOperations(input)
    if(!operation) throw { status: 400, message: INVALID_DATA }

    let result = null

    if(operation.command === commands.ADDITION) {
      result = calculateService.add(operation.operands[0], operation.operands[1])
    }
    if(operation.command === commands.SUBTRACTION) {
      result = calculateService.subtract(operation.operands[0], operation.operands[1])
    }
    if(operation.command === commands.MULTIPLICATION) {
      result = calculateService.multiply(operation.operands[0], operation.operands[1])
    }
    if(operation.command === commands.DIVISION) {
      if(+operation.operands[1] === 0) throw { status: 400, message: INVALID_DATA }

      result = calculateService.divide(operation.operands[0], operation.operands[1])
    }

    return result
  }

  // ... methods for more complex calculations. Be careful with mathjs.evaluate method because of malformed user input
}
