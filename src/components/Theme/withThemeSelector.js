import React from 'react';
import { ThemeContext } from './index';

const withThemeSelector = Component => {
  const ComponentWithThemeSelector = props => {
    return (
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <Component {...props} changeTheme={changeTheme} />
        )}
      </ThemeContext.Consumer>
    );
  };
  return ComponentWithThemeSelector;
};
export default withThemeSelector;
