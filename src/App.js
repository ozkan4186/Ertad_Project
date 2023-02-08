import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Comm from "./pages/Comm";
import Cake from "./pages/Cake";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sepetim from "./pages/Sepetim";

function App() {
  // const [basket, setBasket] = useState(0);

  // const handleSubmit = (e) => {
  // e.preventDefault();
  // setBasket(basket +1);
  //
  // };

  return (
    <>
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comm" element={<Comm/>} />
        <Route path="/cake" element={<Cake/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/sepetim" element={<Sepetim />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
