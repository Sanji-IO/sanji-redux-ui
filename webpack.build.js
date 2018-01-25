const webpack = require('webpack');
const config = require('./webpack.config.js');

config.devtool = 'source-map';
config.entry = {
  'sanji-ui': './component/index.js'
};
config.output.filename = 'sanji-redux-ui.js';
config.output.libraryTarget = 'umd';
config.output.library = 'sjRedux';
config.externals = ['angular', 'ng-redux', 'redux', 'redux-thunk'];

config.plugins.push(
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
