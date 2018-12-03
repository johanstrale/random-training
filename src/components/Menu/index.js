import React, { Component } from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';

const MenuWrapper = styled.div`
  display: flex;
  color: white;
  height: 40px;
`;

class Menu extends Component {
  static MenuItem = MenuItem;

  render() {
    return <MenuWrapper>{this.props.children}</MenuWrapper>;
  }
}

export default Menu;
