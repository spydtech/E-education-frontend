// themeReducer.js
import { SET_THEME } from "./ThemeType";
const initialState = {
  theme: localStorage.getItem('theme') || 'light', // Default to 'light' if nothing is stored
};

const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      // Save the selected theme to localStorage
      localStorage.setItem('theme', action.payload);
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default ThemeReducer;
