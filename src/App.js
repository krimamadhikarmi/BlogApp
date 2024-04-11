import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import { Story } from "./components/Story";
import { Post } from "./components/Post";
import { Project } from "./components/Project";
import { Footer } from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Story />
      <Post />
      <Project/>
      <Footer/>
    </div>

    
  );
}

export default App;
