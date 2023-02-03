import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Communication from "../pages/Comm";
import Register from '../pages/Register';
import Börekler from '../pages/Börekler';


const Approuter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/comm" element={<Communication />} />
        <Route path="/börek" element={<Börekler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Approuter