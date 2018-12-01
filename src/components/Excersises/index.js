import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Excersise from '../Excersise';

const ExcersisesWrapper = styled.div`
  width: 100%;
`;

class Excersises extends Component {
  render() {
    const { excersises } = this.props;

    return (
      <ExcersisesWrapper>
        {excersises.map((excersise, i) => {
          return (
            <Fragment key={i}>
              <Excersise excersise={excersise} border={i === excersises.length - 1 ? false : true} />
            </Fragment>
          );
        })}
      </ExcersisesWrapper>
    );
  }
}

const mapStateToProps = state => ({
  excersises: state.excersises
});

export default connect(mapStateToProps)(Excersises);
