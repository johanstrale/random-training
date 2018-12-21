import React from 'react';
import styled from 'styled-components';

import shortBeep from '../../assets/sounds/beep-07.mp3';
import longBeep from '../../assets/sounds/beep-09.mp3';

const TimerWrapper = styled.div`
  margin: 25px 20px 25px 20px;
  color: ${props => props.theme.textColor};
  font-weight: 400;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

const shortBeepRef = React.createRef();
const longBeepRef = React.createRef();

const beep = timeLeft => {
  if (timeLeft === 0) {
    longBeepRef.current.play();
  } else if (timeLeft <= 3) {
    shortBeepRef.current.play();
  }
};

const Timer = ({ time }) => {
  beep(time);
  return (
    <TimerWrapper>
      <audio ref={shortBeepRef} src={shortBeep} />
      <audio ref={longBeepRef} src={longBeep} />
      <p>Tid kvar:</p>
      <p>00:{time < 10 ? `0${time}` : time}</p>
    </TimerWrapper>
  );
};

export default Timer;
