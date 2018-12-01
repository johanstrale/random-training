import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const MenuItemWrapper = styled.div`
  margin: auto;
`;

const MenuItem = ({ to, icon, isSelected, select }) => (
  <MenuItemWrapper>
    <Link to={to}>
      <FontAwesomeIcon icon={icon} color="white" size="lg" />
    </Link>
  </MenuItemWrapper>
);

export default MenuItem;
