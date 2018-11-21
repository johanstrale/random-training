import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import ThemeProvider from './Theme';
import { defaultTheme } from '../assets/themes';
import App from './App';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    touch-action: manipulation;
    font-family: Chivo, sans-serif;
  }
`;

const Root = () => (
  <Provider>
    <ThemeProvider defaultTheme={defaultTheme}>
      <Fragment>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </Router>
      </Fragment>
    </ThemeProvider>
  </Provider>
);

export default Root;
