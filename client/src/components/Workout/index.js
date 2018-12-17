import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

import Excersise from '../Excersise';
import Timer from '../Timer';
import RoundButton from '../Buttons/RoundButton';
import { startWorkout, pauseWorkout } from '../../actions/workout';

const Wrapper = styled.div`
  padding: 10px 0 10px 0;
  background-color: ${props => props.theme.baseColor};
  min-height: 100vh;
`;

const HeadlineWrapper = styled.div`
  width: inherit;
  color: ${props => props.theme.textColor};
  font-size: 1.5rem;
  text-align: center;
`;

const StartButtonWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 20px;
  text-align: center;
`;

class Workout extends Component {
  getWorkoutBlock(workout) {
    const { blocks, activeBlock } = workout;
    return blocks[activeBlock];
  }

  toggleWorkout() {
    const {
      workout: { isRunning }
    } = this.props;
    isRunning ? this.props.pauseWorkout() : this.props.startWorkout();
  }

  render() {
    const { workout } = this.props;

    const block = this.getWorkoutBlock(workout);

    return block ? (
      <Wrapper>
        <HeadlineWrapper>Block {block.number}</HeadlineWrapper>
        <Timer seconds={workout.timeRemaining} />
        {block.excersises &&
          block.excersises.map((excersise, i) => (
            <Excersise
              key={i}
              excersise={excersise}
              active={block.activeExcersise === i && workout.isRunning && !workout.isIntro}
            />
          ))}
        <StartButtonWrapper>
          <RoundButton icon={workout.isRunning ? faPause : faPlay} size={70} handleClick={() => this.toggleWorkout()} />
        </StartButtonWrapper>
      </Wrapper>
    ) : null;
  }
}

const mapDispatchToProps = {
  startWorkout,
  pauseWorkout
};

const mapStateToProps = state => ({
  workout: state.workout
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workout);
