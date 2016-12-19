const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config.js');

config.devtool = 'cheap-module-eval-source-map';
config.performance = {
  hints: false
};
config.entry = {
  'sanji-ui': [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './app.js'
  ]
};

config.module.rules = [
  {test: /\.js$/, use: 'ng-annotate-loader', exclude: /(node_modules)/, enforce: 'post'},
].concat(config.module.rules);

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.LoaderOptionsPlugin({
    debug: true
  }),
  new HtmlWebpackPlugin({
    template: 'index.html',
    hash: true
  })
);

module.exports = config;
