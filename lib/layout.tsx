import React from "react";
import { ThemeProvider } from "emotion-theming";
import theme from "~/common/theme";
import GlobalStyles from "./GlobalStyles";

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div>{children}</div>
  </ThemeProvider>
);
