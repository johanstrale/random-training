import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import fetchExcersises from '../../actions/excersises';
import Excersise from '../Excersise';

const ExcersisesWrapper = styled.div`
  width: 100%;
`;

class Excersises extends Component {
  componentDidMount() {
    this.props.fetchExcersises();
  }

  render() {
    const { excersises } = this.props;

    return (
      <ExcersisesWrapper>
        {excersises.map((excersise, i) => {
          return (
            <Fragment key={i}>
              <Excersise excersise={excersise} />
            </Fragment>
          );
        })}
      </ExcersisesWrapper>
    );
  }
}

const mapDispatchToProps = {
  fetchExcersises
};

const mapStateToProps = state => ({
  excersises: state.excersises
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Excersises);
