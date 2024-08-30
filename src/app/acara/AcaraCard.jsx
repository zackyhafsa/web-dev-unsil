import React from "react";
import { FaLocationDot, FaCalendar, FaClock } from "react-icons/fa6";

const AcaraCard = ({ imageUrl, estimasi, nama, tempat, tanggal, waktu }) => {
  return (
    <div className="bg-white border shadow-xl">
      <div
        className="h-52 p-3 text-end bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <p className="bg-primary inline-block p-1 text-text-header max-md:text-sm">{estimasi}</p>
      </div>
      <div className="text-text-header my-5 mx-2">
        <h1 className="font-bold text-xl mb-2 max-md:text-lg">{nama}</h1>
        <div className="flex items-center gap-2 max-md:text-sm mt-3">
          <FaLocationDot /> <p>{tempat}</p>
        </div>
        <div className="flex items-center gap-2 max-md:text-sm ">
          <FaCalendar /> <p>{tanggal}</p>
        </div>
        <div className="flex items-center gap-2 max-md:text-sm">
          <FaClock /> <p>{waktu}</p>
        </div>
      </div>
    </div>
  );
};

export default AcaraCard;
