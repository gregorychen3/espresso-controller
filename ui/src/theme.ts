import { Theme } from "@material-ui/core";

export const primary = "#009DDB";
export const primaryDark = "#0093B6";

export const accent = "#FFD373";
export const accentDark = "#F09000";

export const darkGrayA = "#0D0F12";
export const darkGrayB = "#171717";
export const darkGrayC = "#1E262E";

export const red = "#EC1600";
export const warning = "#EBA300";
export const green = "#00C78E";
export const greenLight = "#B5CC20";

export const getThemedToastClass = (theme: Theme) => ({
  "&.Toastify__toast--info": {
    backgroundColor: theme.palette.secondary.main,
  },
  "&.Toastify__toast--success": {
    backgroundColor: theme.palette.success.main,
  },
  "&.Toastify__toast--warning": {
    backgroundColor: theme.palette.warning.main,
  },
  "&.Toastify__toast--error": {
    backgroundColor: theme.palette.error.main,
  },
  "&.Toastify__toast--default": {
    backgroundColor: theme.palette.background.paper,
  },
});
