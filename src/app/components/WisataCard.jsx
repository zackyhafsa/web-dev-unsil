import React from "react";

const WisataCard = ({ imageUrl, title, description, date, author }) => {
  return (
    <div
      className={`w-full h-80  bg-center bg-cover bg-no-repeat relative flex justify-center`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="bg-white absolute w-[80%] -bottom-16 text-center p-5 shadow-lg">
        <h1 className="font-bold text-text-header text-xl uppercase mb-3">{title}</h1>
        <p className="text-sm mb-3">{description}</p>
        <p className="text-sm">
          {date} by {author}
        </p>
      </div>
    </div>
  );
};

export default WisataCard;
