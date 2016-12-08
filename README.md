# sanji-redux-ui
> Sanji redux helper service is part of Sanji UI framework and also it is a angular
module. It is just a ng-redux wrapper and help configure the application store.

[sanji-redux-ui-icon]: https://nodei.co/npm/sanji-redux-ui.png?downloads=true
[sanji-redux-ui-url]: https://npmjs.org/package/sanji-redux-ui
[quality-badge]: http://npm.packagequality.com/badge/sanji-redux-ui.png
[quality-url]: http://packagequality.com/#?package=sanji-redux-ui
[travis-build-badge]: https://travis-ci.org/Sanji-IO/sanji-redux-ui.svg?branch=master
[travis-build-url]: https://travis-ci.org/Sanji-IO/sanji-redux-ui
[sanji-redux-ui-coverage-image]: http://codecov.io/github/Sanji-IO/sanji-redux-ui/coverage.svg?branch=master
[sanji-redux-ui-coverage-url]: http://codecov.io/github/Sanji-IO/sanji-redux-ui?branch=master
[sanji-redux-ui-codacy-image]: https://api.codacy.com/project/badge/13d7e2e9bf1b40a3bd9a3113c7cea587
[sanji-redux-ui-codacy-url]: https://www.codacy.com/public/zack9433/sanji-redux-ui.git
[dependencies-image]: https://david-dm.org/Sanji-IO/sanji-redux-ui.png
[dependencies-url]: https://david-dm.org/Sanji-IO/sanji-redux-ui
[devdependencies-image]: https://david-dm.org/Sanji-IO/sanji-redux-ui/dev-status.png
[devdependencies-url]: https://david-dm.org/Sanji-IO/sanji-redux-ui#info=devDependencies
[semantic-release-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/

[![NPM][sanji-redux-ui-icon]][sanji-redux-ui-url]
[![Package Quality][quality-badge]][quality-url]
[![Build Status][travis-build-badge]][travis-build-url]
[![Coverage Status][sanji-redux-ui-coverage-image]][sanji-redux-ui-coverage-url]
[![Codacy Badge][sanji-redux-ui-codacy-image]][sanji-redux-ui-codacy-url]
[![dependencies][dependencies-image]][dependencies-url]
[![devdependencies][devdependencies-image]][devdependencies-url]
[![semantic-release][semantic-release-image]][semantic-release-url]
[![Commitizen friendly][commitizen-image]][commitizen-url]

## Dependencies
- [angularjs](https://github.com/angular/angular.js)
- [ng-redux](https://github.com/angular-redux/ng-redux)
- [redux-thunk](https://github.com/gaearon/redux-thunk)

## Installation
Sanji redux helper is based on es6 + webpack to development and embrace npm to install it.

```shell
npm install sanji-redux-ui --save
```

## How to use

```javascript
const category = (state = {}, {type, payload}) => {
  switch (type) {
  case 'GET_CURRENT_CATEGORY':
    return payload || { name: undefined };
  default:
    return state;
  }
};
angular.module('webapp', ['sanji.redux'])
.config(reduxHelperProvider => {
  'ngInject';
  reduxHelperProvider.configure({
    category
  });
})
.run((reduxHelper) => {
  'ngInject';
  const test = (state = [], {type, payload}) => {
    switch (type) {
    case 'GET_CATEGORIES':
      return payload || state;
    default:
      return state;
    }
  };
  // Dynamically inject reducer
  reduxHelper.injectAsyncReducer('test', test);
});
```

## Integrate Chrome Redux Devtool Extention
[Redux DevTools extension](https://github.com/zalmoxisus/redux-devtools-extension)
```javascript
reduxHelperProvider.configure({
    category
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
```

## Contact

Author: Zack Yang &copy; 2016

* [@zack9433](https://twitter.com/zack9433)

Support: if you find any problems with this library,
[open issue](https://github.com/Sanji-IO/sanji-redux-ui/issues) on Github