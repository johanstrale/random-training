import React from 'react';
import styled from 'styled-components';

import Header from './Layout/Header';
import Main from './Layout/Main';
import Navigation from './Layout/Navigation';

const Wrapper = styled.div`
  background-color: ${props => props.theme.baseColor};
`;

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Navigation />
    </Wrapper>
  );
};

export default App;
