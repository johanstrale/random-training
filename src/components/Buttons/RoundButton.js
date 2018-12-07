import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonWrapper = styled.button`
  text-decoration: none;
  background: #eac67a;
  color: ${props => props.theme.overlayColor};
  width: 40px;
  height: 40px;
  line-height: 35px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  box-shadow: 0px 0px 0px 5px #eac67a;
  border: solid 2px ${props => props.theme.overlayColor};

  :active {
    border: solid 2px ${props => props.theme.overlayBrightColor};
    opacity: 0.9;
  }

  :disabled {
    background: grey;
    box-shadow: 0px 0px 0px 5px grey;
    color: lightGrey;
    border: solid 2px lightGrey;
    opacity: 0.5;
  }
`;

const RoundButton = ({ icon, disabled, handleClick }) => (
  <ButtonWrapper disabled={disabled} onClick={handleClick}>
    <FontAwesomeIcon icon={icon} size="lg" />
  </ButtonWrapper>
);

export default RoundButton;
