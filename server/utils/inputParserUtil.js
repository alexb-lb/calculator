const commands = {
  ADDITION: 'ADDITION',
  SUBTRACTION: 'SUBTRACTION',
  DIVISION: 'DIVISION',
  MULTIPLICATION: 'MULTIPLICATION',
}

const operatorsMap = {
  '+': {
    command: commands.ADDITION,
  },
  '-': {
    command: commands.SUBTRACTION,
  },
  '/': {
    command: commands.DIVISION,
  },
  '*': {
    command: commands.MULTIPLICATION,
  },
}

const parseInputForBaseMathOperations = (input) => {
  const firstOperandMatch = /^-?\d*\.?\d+/.exec(input)
  if (!firstOperandMatch || !firstOperandMatch[0]) return null
  const firstOperand = firstOperandMatch[0]

  const inputWithoutFirstOperand = input.slice(firstOperand.length)

  const secondOperandMatch = /-?\d*\.?\d+$/.exec(inputWithoutFirstOperand)
  if (!secondOperandMatch || !secondOperandMatch[0]) return null
  let secondOperand = secondOperandMatch[0]

  let operator = inputWithoutFirstOperand.slice(0, inputWithoutFirstOperand.indexOf(secondOperand)).trim()

  // handle minus if no spaces is present (5-3)
  if((operator.length === 0) && (secondOperand[0] === '+' || secondOperand[0] === '-')) {
    operator = secondOperand[0]
    secondOperand = secondOperand.slice(1)
  }

  if(!(operator in operatorsMap)) return null

  return { operands: [firstOperand, secondOperand], command: operatorsMap[operator].command }
}

module.exports = {
  commands,
  parseInputForBaseMathOperations,
}
