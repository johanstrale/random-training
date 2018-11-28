import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Excersise from '../Excersise';
import fetchExcersises from '../../actions/excersises';

const RandomWrapper = styled.div`
  width: 100%;
`;

const HeadlineWrapper = styled.div`
  color: white;
  text-align: center;
`;

class Random extends Component {
  componentDidMount() {
    this.props.fetchExcersises();
  }

  render() {
    const { excersises } = this.props;

    return (
      <RandomWrapper>
        <HeadlineWrapper>1:a</HeadlineWrapper>
        {excersises.length > 0 ? <Excersise excersise={excersises[0]} /> : null}
        {excersises.length > 0 ? <Excersise excersise={excersises[0]} /> : null}
        <HeadlineWrapper>2:a</HeadlineWrapper>
        {excersises.length > 0 ? <Excersise excersise={excersises[0]} /> : null}
        {excersises.length > 0 ? <Excersise excersise={excersises[0]} /> : null}
        <HeadlineWrapper>3:a</HeadlineWrapper>
        {excersises.length > 0 ? <Excersise excersise={excersises[0]} /> : null}
        {excersises.length > 0 ? <Excersise excersise={excersises[0]} /> : null}
        <HeadlineWrapper>4:a</HeadlineWrapper>
        {excersises.length > 0 ? <Excersise excersise={excersises[0]} /> : null}
        {excersises.length > 0 ? <Excersise excersise={excersises[0]} /> : null}
      </RandomWrapper>
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
)(Random);
