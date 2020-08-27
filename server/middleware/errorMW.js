const { INTERNAL_ERROR } = require('../helpers/statusMessage.js')

module.exports = () => {
  return async (ctx, next) => {
    try {
      await next()
    } catch (error) {
      ctx.status = error.status || 500
      ctx.set('Content-Type', 'application/json')
      ctx.body = { message: error.message || INTERNAL_ERROR }

      ctx.app.emit('error', error, ctx)
    }
  }
}
