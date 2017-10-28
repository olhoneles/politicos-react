/*global __dirname, require */

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  cache: true,
  entry: path.join(__dirname, '../src/index.js'),
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '',
    filename: 'politicos.[hash:8].js',
    library: 'politicos',
    libraryTarget: 'umd',
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '../style'),
        to: path.join(__dirname, '../dist/style'),
      },
    ]),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, '../dist/index.html'),
      template: path.join(__dirname, '../index.html'),
    }),
    new webpack.LoaderOptionsPlugin({
      inline: true,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
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
    ],
  },
}
