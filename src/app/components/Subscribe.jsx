import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full mx-[15%] max-lg:mx-[5%] max-md:mx-[2%] relative bg-gradient-to-r from-[#07417399] to-[#C5FF9599]">
      <div className="bg-[url('/subscribe.png')] w-full h-full absolute bg-center bg-cover bg-no-repeat -z-10"></div>
      <div className="py-10 px-4">
        <h1 className="font-bold text-3xl text-white">
          Dapatkan E-Book Panduan Perjalanan Gratis <br />
          Dengan Berlangganan
        </h1>
        <form>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Masukkan Email"
            className="text-lg py-2 px-1 mt-5"
          />
          <button className="sm:ml-5 max-sm:mt-3 bg-text-header text-lg py-2 px-5 text-white font-semibold">
            Berlangganan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
