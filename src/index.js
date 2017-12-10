import Events from './events.js'
import Listeners from './listeners.js'

class Emitter {
  constructor () {
    this.events = new Events()
  }

  on (event, listener) {
    var listeners = this.events.get(event)

    if (!listeners) {
      listeners = new Listeners()
      this.events.set(event, listeners)
    }

    listeners.add(listener)
  }

  off (event, listener) {
    var listeners = this.events.get(event)

    if (listeners) {
      listeners.remove(listener)
    }
  }

  emit (event, data) {
    var listeners = this.events.get(event)

    if (listeners) {
      var list = listeners.toArray()
      for (var i = 0; i < list.length; i++) {
        list[i](data)
      }
    }
  }
}

export default Emitter
