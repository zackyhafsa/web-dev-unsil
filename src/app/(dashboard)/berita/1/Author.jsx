import React from "react";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLike } from "react-icons/ai";
import { VscEye } from "react-icons/vsc";

const Author = () => {
  return (
    <div className="pt-16 pb-8 flex w-full justify-between">
      <div className="flex items-center text-text-header gap-3">
        <CgProfile size={40} />
        <div className="">
          <h1 className="font-bold max-md:text-sm">Admin Majestic MJL</h1>
          <p className="text-xs">Jum'at 16 Agustus 2024</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="flex items-center text-sm">
          <AiOutlineLike size={22}/>
          <p>8</p>
        </div>
        <div className="flex items-center text-sm">
          <VscEye size={25}/>
          <p>12</p>
        </div>
      </div>
    </div>
  );
};

export default Author;
