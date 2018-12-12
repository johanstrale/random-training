import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { faPlay, faRandom } from '@fortawesome/free-solid-svg-icons';

import RandomSection from './RandomSection';
import RoundButton from '../Buttons/RoundButton';
import setCurrentWorkout from '../../actions/training';

const RandomWrapper = styled.div`
  width: inherit;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px;
`;

const RandomSectionsWrapper = styled.div`
  margin: 10px;
`;

class Random extends Component {
  startTraining() {
    const { history } = this.props;
    history.push('/workout');
  }

  getRandomExcersises() {
    const { excersises } = this.props;
    const excersiseList = [];
    while (excersiseList.length < 2) {
      excersiseList.push(excersises[Math.floor(Math.random() * excersises.length)]);
    }
    return excersiseList;
  }

  generateTraining() {
    const workout = [];

    while (workout.length < 4) {
      workout.push({
        block: workout.length + 1,
        excersises: this.getRandomExcersises()
      });
    }
    this.props.setCurrentWorkout(workout);
  }

  render() {
    const {
      training: { isGenerated, currentWorkout }
    } = this.props;

    return (
      <RandomWrapper>
        <ButtonsWrapper>
          <RoundButton icon={faRandom} handleClick={() => this.generateTraining()} />
          <RoundButton icon={faPlay} handleClick={() => this.startTraining()} disabled={!isGenerated} />
        </ButtonsWrapper>
        {isGenerated && (
          <RandomSectionsWrapper>
            {currentWorkout.map((section, i) => (
              <RandomSection key={i} section={section} />
            ))}
          </RandomSectionsWrapper>
        )}
      </RandomWrapper>
    );
  }
}

const mapDispatchToProps = {
  setCurrentWorkout
};

const mapStateToProps = state => ({
  excersises: state.excersises,
  training: state.training
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Random)
);
