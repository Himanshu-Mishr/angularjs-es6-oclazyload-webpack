const path = require('path');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'css-loader' ]
      }
    ]
  },
  plugins: [
    new WriteFilePlugin()
  ],
};