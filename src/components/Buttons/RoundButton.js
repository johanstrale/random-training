import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonWrapper = styled.button`
  text-decoration: none;
  background: ${props => props.theme.buttonColor};
  color: ${props => props.theme.overlayColor};
  width: 45px;
  height: 45px;
  line-height: 40px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  box-shadow: 0px 0px 0px 2px ${props => props.theme.buttonColor};
  border: solid 2px ${props => props.theme.overlayColor};

  :active {
    opacity: 0.5;
  }

  :disabled {
    background: ${props => props.theme.buttonDisabledColor};
    box-shadow: 0px 0px 0px 2px ${props => props.theme.buttonDisabledColor};
    color: ${props => props.theme.buttonDisabledBorderColor};
    border: solid 2px ${props => props.theme.buttonDisabledBorderColor};
    opacity: 0.4;
  }
`;

const RoundButton = ({ icon, disabled, handleClick }) => (
  <ButtonWrapper disabled={disabled} onClick={handleClick}>
    <FontAwesomeIcon icon={icon} size="lg" />
  </ButtonWrapper>
);

export default RoundButton;
