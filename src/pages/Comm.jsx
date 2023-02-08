import React from "react";
import { useNavigate } from "react-router-dom";

const Comm = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center mt-20 ">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <div className="p-6">
          <div className=" bg-gray-300 h-80 w-100 mb-5">
            <iframe
              width="100%"
              height="100%"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6097.504760720622!2d28.90164940258055!3d40.170066615771546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca10ec1c78671d%3A0xcb4db0633e02eb6f!2zw4dhbMSxLCAxNjExMCBOaWzDvGZlci9CdXJzYQ!5e0!3m2!1str!2str!4v1675452721387!5m2!1str!2str"
            ></iframe>
          </div>
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            BURSA <span>adressssssssssss</span>
          </h5>
          <p className="text-gray-700 text-base mb-4">
            SİPARİŞLERİNİZ İÇİN: 0533 499 01 25
          </p>
          <p className="text-gray-700 text-base mb-4">siparis@er-tad.com</p>
          <button
            onClick={() => navigate(-1)}
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            geri dön
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comm;
