import angular from 'angular';
import 'angular-mocks';

import { sjRedux } from './index' ;

let sandbox;
let $ngRedux, reduxHelper, reduxHelperProvider, $ngReduxProvider;

describe('Provider: reduxHelper', function() {
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  beforeEach(angular.mock.module(sjRedux));

  beforeEach(function() {
    angular.mock.module(function(_reduxHelperProvider_, _$ngReduxProvider_) {
      const test = (state = [], {type, payload}) => {
        switch (type) {
        case 'GET_CATEGORIES':
          return payload || state;
        default:
          return state;
        }
      };
      reduxHelperProvider = _reduxHelperProvider_;
      $ngReduxProvider = _$ngReduxProvider_;
      reduxHelperProvider.configure({test});
    });
  });

  beforeEach(function() {
    angular.mock.inject(function(_$ngRedux_, _reduxHelper_) {
      $ngRedux = _$ngRedux_;
      reduxHelper = _reduxHelper_;
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('#configure() should extend config', () => {
    const test = (state = [], {type, payload}) => {
      switch (type) {
      case 'GET_CATEGORIES':
        return payload || state;
      default:
        return state;
      }
    };
    const config = {
      test
    };
    sandbox.spy($ngReduxProvider, 'createStoreWith');
    reduxHelperProvider.configure(config);
    expect($ngReduxProvider.createStoreWith).to.be.called.once;
    expect(reduxHelperProvider.config).to.eql(config);
  });

  it('#$get(<...injects>) should return redux helper service instance', () => {
    const obj = reduxHelperProvider.$get($ngRedux);
    expect(obj.createReducer).to.be.a('function');
    expect(obj.injectAsyncReducer).to.be.a('function');
  });

  describe('Service: reduxHelper', () => {
    it('#createReducer<reducers> should return reducers', () => {
      const test = (state = [], {type, payload}) => {
        switch (type) {
        case 'GET_CATEGORIES':
          return payload || state;
        default:
          return state;
        }
      };
      const result = reduxHelper.createReducer({
        test
      });
      expect(result).to.be.a('function');
    });

    it('#injectAsyncReducer(<name, asyncReducer>) should set reducer dynamically', () => {
      const test = (state = [], {type, payload}) => {
        switch (type) {
        case 'GET_CATEGORIES':
          return payload || state;
        default:
          return state;
        }
      };
      reduxHelper.injectAsyncReducer('foo', test);
      expect($ngRedux.asyncReducers.foo).exist;
    });
  });
});
