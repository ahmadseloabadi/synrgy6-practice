import React from "react";

export default function Footer() {
  return (
    <section className="Footer my-[100px] mx-[136px] grid grid-cols-4 ">
      <div className="flex flex-col gap-y-4">
        <p className="primary-copy">
          Jalan Suroyo No. 161 Mayangan Kota <br /> Probolonggo 672000
        </p>
        <p className="primary-copy">binarcarrental@gmail.com</p>
        <p className="primary-copy">081-233-334-808</p>
      </div>
      <div className="flex flex-col gap-y-4">
        <p className="font-semibold text-sm ">Our Service</p>
        <p className="font-semibold text-sm">Why Us</p>
        <p className="font-semibold text-sm">Testimonial</p>
        <p className="font-semibold text-sm">FAQ</p>
      </div>
      <div className="flex flex-col gap-y-4">
        <p className="primary-copy">Connect with us</p>
        <div className="flex gap-x-4">
          <img src="../src/assets/icon_facebook.png" alt="" />
          <img src="../src/assets/icon_instagram.png" alt="" />
          <img src="../src/assets/icon_twitter.png" alt="" />
          <img src="../src/assets/icon_mail.png" alt="" />
          <img src="../src/assets/icon_twitch.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <p className="primary-copy">Copyright Binar 2023</p>
        <div className="logo-footer w-[100px] h-9 bg-blue-800"></div>
      </div>
    </section>
  );
}
