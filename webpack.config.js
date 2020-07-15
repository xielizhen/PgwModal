const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    pgwmodal: './pgwmodal.js'
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, './')
  }
}
