import React from 'react';
import styled from 'styled-components';

import Header from './Layout/Header';
import Main from './Layout/Main';
import Navigation from './Layout/Navigation';

const AppWrapper = styled.div`
  background-color: ${props => props.theme.backgroundColor};
`;

const App = () => {
  return (
    <AppWrapper>
      <Header headerTitle='Välkommen'/>
      <Main />
      <Navigation />
    </AppWrapper>
  );
};

export default App;
