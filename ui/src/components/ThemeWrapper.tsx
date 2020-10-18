import { createMuiTheme, ThemeProvider, useMediaQuery } from "@material-ui/core";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import {
  accent,
  accentDark,
  darkGrayB,
  darkGrayC,
  green,
  greenLight,
  primary,
  primaryDark,
  red,
  warning,
} from "../theme";

interface Props {
  children: React.ReactNode;
}

export default function ThemeWrapper({ children }: Props) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: {
            main: primary,
            dark: primaryDark,
          },
          secondary: {
            light: accent,
            main: accentDark,
          },
          error: {
            main: red,
          },
          warning: {
            main: warning,
          },
          success: {
            main: green,
            light: greenLight,
          },
          background: prefersDarkMode
            ? {
                default: darkGrayB,
                paper: darkGrayC,
              }
            : {},
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
