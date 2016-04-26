'use strict'
const koa = require('koa')
const Router = require('koa-router')
const logger = require('koa-logger')
const hbs = require('handlebars')

module.exports = function (options) {
  const app = koa()
  const router = new Router()

  const url = options.url || '/'
  router.get(url, function* () {
    let body = options.body || 'hello world'
    body = hbs.compile(body)
    this.body = body(this)
  })

  app.use(logger())
  app.use(router.routes())

  const port = options.port || process.env.NODE_PORT || 4000
  app.listen(port, () => {
    console.log(`Temp server is running at http://localhost:${port}`)
  })
}
