import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import Comm from "../pages/Comm";



import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cake from "../pages/Cake";

const AppRouter = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/comm" element={<Comm/>}/>
        <Route path="/cake" element={<Cake/>}/>
        
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
