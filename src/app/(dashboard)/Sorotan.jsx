import React from "react";

const Sorotan = () => {
  return (
    <div>
      <div className="flex gap-5">
        <div className="w-1/4">
          <div className="h-96 bg-red-500 flex justify-between flex-col p-5 text-white">
            <div>
              <h1>DESTINASI WISATA</h1>
              <h1 className="font-bold">TERASERING PANYAWEUYAN</h1>
            </div>
            <div>
              <p>
                Terasering Panyaweuyan merupakan salah satu wisata populer yang ada di Majalengka..
              </p>
              <a
                href=""
                className="block text-center py-1 mt-3 border-white border-2 hover:bg-white hover:text-black transition-all duration-100 ease-in-out"
              >
                SELENGKAPNYA
              </a>
            </div>
          </div>
          <div className="lg:flex items-center gap-3 mt-5 hidden">
            <h1 className="font-light text-xl text-text-header">
              Majestic <span className="font-bold italic"> MJL</span>
            </h1>
            <div className="border-b-4 border-black w-96 "></div>
          </div>
        </div>
        <div className="w-1/4 flex flex-col gap-3 h-[27rem]">
          <div className="bg-red-500 flex justify-between flex-col p-5 text-white h-1/2">
            <div>
              <h1>KULINER</h1>
              <h1 className="font-bold">LOTEK</h1>
            </div>
            <div>
              <a
                href=""
                className="block text-center py-1 mt-3 border-white border-2 hover:bg-white hover:text-black transition-all duration-100 ease-in-out"
              >
                SELENGKAPNYA
              </a>
            </div>
          </div>

          <div className="bg-red-500 flex justify-between flex-col p-5 text-white h-1/2">
            <div>
              <h1>ACARA</h1>
              <h1 className="font-bold">RAMPAK GENTENG</h1>
            </div>
            <div>
              <a
                href=""
                className="block text-center py-1 mt-3 border-white border-2 hover:bg-white hover:text-black transition-all duration-100 ease-in-out"
              >
                SELENGKAPNYA
              </a>
            </div>
          </div>
        </div>
        <div className="w-2/4">
          <div className="lg:flex items-center gap-3 mb-5 hidden">
            <h1 className="font-light text-xl text-text-header">
              Majestic <span className="font-bold italic"> MJL</span>
            </h1>
            <div className="border-b-4 border-black w-96 "></div>
          </div>
          <div className="h-96 bg-red-500 flex justify-between flex-col p-5 text-white">
            <div>
              <h1>DESTINASI WISATA</h1>
              <h1 className="font-bold">HIDDEN GEM CURUG BALIGO</h1>
            </div>
            <div className="w-96">
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
    </div>
  );
};

export default Sorotan;
