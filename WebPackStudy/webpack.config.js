let webpack = require('webpack');
let path = require('path');
let HTMLWebpackPlugin = require('html-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname+'/dist',
    publicPath: '',
    filename: 'bundle.js'
  },
  devtool: NODE_ENV === 'development' && 'eval-source-map',
  watch: NODE_ENV === 'development',
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['es2016', 'react']
          }
        }
      ]
    }, {
      test: /\.css$/,
      exclude: /node_modules/,      
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" }
      ]    
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
    compress: false
  }
}