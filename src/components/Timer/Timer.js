import React from 'react';
import styled from 'styled-components';

const TimerWrapper = styled.div`
  margin: 25px 10px 25px 10px;
  color: ${props => props.theme.textColor};
  font-weight: 400;
  font-size: 1.3rem;
  display: flex;
  justify-content: space-between;
  visibility: ${props => (props.isShown ? 'visible' : 'hidden')};
`;

const Timer = ({ minutes, seconds, label, isShown }) => (
  <TimerWrapper isShown={isShown}>
    <p>
      {minutes}:{seconds}
    </p>
    <p>{label}</p>
  </TimerWrapper>
);

export default Timer;
