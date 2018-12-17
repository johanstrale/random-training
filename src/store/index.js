import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = initialState => {
  const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));
  return store;
};

export default configureStore;
