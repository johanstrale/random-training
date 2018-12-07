import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { faPlay, faPause, faRandom, faRedo } from '@fortawesome/free-solid-svg-icons';

import Workout from '../Workout';
import RoundButton from '../Buttons/RoundButton';
import Timer from '../Timer';

const TrainingWrapper = styled.div`
  width: 100%;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px;
`;

class Training extends Component {
  state = {
    isGenerated: false,
    isStarted: false,
    seconds: 10,
    minutes: 13
  };

  randomise() {
    this.setState({});
  }

  render() {
    const { excersises } = this.props;
    const { isGenerated, isStarted, minutes, seconds } = this.state;

    const listExcersise = excersises.slice(0, 8);

    return (
      <TrainingWrapper>
        <ButtonsWrapper>
          <RoundButton icon={faRedo} handleClick={() => {}} disabled={isStarted || !isGenerated} />
          <RoundButton icon={faRandom} handleClick={() => this.setState({ isGenerated: true })} disabled={isStarted} />
          <RoundButton
            icon={isStarted ? faPause : faPlay}
            handleClick={() => this.setState({ isStarted: !isStarted })}
            disabled={!isGenerated}
          />
        </ButtonsWrapper>
        <Timer isRunning={isStarted} isShown={isGenerated} minutes={10} seconds={11} label={'Träna'} />
        {isGenerated && <Workout excersises={listExcersise} step={0} />}
      </TrainingWrapper>
    );
  }
}

const mapStateToProps = state => ({
  excersises: state.excersises
});

export default connect(mapStateToProps)(Training);
