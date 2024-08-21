import React from "react";
import SocialMedia from "./SocialMedia";

const Header = ({ imageUrl, first, second }) => {
  return (
    <div
      className="bg-[url('/wisata-bg.png')] h-96 w-full bg-no-repeat bg-cover bg-center flex md:items-center pt-10 max-md:justify-center max-md:flex-col relative"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="p-8 bg-gradient-to-b from-[#01A9C680] to-[#0D0D1480] h-full hidden md:flex items-center">
        <SocialMedia />
      </div>
      <div className="ml-3">
        <h1 className="text-5xl text-white font-bold uppercase max-md:text-center">
          <span className="text-primary">{first}</span> {second}
        </h1>
      </div>
      <div className="p-8 bg-gradient-to-r from-[#01A9C680] to-[#0D0D1480] w-full md:hidden flex items-center absolute bottom-0 justify-center">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Header;
