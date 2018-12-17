import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import fetchExcersises from '../../actions/excersises';
import Home from '../Home';
import Settings from '../Settings';
import Random from '../Random';
import Excersises from '../Excersises';

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  overflow-y: auto;
  padding-top: 35px;
  padding-bottom: 39px;
  min-height: 100vh;
  width: 100%;
`;

class Main extends Component {
  componentDidMount() {
    this.props.fetchExcersises();
  }

  render() {
    return (
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/settings" component={Settings} />
          <Route path="/random" component={Random} />
          <Route path="/excersises" component={Excersises} />
        </Switch>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = {
  fetchExcersises
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Main)
);
