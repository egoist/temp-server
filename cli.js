#!/usr/bin/env node
'use strict'
const meow = require('meow')
const co = require('co')
const chalk = require('chalk')
const prompt = require('co-prompt')
const main = require('./')

const cli = meow(`
  Usage:
    temp-server [options]

  Options:
    -u/-url:          Specfic a url to output body
    -p/--port:        Server port, 4000 by default
    -b/--body:        Define output body content
    -v/--version:     Print version
    -h/--help:        Print help (You are here!)
`, {
  alias: {
    p: 'port',
    b: 'body',
    v: 'version',
    h: 'help'
  }
})

co(function* () {
  let body = cli.flags.body
  if (!body) {
    body = yield prompt(`> this.body = ${chalk.gray('(hello world)')} `)
  }

  let url = cli.flags.url
  if (!url) {
    url = yield prompt(`> options.url = ${chalk.gray('(/)')} `)
  }

  let port = cli.flags.port
  if (!port) {
    port = yield prompt(`> options.port = ${chalk.gray('(4000)')} `)
  }
  main({
    body,
    port,
    url
  })
}).catch(e => console.log(e.stack))
