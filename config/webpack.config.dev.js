/*global __dirname, require */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: [path.join(__dirname, '../src/index.js')],
  output: {
    path: path.join(__dirname, '../'),
    publicPath: '/',
    filename: './bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: './',
  },
  resolve: {
    modules: [path.join(__dirname, '../src'), 'node_modules'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../index.html'),
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
}
