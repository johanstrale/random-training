import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { faPlay, faRandom } from '@fortawesome/free-solid-svg-icons';

import RandomBlock from './RandomBlock';
import RoundButton from '../Buttons/RoundButton';
import { getWorkout } from '../../actions/workout';

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

  generateTraining() {
    const { getWorkout, excersises, settings } = this.props;
    getWorkout(excersises, settings);
  }

  render() {
    const { workout } = this.props;

    return (
      <Wrapper>
        <ButtonsWrapper>
          <RoundButton icon={faRandom} handleClick={() => this.generateTraining()} />
          <RoundButton icon={faPlay} handleClick={() => this.startTraining()} disabled={!workout.blocks.length > 0} />
        </ButtonsWrapper>
        {
          <SectionsWrapper>
            {workout.blocks.map((section, i) => (
              <RandomBlock key={i} block={section} />
            ))}
          </SectionsWrapper>
        }
      </Wrapper>
    );
  }
}

const mapDispatchToProps = {
  getWorkout
};

const mapStateToProps = state => ({
  excersises: state.excersises,
  workout: state.workout,
  settings: state.settings
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Random)
);
