import React from 'react';
import styled from 'styled-components';

const TimerWrapper = styled.div`
  margin: 25px 20px 25px 20px;
  color: ${props => props.theme.textColor};
  font-weight: 400;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
`;

const Timer = ({ seconds }) => (
  <TimerWrapper>
    <p>Tid kvar:</p>
    <p>00:{seconds < 10 ? `0${seconds}` : seconds}</p>
  </TimerWrapper>
);

export default Timer;
