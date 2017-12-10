var Table = require('cli-table2')
var benchmark = require('./benchmark.js')

var results = benchmark()

var table = new Table({
  head: ['EMITTER', 'ON', 'EMIT', 'OFF']
})

results.forEach(result => {
  var target = result.currentTarget
  var row = [target.name]
  for (var i = 0; i < target.length; i++) {
    row.push(target[i].hz.toLocaleString('en-US', {maximumFractionDigits: 0}))
  }
  table.push(row)
})

console.log(table.toString())
