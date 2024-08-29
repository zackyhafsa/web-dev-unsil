import React from "react";

const WisataCard = ({ imageUrl, title, tempat }) => {
  return (
    <div
      className={`w-full h-80  bg-center bg-cover bg-no-repeat relative flex justify-center`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="bg-white absolute w-[80%] -bottom-16 text-center p-5 shadow-lg">
        <a href="/wisata/detail/1" className="font-bold text-text-header text-xl uppercase mb-3 hover:underline">
          {title}
        </a>
        <p className="text-sm">{tempat}</p>
      </div>
    </div>
  );
};

export default WisataCard;
