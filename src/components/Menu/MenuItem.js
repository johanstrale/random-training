import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { withTheme } from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  a {
    color: ${props => props.theme.textColor};
    text-decoration: none;
    text-align: center;
  }
`;

const IconWrapper = styled.p`
  margin: 4px 0 4px 0;
`;

const TextWrapper = styled(IconWrapper)`
  font-size: 0.5rem;
  font-weight: 400;
`;

const MenuItem = ({ to, icon, value, theme }) => (
  <Wrapper>
    <Link to={to}>
      <IconWrapper>
        <FontAwesomeIcon icon={icon} color={theme.textColor} size="sm" />
      </IconWrapper>
      <TextWrapper>{value}</TextWrapper>
    </Link>
  </Wrapper>
);

export default withTheme(MenuItem);
