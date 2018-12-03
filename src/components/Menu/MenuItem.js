import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const MenuItemWrapper = styled.div`
  margin: auto;
  & a {
    color: white;
    text-decoration: none;
    text-align: center;
  }
`;

const MenuIconWrapper = styled.p`
  margin: 4px 0 4px 0;
`;

const MenuTextWrapper = styled(MenuIconWrapper)`
  font-size: 0.5rem;
  font-weigth: 400;
`;

const MenuItem = ({ to, icon, value }) => (
  <MenuItemWrapper>
    <Link to={to}>
      <MenuIconWrapper>
        <FontAwesomeIcon icon={icon} color="white" size="sm" />
      </MenuIconWrapper>
      <MenuTextWrapper>{value}</MenuTextWrapper>
    </Link>
  </MenuItemWrapper>
);

export default MenuItem;