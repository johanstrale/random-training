import React from 'react';
import styled from 'styled-components';
import { faCogs, faClipboardList, faDumbbell } from '@fortawesome/free-solid-svg-icons';

import translations from '../../assets/translations';
import Menu from '../Menu';

const NavigationWrapper = styled.nav`
  background-color: ${props => props.theme.navigationColor};
  border-top: solid 1px ${props => props.theme.borderColor};
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Navigation = props => (
  <NavigationWrapper>
    <Menu>
      <Menu.MenuItem to="/excersises" icon={faClipboardList} value={translations['/excersises']} />
      <Menu.MenuItem to="/random" icon={faDumbbell} value={translations['/random']} />
      <Menu.MenuItem to="/settings" icon={faCogs} value={translations['/settings']} />
    </Menu>
  </NavigationWrapper>
);

export default Navigation;
