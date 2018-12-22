import React, { Component } from 'react';
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

class Timer extends Component {
  constructor(props) {
    super(props);
    this.shortBeepRef = React.createRef();
    this.longBeepRef = React.createRef();
  }

  componentDidUpdate() {
    this.beep();
  }

  beep = timeLeft => {
    if (timeLeft === 0) {
      this.longBeepRef.current.play();
    } else if (timeLeft <= 3) {
      this.shortBeepRef.current.play();
    }
  };

  render() {
    const { time } = this.props;
    return (
      <TimerWrapper>
        <audio ref={this.shortBeepRef} src={shortBeep} />
        <audio ref={this.longBeepRef} src={longBeep} />
        <p>Tid kvar:</p>
        <p>00:{time < 10 ? `0${time}` : time}</p>
      </TimerWrapper>
    );
  }
}

export default Timer;
