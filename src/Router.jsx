import React from "react";
import Home from "./Pages/Home/Home";
import Header from "./components/Header/Header";
import Game from "./Pages/Game/Game";
import Details from "./Pages/Details/Details"
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/game-on" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
