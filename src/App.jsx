import React, { useContext } from "react";
import Router from "./Router.jsx";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/Global.styled";
import { lightTheme, darkTheme } from "./styles/theme";
import { ThemeContext } from "./contexts/ThemeContext.jsx";

const App = () => {
  const { theme } = useContext(ThemeContext);
  const mode = (theme === "light" ? lightTheme : darkTheme)
  return (
    <ThemeProvider theme={mode}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;
