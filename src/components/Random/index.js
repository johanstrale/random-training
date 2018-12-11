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

  generateTraining() {
    const { excersises } = this.props;
    const workoutObject = [];
    workoutObject.push({ block: 1, excersises: excersises.slice(0, 2) });
    workoutObject.push({ block: 2, excersises: excersises.slice(2, 4) });
    workoutObject.push({ block: 3, excersises: excersises.slice(4, 6) });
    workoutObject.push({ block: 4, excersises: excersises.slice(6, 8) });
    this.props.setCurrentWorkout(workoutObject);
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
