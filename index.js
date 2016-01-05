var path = require('path')
var concat = require('concat-arrays')
module.exports = resolve

function resolve () {
  return path.resolve.apply(null, arguments)
}

resolve.base = function composeResolveWithBase () {
  var bases = arguments
  return function resolveWithBase () {
    return path.resolve.apply(null, concat(bases, arguments))
  }
}
