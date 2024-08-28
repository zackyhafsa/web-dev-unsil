import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { VscEye } from "react-icons/vsc";

const BeritaCard = () => {
  return (
    <div>
      <div className="w-full h-52 bg-[url('/panyaweuyan.png')] bg-bottom bg-cover bg-no-repeat"></div>
      <div className="flex items-center text-text-header gap-3 my-5">
        <CgProfile size={40} />
        <div className="">
          <h1 className="font-bold">Admin Majestic MJL</h1>
          <p className="text-xs">Jum'at 16 Agustus 2024</p>
        </div>
      </div>
      <h1 className="text-text-header text-xl font-bold my-5">
        Tingkatkan Kunjungan Wisatawan, Pemkab Majalengka Terapkan Strategi Ini
      </h1>
      <div className="flex gap-3 items-center">
        <div className="flex items-center text-sm">
          <AiOutlineLike size={22} />
          <p>8</p>
        </div>
        <div className="flex items-center text-sm">
          <VscEye size={25} />
          <p>12</p>
        </div>
      </div>
    </div>
  );
};

export default BeritaCard;
