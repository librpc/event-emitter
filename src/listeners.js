class Listeners {
  constructor () {
    this.list = []
    this.map = new Map()
    this.idx = 0
  }

  add (listener) {
    var idx = this.map.get(listener) || this.idx++
    this.list[idx] = listener
    this.map.set(listener, idx)
  }

  remove (listener) {
    var idx = this.map.get(listener)
    if (idx) {
      this.list.splice(idx, 1)
      this.map.delete(listener)
      this.idx--
    }
  }

  toArray () {
    return this.list.concat()
  }
}

export default Listeners
