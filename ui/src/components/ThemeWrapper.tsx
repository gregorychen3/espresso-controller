import { createMuiTheme, ThemeProvider, useMediaQuery } from "@material-ui/core";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { accentDark, darkGrayB, darkGrayC, green, primary, red, warning } from "../theme";

interface Props {
  children: React.ReactNode;
}

export default function ThemeWrapper({ children }: Props) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: { main: primary },
          secondary: { main: accentDark },
          error: { main: red },
          warning: { main: warning },
          success: { main: green },
          background: prefersDarkMode ? { default: darkGrayB, paper: darkGrayC } : {},
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
