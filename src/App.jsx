import React, { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./Pages/Login"));
const Register = lazy(() => import("./Pages/Register"));
const Video = lazy(() => import("./Pages/Video"));
const Group = lazy(() => import("./Pages/Group"));
const Game = lazy(() => import("./Pages/Game"));
// import Home from "./Pages/Home";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import Video from "./Pages/Video";
// import Group from "./Pages/Group";
// import Game from "./Pages/Game";

const App = () => {
  return (
    <Suspense fallback={"loading..."}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/video" element={<Video />} />
        <Route path="/group" element={<Group />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Suspense>
  );
};

export default App;
