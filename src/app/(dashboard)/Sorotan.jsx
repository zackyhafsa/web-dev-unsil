import React from "react";
import Cipanten from "./Cipanten";

const Sorotan = () => {
  return (
    <div>
      <div className="lg:flex gap-5 max-lg:grid max-lg:grid-cols-2 max-sm:flex max-sm:flex-col">
        <div className="lg:w-1/4 group overflow-hidden">
          <div
            className="h-96 bg-center bg-cover bg-no-repeat text-white overflow-hidden"
            style={{ backgroundImage: `url('/panyaweuyan.png')` }}
          >
            <div className="flex flex-col justify-between h-full">
              <div className="bg-gradient-to-b from-black to-[#fff0] -translate-y-20 group-hover:translate-y-0 transition-all duration-300 ease-in-out p-5">
                <h1>DESTINASI WISATA</h1>
                <h1 className="font-bold">TERASERING PANYAWEUYAN</h1>
              </div>
              <div className=" bg-gradient-to-t from-black to-[#fff0] p-5 translate-y-36 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <p>
                  Terasering Panyaweuyan merupakan salah satu wisata populer yang ada di
                  Majalengka..
                </p>
                <a
                  href=""
                  className="block text-center py-1 mt-3 border-white border-2 hover:bg-white hover:text-black transition-all duration-100 ease-in-out"
                >
                  SELENGKAPNYA
                </a>
              </div>
            </div>
          </div>
          <div className="lg:flex items-center gap-3 mt-5 hidden">
            <h1 className="font-light text-xl text-text-header">
              Majestic <span className="font-bold italic"> MJL</span>
            </h1>
            <div className="border-b-4 border-black w-96 "></div>
          </div>
        </div>
        <div className="lg:w-1/4 flex flex-col gap-3 lg:h-[27rem] md:h-96 ">
          <div className="bg-[url('/Lotek.png')] bg-center bg-cover bg-no-repeat flex justify-between flex-col text-white lg:h-1/2 md:h-48 h-96 overflow-hidden group">
            <div className="bg-gradient-to-b from-black to-[#fff0] p-5 -translate-y-20 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
              <h1>KULINER</h1>
              <h1 className="font-bold">LOTEK</h1>
            </div>
            <div className="bg-gradient-to-t from-black to-[#fff0] p-5 translate-y-20 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
              <a
                href=""
                className="block text-center py-1 mt-3 border-white border-2 hover:bg-white hover:text-black transition-all duration-100 ease-in-out"
              >
                SELENGKAPNYA
              </a>
            </div>
          </div>

          <div className="bg-[url('/acara.png')] bg-center bg-cover bg-no-repeat flex justify-between flex-col text-white lg:h-1/2 md:h-48 h-96 group overflow-hidden">
            <div className="bg-gradient-to-b from-black to-[#fff0] p-5 -translate-y-20 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
              <h1>ACARA</h1>
              <h1 className="font-bold">RAMPAK GENTENG</h1>
            </div>
            <div className="bg-gradient-to-t from-black to-[#fff0] p-5 translate-y-20 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
              <a
                href=""
                className="block text-center py-1 mt-3 border-white border-2 hover:bg-white hover:text-black transition-all duration-100 ease-in-out"
              >
                SELENGKAPNYA
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-2/4 max-lg:col-span-2">
          <div className="lg:flex items-center gap-3 mb-5 hidden">
            <h1 className="font-light text-xl text-text-header">
              Majestic <span className="font-bold italic"> MJL</span>
            </h1>
            <div className="border-b-4 border-black w-96 "></div>
          </div>
          <div className="h-96 bg-[url('/CurugBaligo.png')] bg-center bg-cover bg-no-repeat flex justify-between flex-col  text-white group overflow-hidden">
            <div className="bg-gradient-to-b from-black to-[#fff0] p-5 -translate-y-20 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
              <h1>DESTINASI WISATA</h1>
              <h1 className="font-bold">HIDDEN GEM CURUG BALIGO</h1>
            </div>
            <div className="bg-gradient-to-t from-black to-[#fff0] p-5  translate-y-40 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
              <p>
                Sesuai namanya, Curug Baligo berada di Blok Baligo, Desa Padaherang, Kecamatan
                Sindangwangi, Kabupaten Majalengka, Jawa Barat.
              </p>
              <a
                href=""
                className="block text-center py-1 mt-3 border-white border-2 hover:bg-white hover:text-black transition-all duration-100 ease-in-out"
              >
                SELENGKAPNYA
              </a>
            </div>
          </div>
        </div>
      </div>
      <Cipanten />
    </div>
  );
};

export default Sorotan;
