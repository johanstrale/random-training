import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Workout from '../Workout';

const TrainingWrapper = styled.div`
  width: 100%;
`;

const ButtonWrapper = styled.button`
  text-decoration: none;
  background: #eac67a;
  color: ${props => props.theme.overlayColor};
  font-weight: 400;
  width: 80px;
  height: 80px;
  line-height: 75px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  box-shadow: 0px 0px 0px 5px #eac67a;
  border: solid 2px ${props => props.theme.overlayColor};

  :active {
    border: solid 2px ${props => props.theme.overlayBrightColor};
    color: ${props => props.theme.overlayBrightColor};
  }
`;

const ExtendedButtonWrapper = styled(ButtonWrapper)`
  :disabled {
    background: grey;
    box-shadow: 0px 0px 0px 5px grey;
    color: lightGrey;
    border: solid 2px lightGrey;
    opacity: 0.5;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px;
`;

class Training extends Component {
  state = {
    isActive: false
  };

  render() {
    const { excersises } = this.props;
    const { isActive } = this.state;

    const listExcersise = excersises.slice(0, 8);

    return (
      <TrainingWrapper>
        <ButtonsWrapper>
          <ButtonWrapper onClick={() => this.setState({ isActive: true })}>Slumpa</ButtonWrapper>
          <ExtendedButtonWrapper disabled={!this.state.isActive}>Starta</ExtendedButtonWrapper>
        </ButtonsWrapper>
        {isActive && <Workout excersises={listExcersise} />}
      </TrainingWrapper>
    );
  }
}

const mapStateToProps = state => ({
  excersises: state.excersises
});

export default connect(mapStateToProps)(Training);
