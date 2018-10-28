import React from 'react';
import RootStack from './src/Navigation/RootStack';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';

export default () => (
  <ThemeProvider theme={theme}>
    <RootStack />
  </ThemeProvider>
);
