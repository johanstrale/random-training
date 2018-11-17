import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './App';

const Root = () => (
  <Provider>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
