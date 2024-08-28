import React from "react";
import { VscEye } from "react-icons/vsc";

const Berita = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between gap-5 border p-5 max-md:flex-col">
        <div
          className="md:w-[28rem] h-52  bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url('/berita1.png')` }}
        ></div>
        <div className="flex flex-col justify-between">
          <div>
            <a href="/berita/1" className="font-bold text-text-header text-2xl hover:underline">
              Tingkatkan Kunjungan Wisatawan, Pemkab Majalengka Terapkan Strategi Ini
            </a>
            <p className="text-sm text-justify text-text-header mt-2">
              Pemerintah Kabupaten Majalengka (Pemkab Majalengka), Jawa Barat, optimis melihat
              potensi peningkatan kunjungan wisatawan pada tahun ini.
            </p>
          </div>
          <div className="flex justify-between items-end mt-10">
            <div className="text-text-header">
              <h1 className="font-semibold">Admin Majestic</h1>
              <p className="text-sm">Jum'at, 16 Agustus 2024</p>
            </div>
            <div className="flex items-center">
              <VscEye /> <p>12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Berita;
