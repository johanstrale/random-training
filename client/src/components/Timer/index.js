import React from 'react';
import styled from 'styled-components';

const TimerWrapper = styled.div`
  margin: 25px 20px 25px 20px;
  color: ${props => props.theme.textColor};
  font-weight: 400;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

const Timer = ({ time }) => (
  <TimerWrapper>
    <p>Tid kvar:</p>
    <p>00:{time < 10 ? `0${time}` : time}</p>
  </TimerWrapper>
);

export default Timer;
