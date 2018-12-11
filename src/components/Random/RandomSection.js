import React from 'react';
import styled from 'styled-components';

import Excersise from '../Excersise';

const HeadlineWrapper = styled.div`
  padding: 8px 10px 8px 10px;
  color: ${props => props.theme.textColor}
  font-weight: 400;
  font-size: 0.6rem;
  display: flex;
  justify-content: space-between;
`;

const TrainingSectionWrapper = styled.div`
  border-radius: 3px;
  background-color: ${props => props.theme.overlayBrightColor};
  margin-bottom: 15px;
`;

const TrainingSection = ({ section }) => (
  <TrainingSectionWrapper>
    <HeadlineWrapper>
      <span>Block {section.block}</span>
      <span>3 x 30 sekunder</span>
    </HeadlineWrapper>
    {section.excersises.map((excersise, i) => (
      <Excersise key={i} excersise={excersise} />
    ))}
  </TrainingSectionWrapper>
);

export default TrainingSection;
