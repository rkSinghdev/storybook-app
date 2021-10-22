
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./learning-app.cjs.production.min.js')
} else {
  module.exports = require('./learning-app.cjs.development.js')
}
