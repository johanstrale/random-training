import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

import Settings from '../Settings';
import Workout from '../Workout';
import WorkoutList from '../Workouts';

const MainWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding-top: 45px;
  padding-bottom: 45px;
  min-height: 100vh;
}
`;

const Home = () => <FontAwesomeIcon icon={faDumbbell} color='lightgrey' size='4x'/>

const Main = props => (
  <MainWrapper>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/settings" component={Settings} />
      <Route path="/workout" component={Workout} />
      <Route path="/workouts" component={WorkoutList} />
    </Switch>
  </MainWrapper>
);

export default Main;
