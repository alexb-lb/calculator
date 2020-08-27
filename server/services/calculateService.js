const Big = require('big.js')

/**
 * mathjs.evaluate cannot provide enough support to prevent injection attacks
 * thats why Big.js with explicit server-side sanitision was chosen
 */
const calculateService = {
  add(a, b) {
    return Big(a).plus(b)
  },

  subtract(a, b) {
    return Big(a).minus(b)
  },

  multiply(a, b) {
    return Big(a).mul(b)
  },

  divide(a, b) {
    return Big(a).div(b)
  },
}

module.exports = calculateService
