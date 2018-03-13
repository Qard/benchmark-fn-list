'use strict'

var benchFn = require('benchmark-fn')

module.exports = function benchList (benches, callback) {
  var results = []
  function step () {
    var next = benches.shift()
    if (!next) return callback(results)
    benchFn(next, function (result) {
      results.push(result)
      step()
    })
  }
  step()
}
