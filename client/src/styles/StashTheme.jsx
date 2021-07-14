import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  test : 'blue',
  colors: {
    primary: "#FFFDF9",
    secondary: "#06B49A"
  },
  borders: {
    primary: "1px solid #6e695e;"
  }
};

const StashTheme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default StashTheme;