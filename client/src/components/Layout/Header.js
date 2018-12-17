import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import translations from '../../assets/translations';

const Wrapper = styled.header`
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
`;

const P = styled.p`
  font-size: 1.1rem;
`;

const Header = ({ location }) => {
  return (
    <Wrapper>
      <P>{translations[location.pathname] || 'Välkommen'}</P>
    </Wrapper>
  );
};

export default withRouter(Header);
