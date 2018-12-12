import React from 'react';
import { connect } from 'react-redux';

const Workout = props => (
  <div>
    {props.training.currentWorkout.map(item => (
      <p>{item.block}</p>
    ))}
  </div>
);

const mapDispatchToProps = {};

const mapStateToProps = state => ({
  training: state.training
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workout);
