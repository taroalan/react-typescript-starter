const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.base.config');

const devConfig = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  devServer: {
    port: 9001,
    hot: true,
    historyApiFallback: true,
  },
};

module.exports = merge(config, devConfig);
