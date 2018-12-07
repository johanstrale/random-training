import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const AccordionContentWrapper = styled.div`
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.overlayBrightColor};
  font-weight: 400;
  font-size: 0.7rem;
  padding: 13px;
  line-height: 1.5;
  animation: ${fadeIn} 0.35s ease-in;
`;

const AccordionContent = ({ content }) => <AccordionContentWrapper>{content}</AccordionContentWrapper>;

export default AccordionContent;
