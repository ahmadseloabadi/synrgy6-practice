import React from "react";

export default function CtaBanner() {
  return (
    <section className="CTA-banner mt-[100px] mx-[136px] grid bg-blue-700 px-[270px] py-16 gap-y-4 rounded-[13px]">
      <h1 className="big-header text-white text-center">
        Sewa Mobil di (Lokasimu) Sekarang
      </h1>
      <p className="primary-copy text-white text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="grid justify-center mt-9">
        <button className="inline-block align-middle border-green-500 bg-green-500 hover:bg-white text-white font-bold text-sm hover:text-green-500 border dark:borde  r-green-500 hover:border-green-500 rounded-sm  w-[160px] h-9 px-3 py-2  ">
          Mulai Sewa Mobil
        </button>
      </div>
    </section>
  );
}
