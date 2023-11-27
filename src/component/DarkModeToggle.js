/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    applyTheme();
  }, [isDarkMode]);

  const applyTheme = () => {
    const body = document.body;
    body.classList.toggle("dark", isDarkMode);
  };

  return (
    <label
      className={`switch ${isDarkMode ? "checked" : ""}`}
      onClick={toggleDarkMode}
    >
      <div className="slider"></div>
    </label>
  );
};

export default DarkModeToggle;
