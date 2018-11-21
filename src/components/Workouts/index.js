import React from 'react';
import styled from 'styled-components';

const data = {
  title: 'Mountain Climber',
  grade: 'Easy'
}

const WorkoutsWrapper = styled.div`
  width: 100%;
  border: solid 1px grey;
  box-shadow: 1px 1px 5px;
  margin: 10px;
`;

const Workouts = () => (
    <WorkoutsWrapper>
      <h4>{data.title}</h4>
      <h5>{data.grade}</h5>
    </WorkoutsWrapper>
  )

export default Workouts;
