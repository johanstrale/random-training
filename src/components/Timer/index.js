import React, { Component } from 'react';

import Timer from './Timer';

class TimerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: this.props.minutes,
      seconds: this.props.seconds,
      label: this.props.label
    };
  }

  tick() {
    this.setState({ seconds: this.state.seconds - 1 });
  }

  countDown() {
    setTimeout(() => {
      this.tick();
    }, 1000);
  }

  render() {
    const { isStarted, isShown } = this.props;
    isStarted && this.countDown();
    const { seconds, minutes, label } = this.state;

    return <Timer minutes={minutes} seconds={seconds} label={label} isShown={isShown} />;
  }
}

export default TimerContainer;
