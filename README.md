<h1 align="center">Event Emitter</h1>
<h4 align="center">Modern event emitter</h4>
<p align="center">
  <a href="https://www.npmjs.com/package/@librpc/ee" target="_blank">
      <img src="https://img.shields.io/npm/v/@librpc/ee.svg" alt="NPM version" target="_blank"></img>
   </a>
  <a href="https://github.com/feross/standard" target="_blank">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat" alt="js-standard-style"/>
  </a>
</p>

## Table of Contents

- [Features](#features)
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Benchmark](#benchmark)
- [Development](#development)

## Features

- Simple [37 LOC](https://github.com/librpc/event-emitter/blob/master/dist/event-emitter.js#L37)
- Lightweight [522 bytes](https://github.com/librpc/event-emitter/blob/master/dist/event-emitter.min.js)
- Design with performance in mind

## Install

```
npm install --save @librpc/ee
```

or download [dev](https://unpkg.com/@librpc/ee/dist/event-emitter.umd.js) or [prod](https://unpkg.com/@librpc/ee/dist/event-emitter.min.js) version

## Usage

```js

import EventEmitter from '@librpc/ee'

var emitter = new EventEmitter()

function listener (data) {
  console.log(data)
}

emitter.on('event', listener)
emitter.emit({ foo: 'bar' }) // -> { foo: 'bar' } in console
emitter.off('event', listener)
```


## API

### `.on(event: string, listener: (data: any) => void)`

### `.off(event: string, listener: (data: any) => void)`

### `.emit(event: string, data: any)`

## Benchmark

```
> @librpc/ee@0.1.0 bench D:\Projects\event-emitter
> node bench/

┌──────────────────────────────┬────────┬───────┬─────────┐
│ EMITTER                      │ ON     │ EMIT  │ OFF     │
├──────────────────────────────┼────────┼───────┼─────────┤
│ events                       │ 66,217 │ 3,964 │ 76,941  │
├──────────────────────────────┼────────┼───────┼─────────┤
│ minivents                    │ 18,800 │ 80    │ 6,537   │
├──────────────────────────────┼────────┼───────┼─────────┤
│ mitt                         │ 78,688 │ 534   │ 118,331 │
├──────────────────────────────┼────────┼───────┼─────────┤
│ eventemitter3                │ 19,363 │ 2,223 │ 11,169  │
├──────────────────────────────┼────────┼───────┼─────────┤
│ ../dist/event-emitter.umd.js │ 82,912 │ 6,497 │ 79,845  │
└──────────────────────────────┴────────┴───────┴─────────┘
```

## Development

Command | Description
--------| -----------
`npm run check` | Check standard code style by [snazzy](https://www.npmjs.com/package/snazzy)
`npm run build` | Wrap source code in [UMD](https://github.com/umdjs/umd) by [rollup](https://github.com/rollup/rollup)
`npm run bench` | Run [benchmark](http://benchmarkjs.com/)
`npm run test` | Run tests by [tape](https://github.com/substack/tape) and compute code coverage by [nyc](https://github.com/bcoe/nyc)
`npm run min` | Minify code by [UglifyJS](https://github.com/mishoo/UglifyJS2)
