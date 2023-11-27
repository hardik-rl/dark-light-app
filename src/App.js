import React, { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = {
    background: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black",
  };

  return (
    <div className="main" style={theme}>
      <h1>Dark Theme / Light Theme</h1>
      <label
        className={`switch ${darkMode ? "checked" : ""}`}
        onClick={toggleDarkMode}
      >
        <div className="slider"></div>
      </label>
      <br />
      <h1>What is Lorem Ipsum?</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};

export default App;
