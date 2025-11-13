import React from "react";
import Game from "./components/Game/Game";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-slate-400 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
    // <div className="min-h-screen bg-slate-500 text-gray-800">My App</div>
  );
};

export default App;
