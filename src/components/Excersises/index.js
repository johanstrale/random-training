import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Excersise from '../Excersise';

const Wrapper = styled.div`
  width: 100%;
`;

class Excersises extends Component {
  render() {
    const { excersises } = this.props;

    return (
      <Wrapper>
        {excersises.map((excersise, i) => (
          <Excersise key={i} excersise={excersise} />
        ))}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  excersises: state.excersises
});

export default connect(mapStateToProps)(Excersises);
