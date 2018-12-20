import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Excersise from '../Excersise';

const Wrapper = styled.div`
  width: 100%;
`;

const ExcersiseWrapper = styled.div`
  border-bottom: solid 1px ${props => props.theme.borderColor};

  :last-child {
    border-bottom: none;
  }
`;
class Excersises extends Component {
  render() {
    const { excersises, loading, error } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error {error}</div>;
    }

    return (
      <Wrapper>
        {excersises.map((excersise, i) => (
          <ExcersiseWrapper key={i}>
            <Excersise excersise={excersise} />
          </ExcersiseWrapper>
        ))}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  excersises: state.excersises.items
});

export default connect(mapStateToProps)(Excersises);
