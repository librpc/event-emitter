var test = require('tape')
var tapDiff = require('tap-diff')

test.createStream()
  .pipe(tapDiff())
  .pipe(process.stdout)

var EventEmitter = require('../dist/event-emitter.umd.js')

var emitter

function beforeEach () {
  emitter = new EventEmitter()
}

function handler1() {}
function handler2() {}
function handler3() {}

test('.constructor() should create emitter instance', t => {
  beforeEach()

  t.ok(emitter instanceof EventEmitter)
  t.ok(emitter.events)

  t.end()
})

test('.on(event, listener) should add new listener to event', t => {
  beforeEach()

  emitter.on('event', handler1)
  emitter.on('event', handler2)

  t.deepEqual(emitter.events, {
    event: [handler1, handler2]
  })

  t.end()
})

test('.off(event, listener) should remove listener from event', t => {
  beforeEach()

  emitter.on('event', handler1)
  emitter.on('event', handler2)
  emitter.off('event', handler2)
  emitter.off('event', handler3)
  emitter.off('event1', handler2)

  t.deepEqual(emitter.events, {
    event: [handler1]
  })

  t.end()
})

test('.emit(event, data) should trigger event', t => {
  t.plan(1)
  beforeEach()

  emitter.on('event', data => t.deepEqual(data, { foo: 'bar' }))
  emitter.emit('event', { foo: 'bar' })
  emitter.emit('event1', { foo: 'bar' })
})
