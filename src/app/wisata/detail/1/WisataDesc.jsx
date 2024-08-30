import React from "react";

const WisataDesc = () => {
  return (
    <div className="flex max-md:flex-col my-16 gap-14">
      <div className="md:w-3/5">
        <h1 className="font-semibold text-2xl text-text-header mb-5">Terasering Panyaweuyan</h1>
        <p className="leading-8 max-md:text-justify">
          Terasering Panyaweuyan merupakan kawasan wisata terasering yang mayoritas adalah tanaman
          bawang putih dan bawang merah. Terasering di Panyaweuyan berbeda dengan terasering di
          daerah lain di Indonesia yang biasanya sebuah sawah. Di Panyaweuyan tidak ada sawah padi.
          Untuk menaiki sampai puncak Panyaweuyan, Pemkab Majalengka sudah membangun tangga dan
          bangunan permanen.
        </p>
      </div>
      <div className="md:w-2/5 h-72 bg-[url('/maps.png')] bg-center bg-cover bg-no-repeat"></div>
    </div>
  );
};

export default WisataDesc;
