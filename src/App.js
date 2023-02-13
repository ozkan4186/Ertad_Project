import "./App.css";
import React from "react";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
  

import AppRouter from "./router/Approuter";
import AuthcontextProvider, { AuthContext } from "./context/AuthContext";

function App() {
  return (
    <div>
      <AuthcontextProvider>
        <AppRouter />
        <ToastContainer />
      </AuthcontextProvider>
    </div>
  );
}

export default App;
