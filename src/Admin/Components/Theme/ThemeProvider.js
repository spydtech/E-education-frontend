import React, { createContext, useContext, useState } from "react";

// Create a Context for the theme
const ThemeContext = createContext();

// ThemeProvider component to provide the theme state
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Default theme is 'light'

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Context value to be provided to consumers
  const contextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
