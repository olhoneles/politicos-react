/*global __dirname, require */

var webpack = require('webpack')

module.exports = {
  cache: true,
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist/',
    filename: 'politicos.js',
    library: 'politicos',
    libraryTarget: 'umd',
  },
  plugins: [
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
