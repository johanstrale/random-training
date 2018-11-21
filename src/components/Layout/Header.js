import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  color: white;
  background: linear-gradient(rgb(0,172,238), rgb(0, 123, 167));
  z-index: 1;
  text-align: center;

  & p {
    font-size: 1rem;
  }
`;

const Header = ({ headerTitle }) => (
  <HeaderWrapper>
    <p>{headerTitle}</p>
  </HeaderWrapper>
);
export default Header;