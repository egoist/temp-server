# temp-server [![NPM version](https://img.shields.io/npm/v/temp-server.svg)](https://npmjs.com/package/temp-server) [![NPM downloads](https://img.shields.io/npm/dm/temp-server.svg)](https://npmjs.com/package/temp-server)

> Serve specific route with specific content.

## Install

```bash
$ npm install -g temp-server
```

## Usage

```bash
# interactive mode
$ temp-server

# arguments mode
$ temp-server --port 3000 --body "hello {{params.name}}" --url "/:name"
```

## Use Case

Verify LetsEncrypt domain:

```bash
$ temp-server
> this.body = i9fh5Ik4Vkjzerr...long...hash
> options.url = /.well-known/acme-challenge/i9fh5Ip...long...hash
> options.port = 4000
```

## API

```js
const tempServer = require('temp-server')

tempServer(options)
```

### tempServer(options)

#### options

##### url

Type: `string`<br>
Default: `/`

A router fragment, like `/a/b/c` or `/foo/:name`

##### port

Type: `number`<br>
Default: `4000`

Server port

##### body

Type: `string`<br>
Default: `hello world`

The content to be print.

## License

MIT © [EGOIST](https://github.com/egoist)
