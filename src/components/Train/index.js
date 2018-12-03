import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Workout from '../Workout';

const RandomWrapper = styled.div`
  width: 100%;
`;

const ButtonWrapper = styled.button`
  display: inline-block;
  text-decoration: none;
  background: #8cd460;
  color: rgba(255, 255, 255, 0.47);
  font-weight: bold;
  width: 120px;
  height: 120px;
  line-height: 120px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  box-shadow: 0px 0px 0px 5px #8cd460;
  border: solid 2px rgba(255, 255, 255, 0.47);
`;

class Random extends Component {
  state = {
    isActive: false
  };

  render() {
    const { excersises } = this.props;
    const { isActive } = this.state;

    const listExcersise = excersises.slice(0, 8);

    return (
      <RandomWrapper>
        <ButtonWrapper onClick={() => this.setState({ isActive: true })}>Slumpa</ButtonWrapper>
        {isActive && <Workout excersises={listExcersise} />}
      </RandomWrapper>
    );
  }
}

const mapStateToProps = state => ({
  excersises: state.excersises
});

export default connect(mapStateToProps)(Random);
