import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full mx-[15%] max-lg:mx-[5%] max-md:mx-[2%] py-10 px-4 bg-gradient-to-r from-[#07417399] to-[#C5FF9599]">
      <h1 className="font-bold text-3xl text-white">
        Dapatkan E-Book Panduan Perjalanan Gratis Dengan Berlangganan
      </h1>
      <form>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Masukkan Email"
          className="text-lg py-2 px-1 mt-5 rounded-md"
        />
        <button className="sm:ml-5 max-sm:mt-3 bg-text-header text-lg rounded-md py-2 px-5 text-white font-semibold">
          Berlangganan
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
