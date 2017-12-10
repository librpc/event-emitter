var Benchmark = require('benchmark')

var suite = require('./suite.js')

var Suite = Benchmark.Suite

var emitters = [
  'events',
  'minivents',
  'mitt',
  'eventemitter3',
  '../dist/event-emitter.umd.js'
]

var results = []

function onComplete (event) {
  results.push(event)
}

function bench () {
  var suites = []

  for (var i = 0; i < emitters.length; i++) {
    var bench = new Suite(emitters[i])
    var emitter = suite(emitters[i])
    for (var method in emitter) {
      bench.add(emitters[i], emitter[method])
    }
    bench.on('complete', onComplete)
    suites.push(bench)
  }

  for (var k = 0; k < suites.length; k++) {
    suites[k].run()
  }

  return results
}

module.exports = bench
