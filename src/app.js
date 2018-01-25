import angular from 'angular';
import { sjRedux } from './component';

const GET_CURRENT_CATEGORY = 'GET_CURRENT_CATEGORY';
const category = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_CURRENT_CATEGORY:
      return payload || { name: undefined };
    default:
      return state;
  }
};
angular
  .module('webapp', [sjRedux])
  .config(reduxHelperProvider => {
    'ngInject';
    reduxHelperProvider.configure(
      {
        category
      },
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  })
  .run(($ngRedux, reduxHelper) => {
    'ngInject';
    const test = (state = [], { type, payload }) => {
      switch (type) {
        case 'GET_CATEGORIES':
          return payload || state;
        default:
          return state;
      }
    };
    reduxHelper.injectAsyncReducer('test', test);
    console.log($ngRedux);
  });

angular.element(document).ready(() => {
  angular.bootstrap(document.body, ['webapp']);
});
