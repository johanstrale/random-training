import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import translations from '../../assets/translations';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.headerColor};
  border-bottom: solid 1px ${props => props.theme.borderColor};

  & p {
    font-size: 1.1rem;
  }
`;

const Header = ({ location }) => {
  return (
    <HeaderWrapper>
      <p>{translations[location.pathname] || 'Välkommen'}</p>
    </HeaderWrapper>
  );
};

export default withRouter(Header);
