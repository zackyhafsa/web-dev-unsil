import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Cipanten = () => {
  return (
    <div className="flex gap-5 lg:px-10 mt-16 max-md:flex-col">
      <div className="md:w-3/4 bg-[url('/Cipanten.png')] bg-center bg-cover bg-no-repeat max-md:aspect-video relative">
        <div className="hidden md:inline-block p-5 absolute bg-white shadow-xl -bottom-44 lg:left-16 lg:w-96 border">
          <h1 className="font-bold text-text-header text-xl">Situ Cipanten</h1>
          <p className="text-justify mt-2">
            Situ Cipanten, Majalengka, Jawa Barat merupakan salah satu destinasi wisata yang
            memiliki landscape seperti negeri dongeng. Obyek wisata satu ini menyuguhkan suasana bak
            negeri dongeng. Panorama apik, suasana asri dan memiliki air dua warna yang cantik.{" "}
            <a href="" className="flex items-center text-blue-500 gap-2 underline">
              Selengkapnya <FaArrowRight />
            </a>
          </p>
        </div>
      </div>
      <div className="md:p-10 py-5 px-2 bg-white shadow-xl md:w-1/4 border max-md:flex max-md:justify-between ">
        <div className="md:mb-5">
          <h1 className="lg:text-xl md:text-lg font-bold text-text-header">Situ Cipanten</h1>
          <p className="font-light text-text-header text-sm">Nama Wisata</p>
        </div>
        <div className="md:mb-5">
          <h1 className="lg:text-xl md:text-lg font-bold text-text-header">Alam Danau</h1>
          <p className="font-light text-text-header text-sm">Jenis Wisata</p>
        </div>
        <div>
          <h1 className="lg:text-xl md:text-lg font-bold text-text-header">Rp. 10.000</h1>
          <p className="font-light text-text-header text-sm">Harga Tiket Masuk</p>
        </div>
      </div>
      <div className="inline-block md:hidden p-5 bg-white shadow-xl -bottom-44 lg:left-16 lg:w-96 border">
        <h1 className="font-bold text-text-header text-xl">Situ Cipanten</h1>
        <p className="text-justify mt-2">
          Situ Cipanten, Majalengka, Jawa Barat merupakan salah satu destinasi wisata yang memiliki
          landscape seperti negeri dongeng. Obyek wisata satu ini menyuguhkan suasana bak negeri
          dongeng. Panorama apik, suasana asri dan memiliki air dua warna yang cantik.{" "}
          <a href="" className="flex items-center text-blue-500 gap-2 underline">
            Selengkapnya <FaArrowRight />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Cipanten;
