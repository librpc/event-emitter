var Benchmark = require('benchmark')
var suite = require('./suite.js')
var Suite = Benchmark.Suite

var results = []

function onComplete (event) {
  results.push(event)
}

function bench (emitters) {
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
