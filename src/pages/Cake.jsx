import React from "react";
import data from '../helper/Data.js'

const Cake = () => {
  return (
    <div className=" grid gap-x-8 gap-y-4 grid-cols-3 ">
      {data.map((item) => {
        return (
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img className="rounded-t-lg" src={item.image} alt="" />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {item.title}
              </h5>
              <button
                type="button"
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight 
uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg
focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 
ease-in-out"
              >
                SEPETE EKLE
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cake;
