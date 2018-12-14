import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { faPlay, faRandom } from '@fortawesome/free-solid-svg-icons';

import RandomSection from './RandomSection';
import RoundButton from '../Buttons/RoundButton';
import setCurrentWorkout from '../../actions/training';

const Wrapper = styled.div`
  width: inherit;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px;
`;

const SectionsWrapper = styled.div`
  margin: 10px;
`;

class Random extends Component {
  startTraining() {
    const { history } = this.props;
    history.push('/workout');
  }

  getRandomExcersises() {
    const { excersises } = this.props;
    const excersiseList = [excersises[Math.floor(Math.random() * excersises.length)]];

    while (excersiseList.length < 8) {
      const randomExcersise = excersises[Math.floor(Math.random() * excersises.length)];
      const lastExcersise = excersiseList.length - 1;

      if (
        excersiseList[lastExcersise] &&
        excersiseList[lastExcersise] !== randomExcersise &&
        excersiseList[lastExcersise].mainMuscleGroup !== randomExcersise.mainMuscleGroup &&
        !excersiseList.includes(randomExcersise)
      ) {
        excersiseList.push(randomExcersise);
      }
    }
    return excersiseList;
  }

  generateTraining() {
    const workout = [];
    const excersises = this.getRandomExcersises();
    let index = 0;

    while (index < excersises.length) {
      workout.push({
        block: workout.length + 1,
        excersises: excersises.slice(index, index + 2)
      });
      index = index + 2;
    }
    this.props.setCurrentWorkout(workout);
  }

  render() {
    const {
      training: { isGenerated, currentWorkout }
    } = this.props;

    return (
      <Wrapper>
        <ButtonsWrapper>
          <RoundButton icon={faRandom} handleClick={() => this.generateTraining()} />
          <RoundButton icon={faPlay} handleClick={() => this.startTraining()} disabled={!isGenerated} />
        </ButtonsWrapper>
        {isGenerated && (
          <SectionsWrapper>
            {currentWorkout.map((section, i) => (
              <RandomSection key={i} section={section} />
            ))}
          </SectionsWrapper>
        )}
      </Wrapper>
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
