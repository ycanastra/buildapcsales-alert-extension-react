var path = require('path');

var config = {
  context: path.join(__dirname, 'src/popup'),
  entry: [
    './App.jsx',
  ],
  output: {
    path: path.join(__dirname, 'extension/src/popup/'),
    filename: 'popup_bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      }
    ],
  },
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  resolve: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
module.exports = config;
