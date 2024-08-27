import React from "react";
import SocialMedia from "./SocialMedia";

const Header = ({ imageUrl, first, second }) => {
  return (
    <div
      className="relative h-96 w-full bg-no-repeat bg-cover bg-center flex md:items-center lg:pt-10 max-md:justify-center max-md:flex-col"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay untuk mengurangi kecerahan background */}
      <div className="absolute inset-0 bg-black opacity-25"></div>

      <div className="p-8 bg-gradient-to-b from-[#01A9C680] to-[#0D0D1480] h-full hidden md:flex items-center z-10">
        <SocialMedia />
      </div>
      <div className="md:ml-3 z-10">
        <h1 className="text-5xl text-primary font-bold uppercase max-md:text-center">
          {first} <span className="text-white max-md:block">{second}</span>
        </h1>
      </div>
      <div className="p-8 bg-gradient-to-r from-[#01A9C680] to-[#0D0D1480] w-full md:hidden flex items-center absolute bottom-0 justify-center z-10">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Header;
