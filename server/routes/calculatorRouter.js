const Router = require('koa-router')
const sanitizeMW = require( '../middleware/sanitizeMW')
const calculatorController = require( '../controllers/calculatorController')

const router = new Router({ prefix: '/api/calculate' })

router.post('/base-operations', sanitizeMW, async (ctx) => {
  const result = await calculatorController.calcBase(ctx.request.body.input)

  ctx.body = { result }
})

// ... routes for more complex calculations


module.exports = router
