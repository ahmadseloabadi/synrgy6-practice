import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Hero() {
  const location = useLocation();
  console.log("url :", location.pathname);
  return (
    <section className="hero bg-indigo-50">
      <nav className=" w-full ">
        <div className=" flex flex-wrap justify-between py-6 mx-[136px]">
          <div className="logo-navbar w-[100px] h-9 bg-blue-800"></div>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li className="grid content-center">
                <a
                  href="#"
                  className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-black hover:text-blue-700  "
                  aria-current="page"
                >
                  Our Service
                </a>
              </li>
              <li className="grid content-center">
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                >
                  Why Us
                </a>
              </li>
              <li className="grid content-center">
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                >
                  Testimonial
                </a>
              </li>
              <li className="grid content-center">
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                >
                  FAQ
                </a>
              </li>
              <li>
                <button className="block bg-green-500 hover:bg-white text-white font-bold text-sm hover:text-green-500 border dark:border-green-500 hover:border-green-500 rounded-sm  w-[81px] h-9 px-3 py-2 text-center ">
                  Register
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="header  mt-[37px] grid grid-cols-2 items-center">
        <div className="flex flex-col gap-y-4 ml-[136px]">
          <h1 className="big-header">
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </h1>
          <p className="primary-copy w-[468px] text-justify">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <Link to="/search-car">
            <button
              className={`inline-block align-middle  border-green-500 bg-green-500 hover:bg-white text-white font-bold text-sm hover:text-green-500 border dark:borde  r-green-500 hover:border-green-500 rounded-sm  w-[160px] h-9 px-3 py-2 ${
                location.pathname == "/search-car" ? "hidden" : ""
              }  `}
            >
              Mulai Sewa Mobil
            </button>
          </Link>
        </div>
        <img src="../src/assets/img_car.png" alt="" />
      </div>
    </section>
  );
}
