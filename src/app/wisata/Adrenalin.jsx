import React from "react";
import ButtonArrow from "../components/ButtonArrow";

const Adrenalin = () => {
  return (
    <div className="flex max-md:flex-col">
      <h1 className="text-text-header text-center text-3xl font-bold  block md:hidden mb-5">
        UJI ADRENALIN MU
      </h1>
      <div className="md:w-1/2 bg-[url('/paralayang.jpg')] bg-cover bg-center bg-no-repeat h-[529px]"></div>
      <div className="md:w-1/2  relative">
        <h1 className="text-center text-3xl text-text-header font-bold hidden md:block">
          UJI ADRENALIN MU
        </h1>
        <div className="bg-white md:absolute top-40 shadow-xl -left-40 p-5 lg:mr-40">
          <h1 className="font-bold text-xl mb-5">PARALAYANG MAJALENGKA</h1>
          <p className="text-sm mb-5">
            Wisata Paralayang Majalengka dapat menjadi salah satu pilihan wisata ekstrem ketika
            berada di Kabupaten Majalengka.
          </p>
          <p className="text-sm mb-5">
            Untuk kamu yang ingin merasakan sensasi terbang di udara dan melihat keindahan Kota
            Majalengka dari atas, maka wisata ini sangat cocok untuk kamu. Ayo luangkan waktu dan
            rasakan sensasi keindahannya.
          </p>
          <div className="flex justify-end">
            <ButtonArrow content={"Selengkapnya"} />
          </div>
          <div className=" text-white py-2 px-4 bg-gradient-to-r from-[#C6FF9680] to-[#07417380] absolute md:-left-2 -bottom-5  left-0 text-xl font-light ">
            Majestic <span className="font-bold italic">MJL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adrenalin;
