import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import data from '../helper/Data.js'

const Cake = ({handleSubmit},{handleSubmits}) => {

  return (
    <div className=" mt-5 m-auto w-full justify-center flex flex-wrap gap-4 items-center">
      {data.map((item) => {
        return (
          <div className="rounded-lg shadow-lg bg-white max-w-sm flex-wrap items-center ">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img className="rounded-t-lg" src={item.image} alt="" />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {item.title}
              </h5>
             
              <button
                onClick={handleSubmit}
                type="button"
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight 
                  uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg
               focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 
               ease-in-out items-center "
              >
                SEPETE EKLE
              </button>
              <button
                onClick={handleSubmits}
                type="button"
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight 
       uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg
    focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 
    ease-in-out items-center m-2 "
              >
                SEPETTEN ÇIKAR
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cake;
