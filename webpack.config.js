/*global __dirname, require */

const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: './bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: './',
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        exclude: '/node_modules/',
        loader: 'babel-loader',
      },
    ],
  },
}
