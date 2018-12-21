import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Workout from './Workout';

import {
  fetchWorkout,
  initWorkout,
  stopWorkout,
  startWorkout,
  completeWorkout,
  updateWorkout,
  finishWorkout,
  tickWorkout
} from '../../actions/workout';

const Wrapper = styled.div`
  padding: 10px 0 10px 0;
  background-color: ${props => props.theme.baseColor};
  min-height: 100vh;
`;

class WorkoutContainer extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
  }

  componentDidMount() {
    this.props.fetchWorkout(this.props.excersises, this.props.settings);
    this.props.initWorkout();
  }

  componentDidUpdate(prevProps) {
    if (this.props.workout.isStarted !== prevProps.workout.isStarted) {
      if (this.props.workout.isStarted) {
        this.timer = setInterval(() => {
          this.tick();
        }, 1000);
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    const {
      workout: { timeLeft, entries }
    } = this.props;
    if (timeLeft <= 0) {
      if (entries.length > 1) {
        this.props.updateWorkout(entries.slice(1));
      } else {
        clearInterval(this.timer);
        this.props.completeWorkout();
      }
    } else {
      this.props.tickWorkout();
    }
  }

  startWorkout() {
    this.props.startWorkout();
  }

  stopWorkout() {
    clearInterval(this.timer);
    this.props.stopWorkout();
  }

  finishWorkout() {
    this.props.finishWorkout();
  }

  render() {
    if (!this.props.workout.entries.length) {
      return null;
    }

    return (
      <Wrapper>
        <Workout
          workout={this.props.workout}
          onStart={() => this.startWorkout()}
          onStop={() => this.stopWorkout()}
          onFinish={() => this.finishWorkout()}
        />
      </Wrapper>
    );
  }
}

const mapDispatchToProps = {
  fetchWorkout,
  initWorkout,
  tickWorkout,
  startWorkout,
  stopWorkout,
  completeWorkout,
  updateWorkout,
  finishWorkout
};

const mapStateToProps = state => ({
  workout: state.workout,
  excersises: state.excersises.randomItems,
  settings: state.settings
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(WorkoutContainer)
);
