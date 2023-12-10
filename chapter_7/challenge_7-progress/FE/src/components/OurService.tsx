import React from "react";

export default function OurService() {
  return (
    <section className=" Our-service mt-[100px] grid grid-cols-2 items-center justify-around ">
      <div className="flex justify-around">
        <img src="../src/assets/img_service.png" alt="" />
      </div>
      <div className="flex flex-col gap-y-6">
        <h2 className="medium-header w-[468px]">
          Best Car Rental for any kind of trip in (Lokasimu)!
        </h2>
        <div className="text-content grid gap-y-5 ">
          <p className="primary-copy w-[468px]">
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>

          <p className="primary-copy inline-flex items-center gap-x-5">
            <img src="../src/assets/icon_check.png" alt="" />
            Sewa Mobil Dengan Supir di Bali 12 Jam
          </p>
          <p className="primary-copy inline-flex items-center gap-x-5">
            <img src="../src/assets/icon_check.png" alt="" />
            Sewa Mobil Lepas Kunci di Bali 24 Jam{" "}
          </p>
          <p className="primary-copy inline-flex items-center gap-x-5">
            <img src="../src/assets/icon_check.png" alt="" />
            Sewa Mobil Jangka Panjang Bulanan{" "}
          </p>
          <p className="primary-copy inline-flex items-center gap-x-5">
            <img src="../src/assets/icon_check.png" alt="" />
            Gratis Antar - Jemput Mobil di Bandara{" "}
          </p>
          <p className="primary-copy inline-flex items-center gap-x-5">
            <img src="../src/assets/icon_check.png" alt="" />
            Layanan Airport Transfer / Drop In Out{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
