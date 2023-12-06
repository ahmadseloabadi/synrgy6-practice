import React from "react";

export default function WhyUs() {
  return (
    <section className="Why-us mt-[100px] md:justify-around grid lg:mx-[136px] lg:justify-start ">
      <h2 className="medium-header">Why us?</h2>
      <p className="primary-copy">Mengapa harus pilih Binar Car Rental?</p>
      <div className="grid grid-cols-4 gap-x-8">
        <div className="card border w-[268px] p-6 grid gap-y-4">
          <img src="../src/assets/icon_tumb.png" alt="" />
          <h2 className="small-header">Mobil Lengkap</h2>
          <p className="primary-copy">
            Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
            terawat
          </p>
        </div>
        <div className="card border w-[268px] p-6 grid gap-y-4 lg:gap-x-8">
          <img src="../src/assets/icon_price.png" alt="" />
          <h2 className="small-header">Harga Murah</h2>
          <p className="primary-copy">
            Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
            mobil lain
          </p>
        </div>
        <div className="card border w-[268px] p-6 grid gap-y-4">
          <img src="../src/assets/icon_24hrs.png" alt="" />
          <h2 className="small-header">Layanan 24 jam</h2>
          <p className="primary-copy">
            Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
            tersedia di akhir minggu
          </p>
        </div>
        <div className="card border w-[268px] p-6 grid gap-y-4">
          <img src="../src/assets/icon_professional.png" alt="" />
          <h2 className="small-header">Sopir Professional</h2>
          <p className="primary-copy">
            Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat
            waktu
          </p>
        </div>
      </div>
    </section>
  );
}
