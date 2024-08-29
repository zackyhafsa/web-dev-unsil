import React from "react";
import Rating from "./Rating";

const WisataProfile = () => {
  return (
    <div className="flex gap-5 my-5">
      <div className=" w-3/5 flex flex-col gap-2 relative">
        <div className="w-full h-2/3 bg-red-600"></div>
        <div className="h-1/3 flex gap-4 overflow-x-scroll">
          <div className="w-72 h-full bg-slate-600 flex-shrink-0"></div>
          <div className="w-72 h-full bg-slate-600 flex-shrink-0"></div>
          <div className="w-72 h-full bg-slate-600 flex-shrink-0"></div>
        </div>
        <div className="absolute -bottom-7">
          <Rating />
        </div>
      </div>
      <div className="w-2/5 bg-white shadow-xl border p-3">
        <h1 className="text-text-header">Jenis Wisata</h1>
        <div className="flex gap-3 my-2">
          <p className="py-1 px-10 bg-primary text-text-header text-sm">Alam</p>
          <p className="py-1 px-10 bg-primary text-text-header text-sm">Fotografi</p>
        </div>
        <div className="text-text-header flex flex-col">
          <div className="flex mb-5">
            <p className="w-10 mr-20 font-semibold">Alamat</p>
            <p className="text-start">
              Tejamulya, Kec. Argapura, Kabupaten Majalengka, Jawa Barat 45462
            </p>
          </div>
          <div className="flex mb-5">
            <p className=" w-10 mr-20 font-semibold">Jam Operasional</p>
            <p>Setiap hari 08.00 - 17.00</p>
          </div>
          <div className="flex mb-5">
            <p className=" w-10 mr-20 font-semibold">Fasilitas</p>
            <p>Parkir, Toilet, Warung, dan Spot Foto</p>
          </div>
          <div className="flex mb-5">
            <p className=" w-10 mr-20 font-semibold">Instagram</p>
            <p>@terasering_panyaweuyan</p>
          </div>
          <div className="">
            <p className=" w-10 mr-20 font-semibold">Tiket</p>
            <div className="bg-[#d9d9d9]">
              <div className="flex flex-col gap-3 mx-20 py-5">
                <div className="flex justify-between">
                  <p className=" font-semibold">Harga Tiket Masuk</p>
                  <p>Rp. 5.000</p>
                </div>
                <div className="flex justify-between">
                  <p className=" font-semibold">Parkir Mobil</p>
                  <p>Rp. 5.000</p>
                </div>
                <div className="flex justify-between">
                  <p className=" font-semibold">Parkir Motor</p>
                  <p>Rp. 2.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WisataProfile;
