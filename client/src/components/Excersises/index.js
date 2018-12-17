import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Excersise from '../Excersise';

const Wrapper = styled.div`
  width: 100%;
`;

class Excersises extends Component {
  render() {
    const { excersises, loading, error } = this.props;
    console.log(excersises);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error {error}</div>;
    }

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
  excersises: state.excersises.items
});

export default connect(mapStateToProps)(Excersises);
