<h1 align="center">Event Emitter</h1>
<h4 align="center">Modern event emitter</h4>
<p align="center">
  <a href="https://www.npmjs.com/package/@librpc/ee" target="_blank">
    <img src="https://img.shields.io/npm/v/@librpc/ee.svg" alt="NPM version" target="_blank"></img>
  </a>
  <a href="https://travis-ci.org/librpc/event-emitter" target="_blank">
    <img src="https://travis-ci.org/librpc/event-emitter.svg?branch=master" alt="Build Status" target="_blank"></img>
  </a>
  <a href='https://coveralls.io/github/librpc/event-emitter?branch=master'>
    <img src='https://coveralls.io/repos/github/librpc/event-emitter/badge.svg?branch=master' alt='Coverage Status' />
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

- Simple [87 LOC](https://github.com/librpc/event-emitter/blob/master/dist/event-emitter.js#L87)
- Lightweight [522 bytes](https://github.com/librpc/event-emitter/blob/master/dist/event-emitter.min.js)
- [Performant](#benchmark)
- Inheritable

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
emitter.emit('event', { foo: 'bar' }) // -> { foo: 'bar' } in console
emitter.off('event', listener)
```


## API

### Emitter

  * [new Emitter()](#new_Emitter_new)
  * [.on(event, listener)](#Emitter+on) ⇒ [<code>Emitter</code>](#Emitter)
  * [.off(event, listener)](#Emitter+off) ⇒ [<code>Emitter</code>](#Emitter)
  * [.emit(event, data)](#Emitter+emit) ⇒ [<code>Emitter</code>](#Emitter)

<a name="new_Emitter_new"></a>

### new Emitter()
Create an event emitter

**Example**
```js
var emitter = new Emitter()
```
<a name="Emitter+on"></a>

### emitter.on(event, listener) ⇒ [<code>Emitter</code>](#Emitter)
Add listener to event. No context provided, use Function.prototype.bind(), arrow function or closure instead.

**Kind**: instance method of [<code>Emitter</code>](#Emitter)
**Returns**: [<code>Emitter</code>](#Emitter) - Return self

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | Event name |
| listener | [<code>listener</code>](#listener) | Event listener |

**Example**
```js
function listener (data) {
 console.log(data)
}

emitter.on('event', listener)
```
<a name="Emitter+off"></a>

### emitter.off(event, listener) ⇒ [<code>Emitter</code>](#Emitter)
Remove listener from event.

**Kind**: instance method of [<code>Emitter</code>](#Emitter)
**Returns**: [<code>Emitter</code>](#Emitter) - Return self

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | Event name |
| listener | [<code>listener</code>](#listener) | Event listener |

**Example**
```js
emitter.off('event', listener)
```
<a name="Emitter+emit"></a>

### emitter.emit(event, data) ⇒ [<code>Emitter</code>](#Emitter)
Trigger an event. Multiple arguments not supported, use destructuring instead.

**Kind**: instance method of [<code>Emitter</code>](#Emitter)
**Returns**: [<code>Emitter</code>](#Emitter) - Return self

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | Event name |
| data | <code>\*</code> | Event data |

**Example**
```js
emitter.emit('event', { foo: 'bar' })
```
<a name="listener"></a>

#### listener : <code>function</code>

| Param | Type | Description |
| --- | --- | --- |
| data | <code>\*</code> | Any data could be passed to event listener |


## Benchmark

```
> @librpc/ee@1.0.4 bench D:\Projects\event-emitter
> node bench/

┌──────────────────────────────┬─────────┬───────────┬─────────┐
│ EMITTER                      │ ON      │ EMIT      │ OFF     │
├──────────────────────────────┼─────────┼───────────┼─────────┤
│ events                       │ 98,319  │ 2,397,787 │ 184,420 │
├──────────────────────────────┼─────────┼───────────┼─────────┤
│ minivents                    │ 29,974  │ 1,433,297 │ 8,636   │
├──────────────────────────────┼─────────┼───────────┼─────────┤
│ mitt                         │ 136,070 │ 1,581,165 │ 246,576 │
├──────────────────────────────┼─────────┼───────────┼─────────┤
│ eventemitter3                │ 32,007  │ 2,669,781 │ 32,388  │
├──────────────────────────────┼─────────┼───────────┼─────────┤
│ ../dist/event-emitter.umd.js │ 138,602 │ 2,941,016 │ 266,540 │
└──────────────────────────────┴─────────┴───────────┴─────────┘
```

## Development

Command | Description
--------| -----------
`npm run check` | Check standard code style by [snazzy](https://www.npmjs.com/package/snazzy)
`npm run build` | Wrap source code in [UMD](https://github.com/umdjs/umd) by [rollup](https://github.com/rollup/rollup)
`npm run bench` | Run [benchmark](http://benchmarkjs.com/)
`npm run test` | Run tests by [tape](https://github.com/substack/tape) and compute code coverage by [nyc](https://github.com/bcoe/nyc)
`npm run min` | Minify code by [UglifyJS](https://github.com/mishoo/UglifyJS2)
`npm run docs` | Create docs by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown)
