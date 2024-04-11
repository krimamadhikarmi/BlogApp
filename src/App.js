import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import { Story } from "./components/Story";
import { Post } from "./components/Post";
function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Story />
      <Post />
    </div>
  );
}

export default App;
