import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import ThemeProvider from './Theme';
import { defaultTheme } from '../assets/themes';
import App from './App';
import Workout from './Workout';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    font-family: Chivo, sans-serif;
    font-weight: 900;
  }
`;

const Root = ({ store }) => (
  <Provider store={store}>
    <ThemeProvider defaultTheme={defaultTheme}>
      <Fragment>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path="/workout" component={Workout} />
            <Route path="/" component={App} />
          </Switch>
        </Router>
      </Fragment>
    </ThemeProvider>
  </Provider>
);

export default Root;
