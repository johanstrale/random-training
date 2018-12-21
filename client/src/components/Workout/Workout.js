import React from 'react';
import styled from 'styled-components';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

import Excersise from '../Excersise';
import Timer from '../Timer';
import CompleteWorkout from './CompleteWorkout';
import RoundButton from '../Buttons/RoundButton';

const Wrapper = styled.div``;

const ExcersiseWrapper = styled.div`
  border-bottom: solid 1px ${props => props.theme.borderColor};
  border-top: solid 1px ${props => props.theme.borderColor};
  margin-bottom: 15px;

  :nth-child(2) {
    margin-bottom: 50px;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 20px;
  text-align: center;
`;

const Workout = ({ workout, onStart, onStop, onFinish }) => {
  if (workout.isComplete) {
    return <CompleteWorkout onFinish={onFinish} />;
  }

  return (
    <Wrapper>
      <Timer time={workout.timeLeft} />
      {workout.entries.map((entry, i) => (
        <ExcersiseWrapper key={i}>
          <Excersise excersise={entry.excersise} active={i === 0} slim />
        </ExcersiseWrapper>
      ))}
      <ButtonWrapper>
        {!workout.isStarted && <RoundButton icon={faPlay} size={70} handleClick={() => onStart()} />}
        {workout.isStarted && <RoundButton icon={faPause} size={70} handleClick={() => onStop()} />}
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Workout;
