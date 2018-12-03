import React, { Component } from 'react';
import styled from 'styled-components';

import Excersise from '../Excersise';

const HeadlineWrapper = styled.div`
  padding-left: 10px;
  margin-bottom: 8px;
  color: white;
  font-weight: 400;
  font-size: 0.6rem;
  background-color: ${props => props.theme.overlayBrightColor};
`;

const WorkoutWrapper = styled.div`
  padding: 10px;
`;

const WorkoutSection = styled.div`
  border-radius: 3px;
  background-color: ${props => props.theme.overlayBrightColor};
  padding-top: 10px;
  margin-bottom: 15px;
`;

class Workout extends Component {
  render() {
    const { excersises } = this.props;

    return (
      <WorkoutWrapper>
        <WorkoutSection>
          <HeadlineWrapper>Block 1</HeadlineWrapper>
          {excersises.length > 0 ? <Excersise excersise={excersises[0]} /> : null}
          {excersises.length > 0 ? <Excersise excersise={excersises[1]} border={false} /> : null}
        </WorkoutSection>
        <WorkoutSection>
          <HeadlineWrapper>Block 2</HeadlineWrapper>
          {excersises.length > 0 ? <Excersise excersise={excersises[2]} /> : null}
          {excersises.length > 0 ? <Excersise excersise={excersises[3]} border={false} /> : null}
        </WorkoutSection>
        <WorkoutSection>
          <HeadlineWrapper>Block 3</HeadlineWrapper>
          {excersises.length > 0 ? <Excersise excersise={excersises[4]} /> : null}
          {excersises.length > 0 ? <Excersise excersise={excersises[5]} border={false} /> : null}
        </WorkoutSection>
        <WorkoutSection>
          <HeadlineWrapper>Block 4</HeadlineWrapper>
          {excersises.length > 0 ? <Excersise excersise={excersises[6]} /> : null}
          {excersises.length > 0 ? <Excersise excersise={excersises[7]} border={false} /> : null}
        </WorkoutSection>
      </WorkoutWrapper>
    );
  }
}

export default Workout;
