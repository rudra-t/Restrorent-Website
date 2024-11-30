import React from "react";
import Navbar from "./Componant/navbar/Navbar";
import Home from './pages/Home';
import Login from "./Componant/login/Login";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
