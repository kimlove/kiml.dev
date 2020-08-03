// https://dev.to/ryanlanciaux/use-a-themeprovider-component-in-storybook-3m63

import React from "react";
import { ThemeProvider } from 'styled-components';
import theme from "../src/components/theme";

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <div style={{padding: '1em'}}>
      {storyFn()}
    </div>
  </ThemeProvider>
)

export default ThemeDecorator;
