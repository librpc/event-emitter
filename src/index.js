class Emitter {
  constructor () {
    this.events = Object.create(null)
  }

  on (event, listener) {
    var listeners = this.events[event]

    if (!listeners) {
      listeners = []
      this.events[event] = listeners
    }

    listeners.push(listener)
  }

  off (event, listener) {
    var listeners = this.events[event]

    if (listeners) {
      var idx = listeners.indexOf(listener)
      if (idx !== -1) {
        listeners.splice(idx, 1)
      }
    }
  }

  emit (event, data) {
    var listeners = this.events[event]

    if (listeners) {
      for (var i = 0; i < listeners.length; i++) {
        listeners[i](data)
      }
    }
  }
}

export default Emitter
