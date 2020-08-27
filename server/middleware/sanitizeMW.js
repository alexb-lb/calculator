const { OUT_OF_RANGE, INVALID_DATA } = require('../helpers/statusMessage.js')

const MAX_LENGTH = 100
const MIN_LENGTH = 3

module.exports = (ctx, next) => {
  ctx.params.input = ctx.request.body?.input?.trim()
  
  if(!ctx.params.input) {
    throw { status: 400, message: INVALID_DATA }
  }

  if (ctx.params.input.length > MAX_LENGTH || ctx.params.input.length < MIN_LENGTH ) {
    throw { status: 400, message: OUT_OF_RANGE }
  }

  return next()
}
