import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const AkomodasiCard = ({ imageUrl, rating, title, location }) => {
  return (
    <div className="bg-white shadow-lg">
      <div className="w-full h-80 overflow-hidden bg-transparent">
        <div
          className="w-full h-80 overflow-hidden  bg-center bg-cover bg-no-repeat hover:scale-110 duration-300 ease-in-out"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>
      <div className="p-3 flex flex-col justify-end">
        <div className="flex">
          {[...Array(rating)].map((_, index) => (
            <IoStarSharp key={index} size={24} color="#ffc107" />
          ))}
        </div>
        <h1 className="font-bold text-text-header text-xl mt-2">{title}</h1>
        <div className="text-text-header text-sm mt-5 flex items-center gap-2">
          <FaLocationDot /> <p>{location}</p>
        </div>

        <a
          href=""
          className="text-center font-semibold mt-3 w-full py-2 bg-text-header text-white hover:bg-white hover:text-text-header border border-text-header duration-150 ease-in-out"
        >
          Selengkapnya
        </a>
      </div>
    </div>
  );
};

export default AkomodasiCard;
