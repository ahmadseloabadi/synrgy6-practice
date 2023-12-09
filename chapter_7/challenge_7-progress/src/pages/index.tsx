import React from "react";
import Hero from "../components/Hero";
import OurService from "../components/OurService";
import WhyUs from "../components/WhyUs";
import CtaBanner from "../components/CtaBanner";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="grid min-h-screen w-full">
      <Hero />
      <OurService />
      <WhyUs />
      <section className="Testimonial mt-[100px]">
        on progress testimonial
      </section>
      <CtaBanner />
      <Faq />
      <Footer />
    </div>
  );
}
