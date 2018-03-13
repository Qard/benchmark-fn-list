'use strict'

var tap = require('tap')
var benchList = require('./')

tap.test('it works', function (t) {
  var count = 0
  function bench(name) {
    return {
      name: name,
      task(cb) {
        count++
        cb()
      }
    }
  }

  benchList([
    bench('bench #0'),
    bench('bench #1'),
    bench('bench #2')
  ], function (results) {
    t.ok(results)
    t.equal(results.length, 3)
    results.forEach(function (result, i) {
      t.equal(result.name, 'bench #' + i)
      t.equal(result.iterations, 10000)
      t.ok(result.time.seconds > 0)
      t.ok(result.time.milliseconds > 0)
      t.ok(result.time.nanoseconds > 0)
    })
    t.end()
  })
})
