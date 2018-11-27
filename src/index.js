import React from 'react';
import ReactDOM from 'react-dom';

import 'reset-css';
import Root from './components/Root';
import * as serviceWorker from './components/serviceWorker';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
