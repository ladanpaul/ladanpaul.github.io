let webpack = require('webpack');
let path = require('path');
let HTMLWebpackPlugin = require('html-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';
const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_BUILD = path.resolve(__dirname, 'public', 'build');

module.exports = {
  entry: './src/main.js',
  output: {
    path: DIST_BUILD,
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  devtool: NODE_ENV === 'development' && 'eval-source-map',
  watch: NODE_ENV === 'development',
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      include: SRC_DIR,
      loader: 'babel-loader',
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(NODE_ENV),
      }
    }),
    new HTMLWebpackPlugin({
      template: './public/index.html',
    })
  ],
  devServer: {
    port: 9000,
    stats: 'errors-only',
    clientLogLevel: 'warning',
    compress: true
  }
}