import angular from 'angular';
import ngRedux from 'ng-redux';

import ReduxHelperProvider from './redux-helper';

const sjRedux = angular.module('sanji.redux', [ngRedux])
  .provider('reduxHelper', ReduxHelperProvider)
  .config($provide => {
    'ngInject';
    $provide.decorator('$ngRedux', $delegate => {
      'ngInject';
      $delegate.asyncReducers = {};
      return $delegate;
    });
  })
  .name;
export { sjRedux };
