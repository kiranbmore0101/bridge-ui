// themeDecorator.js
import React from 'react';
import { bridgeTheme, ThemeProvider } from '@bridge-ui/core';

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={bridgeTheme}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
