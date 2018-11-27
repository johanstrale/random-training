import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from '../Home';
import Settings from '../Settings';
import Workout from '../Workout';
import Excersises from '../Excersises';

const MainWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding-top: 35px;
  padding-bottom: 39px;
  min-height: 100vh;
`;

const Main = props => {
  return (
    <MainWrapper>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/settings" component={Settings} />
        <Route path="/random" component={Workout} />
        <Route path="/excersises" component={Excersises} />
      </Switch>
    </MainWrapper>
  );
};

export default Main;
