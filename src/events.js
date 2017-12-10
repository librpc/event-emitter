class Events {
  constructor () {
    this.map = Object.create(null)
  }

  get (event) {
    return this.map[event]
  }

  set (event, listeners) {
    this.map[event] = listeners
  }

  has (event) {
    return this.map[event]
  }
}

export default Events
