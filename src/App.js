import React from "react";
import DarkModeToggle from "./component/DarkModeToggle";
import Post from "./module/component/post/Post";

const App = () => {
  return (
    <div className="main">
      <h1>Dark Theme / Light Theme</h1>
      <DarkModeToggle />
      <Post />
    </div>
  );
};

export default App;
