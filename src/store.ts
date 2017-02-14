import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as createLogger from 'redux-logger';
import rootReducer from './reducers';

declare const window: any;
declare const module: any;

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
  }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    logger,
    thunk
  )
); 

export default function configureStore(initialState: any) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
