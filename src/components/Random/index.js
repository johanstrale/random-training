import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Workout from '../Workout';

const RandomWrapper = styled.div`
  width: 100%;
`;

class Random extends Component {
  render() {
    const { excersises } = this.props;

    const listExcersise = excersises.slice(0, 8);

    return (
      <RandomWrapper>
        <Workout excersises={listExcersise} />
      </RandomWrapper>
    );
  }
}

const mapStateToProps = state => ({
  excersises: state.excersises
});

export default connect(mapStateToProps)(Random);
