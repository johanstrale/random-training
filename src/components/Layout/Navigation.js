import React from 'react';
import styled from 'styled-components';
import { faCogs, faClipboardList, faRandom } from '@fortawesome/free-solid-svg-icons';

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
      <Menu.MenuItem to="/excersises" icon={faClipboardList} value={1} />
      <Menu.MenuItem to="/random" icon={faRandom} value={2} />
      <Menu.MenuItem to="/settings" icon={faCogs} value={3} />
    </Menu>
  </NavigationWrapper>
);

export default Navigation;
