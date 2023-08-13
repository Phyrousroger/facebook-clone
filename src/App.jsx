import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Video from "./Pages/Video";
import Group from "./Pages/Group";
import Game from "./Pages/Game";


const App = () => {

  return (
    
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/video" element={<Video/>}/>
        <Route path="/group" element={<Group/>}/>
        <Route path="/game" element={<Game/>}/>
    </Routes>
  );
};

export default App;
