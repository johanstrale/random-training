import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import RoundButton from '../Buttons/RoundButton';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.textColor};

  p {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const handleClick = (history, onFinish) => {
  onFinish();
  history.push('/random');
};

const CompleteWorkout = ({ history, onFinish }) => (
  <Wrapper>
    <p>Bra jobbat!</p>
    <RoundButton icon={faCheck} size={70} handleClick={() => handleClick(history, onFinish)} />
  </Wrapper>
);

export default withRouter(CompleteWorkout);
