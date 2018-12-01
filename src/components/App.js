import React from 'react';
import styled from 'styled-components';

import Header from './Layout/Header';
import Main from './Layout/Main';
import Navigation from './Layout/Navigation';

const AppWrapper = styled.div`
  background-color: ${props => props.theme.baseColor};
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Main />
      <Navigation />
    </AppWrapper>
  );
};

export default App;
