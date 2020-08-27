const path = require('path')
const Koa = require('koa')
const bodyParserMW = require('koa-bodyparser')
const serve = require('koa-static')
const cors = require('koa2-cors')
const send = require('koa-send')
const config = require('./config/config')
const logger = require('./services/loggerService')
const errorMW = require('./middleware/errorMW')
const apiRouter = require('./routes/calculatorRouter')

const app = new Koa()

app.on('error', (error) => logger.error('Koa app error: ', error))

app
  .use(errorMW())
  .use(cors())
  .use(serve(path.resolve('../public')))
  .use(bodyParserMW())
  .use(apiRouter.allowedMethods())
  .use(apiRouter.routes())
  .use(async (ctx) => {
    await send(ctx, 'index.html', { root: path.resolve('../public') })
  })

const server = app.listen(config.port)

module.exports = server
