import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function SearchCar() {
  return (
    <div className="grid min-h-screen w-full">
      <Hero />
      <div className="flex justify-center ">
        <div className="form-input p-6 flex w-3/4 shadow rounded-lg relative translate-y-[-40%] bg-white">
          <form className="flex  w-full gap-x-4">
            <div className="w-full md:w-1/3  mb-6 md:mb-0">
              <div className="relative inputDriver">
                <label className="pb-1">Tipe Driver</label>
                <select
                  className="form-select block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="driver"
                  required
                >
                  <option value="" hidden>
                    Pilih Tipe Driver
                  </option>
                  <option value="true">Dengan Supir</option>
                  <option value="false">Tanpa Supir(Lepas Kunci)</option>
                </select>
              </div>
            </div>

            <div className="w-full md:w-1/3  mb-6 md:mb-0">
              <div className="relative inputDate">
                <label className="pb-1">Tanggal</label>
                <input
                  type="date"
                  id="date"
                  className="form-control block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Pilih Tanggal"
                  required
                />
              </div>
            </div>
            <div className="w-full md:w-1/3  mb-6 md:mb-0">
              <div className="relative inputTime">
                <label className="pb-1">Waktu Jemput/Ambil</label>
                <select
                  className="form-select block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="time"
                  aria-label="Default select example"
                  required
                >
                  <option hidden>Pilih Waktu</option>
                  <option value="01:00:00">08.00 WIB</option>
                  <option value="02:00:00">09.00 WIB</option>
                  <option value="03:00:00">10.00 WIB</option>
                  <option value="04:00:00">11.00 WIB</option>
                  <option value="05:00:00">12.00 WIB</option>
                </select>
              </div>
            </div>
            <div className="w-full md:w-1/3  mb-6 md:mb-0">
              <div className="relative inputPassanger">
                <label className="pb-1">Jumlah Penumpang(optional)</label>
                <input
                  type="number"
                  className="form-control block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="passanger"
                  placeholder="Jumlah Penumpang"
                />
              </div>
            </div>
            <div className="flex items-end">
              <button className="block bg-green-500 hover:bg-white text-white font-bold text-sm hover:text-green-500 border border-green-500 hover:border-green-500 rounded-sm  w-[95px] h-9  py-2 text-center">
                Cari Mobil
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
