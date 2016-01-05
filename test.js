var assert = require('assert')
var resolve = require('./index')

assert.equal(resolve(__dirname, 'foo'), resolve('foo'))

var resolveWithBase = resolve.base(__dirname, 'foo')
assert.equal(resolve(__dirname, 'foo'), resolveWithBase())

process.on('exit', function (exitCode) {
  if (!exitCode) console.log('All tests succeeded.')
})
