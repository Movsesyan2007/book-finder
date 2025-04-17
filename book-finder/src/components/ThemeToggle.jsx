import React from 'react';

const ThemeToggle = ({ toggleTheme, isDarkMode }) => {
  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? 'Light theme' : ' Dark theme'}
    </button>
  );
};

export default ThemeToggle;