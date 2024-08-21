import React from "react";

const Card = () => {
  return (
    <div className="grid lg:grid-cols-2 w-full gap-y-5">
      <div className="max-lg:mx-auto">
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="w-72 rounded-md border overflow-hidden shadow-lg h-min">
            <div className="h-52 bg-[url('/hero-bg.png')] bg-center bg-cover"></div>
            <h1 className="text-text-header font-bold text-xl ml-2 mt-2">Explore Wisata</h1>
            <p className="text-sm text-text-header font-light ml-2 mt-2">
              Jelajahi Keindahan Alam Majalengka Sekarang
            </p>
            <a
              href=""
              className="block bg-text-header text-center py-2 text-white rounded-md font-semibold my-4 mx-2"
            >
              Selengkapnya
            </a>
          </div>
          <div className="w-72 rounded-md border overflow-hidden shadow-lg h-min">
            <div className="h-52 bg-[url('/Lotek.png')] bg-center bg-cover"></div>
            <h1 className="text-text-header font-bold text-xl ml-2 mt-2">Explore Kuliner</h1>
            <p className="text-sm text-text-header font-light ml-2 mt-2">
              Jelajahi Kenikmatan Makanan Khas Majalengka sekarang
            </p>
            <a
              href=""
              className="block bg-text-header text-center py-2 text-white rounded-md font-semibold my-4 mx-2"
            >
              Selengkapnya
            </a>
            <div className="relative">
              <div className="flex-1 border-b-2 border-black absolute right-96"></div>
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
      <div className="max-lg:mx-auto">
        <div className="lg:flex items-center gap-3 mb-5 hidden">
          <h1 className="font-light text-xl text-text-header">
            Majestic <span className="font-bold italic"> MJL</span>
          </h1>
          <div className="border-b-4 border-gray-900 w-96 "></div>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="w-72 rounded-md border overflow-hidden shadow-lg h-min">
            <div className="h-52 bg-[url('/event.png')] bg-center bg-cover"></div>
            <h1 className="text-text-header font-bold text-xl ml-2 mt-2">Explore Event</h1>
            <p className="text-sm text-text-header font-light ml-2 mt-2">
              Ikuti Kegiatan yang Menarik yang ada di Majalengka
            </p>
            <a
              href=""
              className="block bg-text-header text-center py-2 text-white rounded-md font-semibold my-4 mx-2"
            >
              Selengkapnya
            </a>
          </div>
          <div className="w-72 rounded-md border overflow-hidden shadow-lg h-min">
            <div className="h-52 bg-[url('/akomodasi.png')] bg-center bg-cover"></div>
            <h1 className="text-text-header font-bold text-xl ml-2 mt-2">Cari Akomodasi</h1>
            <p className="text-sm text-text-header font-light ml-2 mt-2">
              Cari Penginapan yang sesuai dengan Perjalananmu
            </p>
            <a
              href=""
              className="block bg-text-header text-center py-2 text-white rounded-md font-semibold my-4 mx-2"
            >
              Selengkapnya
            </a>
            <div className="relative">
              <div className="flex-1 border-b-2 border-gray-950 absolute right-96 ">
                <h1>asdsad</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
