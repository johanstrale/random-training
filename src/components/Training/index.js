import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRandom } from '@fortawesome/free-solid-svg-icons';

import Workout from '../Workout';

const TrainingWrapper = styled.div`
  width: 100%;
`;

const ButtonWrapper = styled.button`
  text-decoration: none;
  background: #eac67a;
  color: ${props => props.theme.overlayColor};
  width: 60px;
  height: 60px;
  line-height: 55px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  box-shadow: 0px 0px 0px 5px #eac67a;
  border: solid 2px ${props => props.theme.overlayColor};

  :active {
    border: solid 2px ${props => props.theme.overlayBrightColor};
    opacity: 0.9;
  }

  :disabled {
    background: grey;
    box-shadow: 0px 0px 0px 5px grey;
    color: lightGrey;
    border: solid 2px lightGrey;
    opacity: 0.5;
  }
`;

const ExtendedButtonWrapper = styled(ButtonWrapper)``;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px;
`;

class Training extends Component {
  state = {
    isActive: false,
    isStarted: false
  };

  render() {
    const { excersises } = this.props;
    const { isActive } = this.state;

    const listExcersise = excersises.slice(0, 8);

    return (
      <TrainingWrapper>
        <ButtonsWrapper>
          <ButtonWrapper disabled={this.state.isStarted} onClick={() => this.setState({ isActive: true })}>
            <FontAwesomeIcon icon={faRandom} size="lg" />
          </ButtonWrapper>
          <ExtendedButtonWrapper
            onClick={() => this.setState({ isStarted: !this.state.isStarted })}
            disabled={!this.state.isActive}
          >
            <FontAwesomeIcon icon={this.state.isStarted ? faPause : faPlay} size="lg" />
          </ExtendedButtonWrapper>
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
