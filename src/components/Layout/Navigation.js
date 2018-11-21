import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationWrapper = styled.nav`
  background-color: black;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const MenuWrapper = styled.div`
  display: flex;
  height: 40px;
`;

const MenuItemWrapper = styled.div`
  margin: auto;
`;

const Navigation = () => (
  <NavigationWrapper>
    <MenuWrapper>
      <MenuItemWrapper>
        <Link to="/settings">Settings</Link>
      </MenuItemWrapper>
      <MenuItemWrapper>
        <Link to="/workout">Workout</Link>
      </MenuItemWrapper>
      <MenuItemWrapper>
        <Link to="/workouts">Workouts</Link>
      </MenuItemWrapper>
    </MenuWrapper>
  </NavigationWrapper>
);

export default Navigation;
