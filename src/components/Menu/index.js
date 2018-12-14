import React, { Component } from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';

const Wrapper = styled.div`
  display: flex;
  height: 40px;
`;

class Menu extends Component {
  static MenuItem = MenuItem;

  render() {
    return <Wrapper>{this.props.children}</Wrapper>;
  }
}

export default Menu;
