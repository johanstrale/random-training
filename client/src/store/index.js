import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { loadState, saveState } from './localstorage';

import reducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const persistedStateloadState = loadState();
  const store = createStore(reducers, persistedStateloadState, composeEnhancers(applyMiddleware(thunk)));
  store.subscribe(() => {
    saveState(store.getState());
  });
  return store;
};

export default configureStore;
