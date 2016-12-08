const webpack = require('webpack');
const config = require('./webpack.config.js');

config.devtool = 'source-map';
config.entry = {
  'sanji-ui': './component/index.js'
};
config.output.filename = 'sanji-redux-ui.js';
config.output.libraryTarget = 'umd';
config.output.library = 'sjRedux';
config.externals = {
  angular: {
    root: 'angular',
    commonjs2: 'angular',
    commonjs: 'angular',
    amd: 'angular'
  },
  'ng-redux': {
    root: 'ngRedux',
    commonjs2: 'ng-redux',
    commonjs: 'ng-redux'
  },
  'redux': {
    root: 'redux',
    commonjs2: 'redux',
    commonjs: 'redux',
    amd: 'redux'
  },
  'redux-thunk': {
    root: 'thunk',
    commonjs2: 'redux-thunk',
    commonjs: 'redux-thunk'
  }
};

config.module.rules = [
  {test: /\.js$/, loader: 'ng-annotate-loader', exclude: /(node_modules)/, enforce: 'post'},
].concat(config.module.rules);

config.plugins.push(
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
    quiet: true
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      screw_ie8: true,
      warnings: false,
      dead_code: true
    }
  })
);
module.exports = config;
