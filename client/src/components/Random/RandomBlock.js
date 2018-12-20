import React from 'react';
import styled from 'styled-components';

import Excersise from '../Excersise';

const Wrapper = styled.div`
  margin-bottom: 15px;
`;

const HeadlineWrapper = styled.div`
  border-radius: 3px 3px 0 0;
  padding: 8px 10px 5px 10px;
  color: ${props => props.theme.textColor}
  background-color: ${props => props.theme.overlayBrightColor};
  font-weight: 400;
  font-size: 0.6rem;
`;

const RandomBlock = ({ block }) => (
  <Wrapper>
    <HeadlineWrapper>
      <span>Block {block.number}</span>
    </HeadlineWrapper>
    {block.excersises.map((excersise, i) => (
      <Excersise key={i} excersise={excersise} />
    ))}
  </Wrapper>
);

export default RandomBlock;
