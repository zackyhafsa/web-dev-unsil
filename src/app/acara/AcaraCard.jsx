import React from "react";
import { FaLocationDot, FaCalendar, FaClock } from "react-icons/fa6";

const AcaraCard = () => {
  return (
    <div className="bg-white border shadow-xl">
      <div className="h-52 bg-red-600 p-3 text-end">
        <p className="bg-primary inline-block p-1 text-text-header max-md:text-sm">
          2 Bulan 23 Hari lagi
        </p>
      </div>
      <div className="text-text-header my-5 mx-2">
        <h1 className="font-bold text-xl mb-2 max-md:text-lg">Rampak Genteng Jatiwangi Vol-5</h1>
        <div className="flex items-center gap-2 max-md:text-sm mt-3">
          <FaLocationDot /> <p>Eks Pabrik Genteng Jatiwangi</p>
        </div>
        <div className="flex items-center gap-2 max-md:text-sm ">
          <FaCalendar /> <p>11 November 2024</p>
        </div>
        <div className="flex items-center gap-2 max-md:text-sm">
          <FaClock /> <p>13.00 - 17.00</p>
        </div>
      </div>
    </div>
  );
};

export default AcaraCard;
