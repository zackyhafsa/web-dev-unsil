import React from "react";

const KulinerCard = ({ imageUrl, title, desc }) => {
  return (
    <div className="bg-white shadow-lg">
      <div className="w-full h-80 overflow-hidden bg-transparent">
        <div
          className="w-full h-80 overflow-hidden bg-center bg-cover bg-no-repeat hover:scale-110 duration-300 ease-in-out"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>
      <div className="p-3">
        <h1 className="font-bold text-text-header text-2xl mt-2">{title}</h1>
        <p className="text-text-header text-sm mt-5">{desc}</p>
      </div>
    </div>
  );
};

export default KulinerCard;
