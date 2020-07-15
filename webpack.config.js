const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    main: './pgwmodal.js'
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, './')
  }
}
