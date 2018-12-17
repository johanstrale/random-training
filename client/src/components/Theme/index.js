import React, { Component } from 'react';
import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

export const ThemeContext = React.createContext();

class ThemeProvider extends Component {
  state = {
    theme: this.props.defaultTheme
  };

  changeTheme = theme => {
    this.setState({
      theme
    });
  };

  render() {
    return (
      <ThemeContext.Provider value={{ changeTheme: this.changeTheme }}>
        <StyledComponentThemeProvider theme={this.state.theme}>
          {this.props.children}
        </StyledComponentThemeProvider>
      </ThemeContext.Provider>
    );
  }
}

ThemeProvider.propTypes = {
  defaultTheme: PropTypes.object
};

export default ThemeProvider;
