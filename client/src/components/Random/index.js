import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { faPlay, faRandom } from '@fortawesome/free-solid-svg-icons';

import RandomBlock from './RandomBlock';
import RoundButton from '../Buttons/RoundButton';
import { fetchRandomExcersises } from '../../actions/excersises';

const Wrapper = styled.div`
  width: inherit;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px;
`;

const BlocksWrapper = styled.div`
  margin: 10px;
`;

class Random extends Component {
  startTraining() {
    const { history } = this.props;
    history.push('/workout');
  }

  generateRandomExcersises() {
    const { fetchRandomExcersises, excersises, settings } = this.props;
    fetchRandomExcersises(excersises, settings.numberOfExcersises);
  }

  prepareWorkoutBlocks(excersises) {
    const blocks = [];
    let index = 0;

    while (index < excersises.length) {
      blocks.push({
        number: blocks.length + 1,
        excersises: excersises.slice(index, index + 2)
      });
      index = index + 2;
    }
    return blocks;
  }

  render() {
    const blocks = this.prepareWorkoutBlocks(this.props.randomExcersises);

    return (
      <Wrapper>
        <ButtonsWrapper>
          <RoundButton icon={faRandom} handleClick={() => this.generateRandomExcersises()} />
          <RoundButton icon={faPlay} handleClick={() => this.startTraining()} disabled={!blocks.length} />
        </ButtonsWrapper>
        {
          <BlocksWrapper>
            {blocks.map((section, i) => (
              <RandomBlock key={i} block={section} />
            ))}
          </BlocksWrapper>
        }
      </Wrapper>
    );
  }
}

const mapDispatchToProps = {
  fetchRandomExcersises
};

const mapStateToProps = state => ({
  excersises: state.excersises.items,
  randomExcersises: state.excersises.randomItems,
  settings: state.settings
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Random)
);
