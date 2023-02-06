import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import { ekle } from "../features/basketSlice.js";
import data from "../helper/Data.js";

const Cake = () => {

   const dispatch = useDispatch();
  return (
    <>
      <div className="h-32 text-center   items-center text-4xl bg-red-500 text-gray-900 ">
        <h5 className="ml-24  h-32 m-auto ">ÜRÜNLERİMİZ</h5>
      </div>
      <div className=" mt-5 m-auto w-2/3 justify-center flex flex-wrap gap-6 items-center">
        {data.map((item) => {
          return (
            <div className="rounded-lg shadow-lg bg-gray max-w-sm flex-wrap items-center ">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg" src={item.image} alt="" />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  {item.title}
                </h5>
                <h6 className="text-red-500">{item.price} ₺ </h6>

                <button
                  onClick={() => dispatch(ekle())}
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight 
                  uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg
               focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 
               ease-in-out items-center "
                >
                  SEPETE EKLE
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cake;
