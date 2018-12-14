import React from 'react';
import styled from 'styled-components';

import Excersise from '../Excersise';

const Wrapper = styled.div`
  margin-bottom: 15px;
`;

const HeadlineWrapper = styled.div`
  border-radius: 3px 3px 0 0;
  padding: 8px 10px 8px 10px;
  color: ${props => props.theme.textColor}
  background-color: ${props => props.theme.overlayBrightColor};
  font-weight: 400;
  font-size: 0.6rem;
  display: flex;
  justify-content: space-between;
`;

const RandomSection = ({ section }) => (
  <Wrapper>
    <HeadlineWrapper>
      <span>Block {section.block}</span>
      <span>3 x 30 sekunder</span>
    </HeadlineWrapper>
    {section.excersises.map((excersise, i) => (
      <Excersise key={i} excersise={excersise} />
    ))}
  </Wrapper>
);

export default RandomSection;
