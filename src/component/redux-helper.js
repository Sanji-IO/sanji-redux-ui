import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

const $inject = ['$ngReduxProvider'];
class ReduxHelperProvider {
  constructor(...injects) {
    ReduxHelperProvider.$inject.forEach((item, index) => this[item] = injects[index]);
    this.config = {};

    this.configure = (cfg, enhancer) => {
      this.config = Object.assign({}, this.config, cfg);
      const rootReducer = combineReducers(this.config);
      this.$ngReduxProvider.createStoreWith(rootReducer, [thunk], [enhancer]);
    };
  }

  $get($ngRedux) {
    'ngInject';
    const config = this.config;
    return {
      createReducer,
      injectAsyncReducer
    };

    function createReducer(asyncReducers) {
      return combineReducers(Object.assign({}, config, asyncReducers));
    }

    function injectAsyncReducer(name, asyncReducer) {
      $ngRedux.asyncReducers[name] = asyncReducer;
      $ngRedux.replaceReducer(createReducer($ngRedux.asyncReducers));
    }
  }
}
ReduxHelperProvider.$inject = $inject;

export default ReduxHelperProvider;