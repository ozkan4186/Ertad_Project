import React from "react";
import { useNavigate } from "react-router-dom";
import Data from "../helper/Data2";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-center  items-center  bg-red-500 text-gray-900 ">
        <h2 className="font-medium leading-tight text-4xl mt-28   mb-2 text-blue-600">
          YAPIM AŞAMALARI
        </h2>
      </div>
      <div className=" mt-5 m-auto w-2/3 justify-center flex flex-wrap gap-6 items-center ">
        {Data.map((item) => {
          return (
            <div className="rounded-lg shadow-lg bg-gray max-w-sm flex-wrap items-center ">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <video className="w-full" autoPlay loop muted>
                  <source src={item.image} type="video/mp4" />
                </video>
              </a>
              <div className="p-6">
                <button
                  onClick={() => navigate("/cake")}
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight 
                 uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg
              focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 
              ease-in-out items-center "
                >
                  DETAYI GÖRMEK İÇİN TIKLAYINIZ
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
