import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faClipboardList, faRandom } from '@fortawesome/free-solid-svg-icons';

const NavigationWrapper = styled.nav`
  background-color: ${props => props.theme.overlayColor};
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-top: solid 1px ${props => props.theme.borderColor};
`;

const MenuItemWrapper = styled.div`
  text-align: center;
  width: 100%;
`;

const Navigation = props => (
  <NavigationWrapper>
    <MenuWrapper>
      <MenuItemWrapper>
        <Link to="/excersises">
          <div>
            <FontAwesomeIcon icon={faClipboardList} color="white" size="lg" />
          </div>
        </Link>
      </MenuItemWrapper>
      <MenuItemWrapper>
        <Link to="/random">
          <div>
            <FontAwesomeIcon icon={faRandom} color="white" size="lg" />
          </div>
        </Link>
      </MenuItemWrapper>
      <MenuItemWrapper>
        <Link to="/settings">
          <div>
            <FontAwesomeIcon icon={faCogs} color="white" size="lg" />
          </div>
        </Link>
      </MenuItemWrapper>
    </MenuWrapper>
  </NavigationWrapper>
);

export default Navigation;
