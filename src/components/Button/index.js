import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: transparent;
  border: 2px solid ${props => props.theme.color};
  border-radius: 5px;
  color: ${props => props.theme.color};
  padding: 10px;
  margin: 3px;
  cursor: pointer;
`;

const Button = ({ handleClick, text }) => (
  <StyledButton onClick={() => handleClick()}>{text}</StyledButton>
);

export default Button;
