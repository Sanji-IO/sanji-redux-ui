const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config.js');

config.devtool = 'cheap-module-eval-source-map';
config.performance = {
  hints: false
};
config.entry = {
  'sanji-ui': ['webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:8080', './app.js']
};

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    template: 'index.html',
    hash: true
  })
);

module.exports = config;
