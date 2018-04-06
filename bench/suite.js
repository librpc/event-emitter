function suite (emitter) {
  global.require = require

  function setup () {
    var EVENTS_COUNT = 0xff
    var HANDLERS_COUNT = 0xff

    var Emitter = require(this.name)

    var shuffle = require('array-shuffle')
    var handlers = Array(HANDLERS_COUNT).fill(0).map((el, i) => data => value = i + data)
    var shuffledHandlers = shuffle(handlers)

    var value = 0
    var eventsCount = 0
    var idx = 0
    var emitter = new Emitter()
    
    if (emitter.setMaxListeners) {
      emitter.setMaxListeners(0)
    }

    while (eventsCount < EVENTS_COUNT) {
      var event = `event${eventsCount++}`
      for (var i = 0; i < handlers.length; i++) {
        emitter.on(event, handlers[i])
      }
    }

    idx = eventsCount
  }

  function commonTeardown () {
    while (eventsCount) {
      var event = `event${eventsCount--}`
      for (var i = 0; i < handlers.length; i++) {
        emitter.off(event, handlers[i])
      }
    }
  }

  function nativeTeardown () {
    while (eventsCount) {
      var event = `event${eventsCount--}`
      for (var i = 0; i < handlers.length; i++) {
        emitter.removeListener(event, handlers[i])
      }
    }
  }

  function on () {
    var event = `event${eventsCount++}`
    for (var i = 0; i < handlers.length; i++) {
      emitter.on(event, handlers[i])
    }
  }

  function emit () {
    var event = `event${idx--}`
    emitter.emit(event, 42)
  }
  
  function commonOff () {
    var event = `event${idx--}`
    for (var i = 0; i < shuffledHandlers.length; i++) {
      emitter.off(event, shuffledHandlers[i])
    }
  }

  function nativeOff () {
    var event = `event${idx--}`
    for (var i = 0; i < shuffledHandlers.length; i++) {
      emitter.removeListener(event, shuffledHandlers[i])
    }
  }

  var teardown = emitter === 'events' ? nativeTeardown : teardown
  var off = emitter === 'events' ? nativeOff : commonOff

  return {
    on: {
      setup,
      teardown,
      fn: on
    },

    emit: {
      setup,
      teardown,
      fn: emit
    },

    off: {
      setup,
      teardown,
      fn:  off
    }
  }
}

module.exports = suite
