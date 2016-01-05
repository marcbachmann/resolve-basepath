# resolve-basepath

`resolve-basepath` extends node's `path.resolve` with a base path feature.

```js
// default node path.resolve
var resolve = require('resolve-basepath')
resolve('foo', 'bla') // returns '/currentdir/foo/bla'

// path.resolve with a base path
var resolve2 = require('resolve-basepath').base(__dirname)
resolve2('foo', 'bla') // returns '/directoryOfScript/foo/bla'

// path.resolve with multiple base paths
var resolve2 = require('resolve-basepath').base(__dirname, 'foo')
resolve2('bla') // returns '/directoryOfScript/foo/bla'
```
