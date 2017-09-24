/*global __dirname, require */

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  cache: true,
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    publicPath: '',
    filename: 'politicos.[hash:8].js',
    library: 'politicos',
    libraryTarget: 'umd',
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: __dirname + '/style', to: __dirname + '/dist/style' },
    ]),
    new HtmlWebpackPlugin({
      filename: __dirname + '/dist/index.html',
      template: __dirname + '/index.html',
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
