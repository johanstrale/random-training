import React, { Component } from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';

const MenuWrapper = styled.div`
  display: flex;
  color: white;
  height: 40px;
`;

class Menu extends Component {
  state = {
    value: false
  };

  static MenuItem = MenuItem;

  render() {
    const { value } = this.state;
    const children = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        isSelected: child.props.value === value
      })
    );

    return <MenuWrapper>{children}</MenuWrapper>;
  }
}

export default Menu;
