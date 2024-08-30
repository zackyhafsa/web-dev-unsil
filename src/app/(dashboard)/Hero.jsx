"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SideNavbar from "./Side";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const images = ["/hero1-flip.png", "hero1.png", "Kecil_1.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, 800);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen relative">
      <Navbar />

      {/* Background Image */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-center bg-cover transition-opacity duration-1000 ease-in-out ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          transition: "opacity 1s ease-in-out",
        }}
      />

      {/* Static Content */}
      <div className="relative z-10 flex items-center h-full max-md:flex-col max-md:justify-between max-md:items-center">
        <div className="p-[46px] bg-gradient-to-b from-[#01A9C680] to-[#0D0D1480] h-full hidden md:flex items-center">
          <SideNavbar currentImageIndex={currentImageIndex} />
        </div>
        <div className="md:ml-10 mx-[7%] mt-40">
          <h1 className="text-5xl lg:text-6xl uppercase font-extrabold text-primary">
            Majestic <span className="block text-white">Majalengka</span>
          </h1>
          <p className="lg:w-[30rem] md:w-96 text-white mt-12 mb-10 text-justify max-lg:text-sm">
            Surga Tersembunyi di Jawa Barat. Temukan Keindahan Alam yang Menyatu dengan Kekayaan
            Budaya Lokal, dari Pegunungan yang Menyegarkan hingga Warisan Budaya yang Memikat Hati.
            Mari Jelajahi Pesona yang Tak Terlupakan di Setiap Sudutnya.
          </p>
          <a
            href=""
            className="py-2 px-4 bg-primary text-text-header font-bold text-xl max-md:text-base"
          >
            JELAJAHI SEKARANG
          </a>
        </div>
        <div className="md:pt-16 py-5 bg-gradient-to-b from-[#3D71A780] to-[#CCE61480] backdrop-blur-sm md:px-10 text-white absolute lg:right-1/4 md:right-16 bottom-0 md:h-[500px] max-md:flex max-md:w-full max-md:justify-between max-md:text-sm max-md:px-5">
          <div className="md:mb-5">
            <h1 className="font-bold text-xl max-md:text-base">1.204,24 km2</h1>
            <p className="font-light">Luas Wilayah</p>
          </div>
          <div className="md:mb-5 ">
            <h1 className="font-bold text-xl max-md:text-base">55+</h1>
            <p className="font-light">Tempat Wisata</p>
          </div>
          <div className="md:mb-5">
            <h1 className="font-bold text-xl max-md:text-base">1.307.995</h1>
            <p className="font-light">Total Populasi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
