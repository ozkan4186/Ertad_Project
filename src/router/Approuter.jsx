import React from "react";


import Home from "../pages/Home";
import Login from "../pages/Login";

import Contact from "../pages/Contact";
import Basket from "../pages/Basket";
import Register from "../pages/Register";
import Details from "../pages/Details";

import Checkout from "../pages/Checkout";
import PrivateRouter from "./PrivateRouter";
import Profile from "../pages/Profile";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const AppRouter = () => {
  return (
    <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/basket" element={<PrivateRouter />}>
            <Route path="" element={<Basket />} />
          </Route>
          <Route path="/profile" element={<PrivateRouter />}>
            <Route path="" element={<Profile />} />
          </Route>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/checkout" element={<PrivateRouter />}>
            <Route path="" element={<Checkout />} />
          </Route>
        </Routes>
        <Footer />
    
    </BrowserRouter>
  );
};

export default AppRouter;
