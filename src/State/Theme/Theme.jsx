// themeActions.js
import { SET_THEME } from "./ThemeType";
// Action creator for setting the theme
export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});
