import React from "react";
import Header from "../components/Header";
import AkomodasiCard from "./AkomodasiCard";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const Akomodasi = () => {
  return (
    <div>
      <Header imageUrl={"/akomodasi-bg.jpg"} first={"Akomodasi"} second={"Majalengka"} />
      <div className="px-[7%]">
        <div className="text-center py-16 w-full">
          <h1 className="text-3xl text-text-header font-bold uppercase">Akomodasi</h1>
          <p className="lg:w-1/2 mx-auto mt-2">
            Cari penginapan yang nyaman dan sesuai untuk dijadikan tempat istirahat anda setelah
            menjelajah indahnya Majalengka
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 lg:px-[5%] ">
          <AkomodasiCard
            imageUrl={"/fitraHotel.jpeg"}
            rating={2}
            title={"Fitra Hotel Majalengka"}
            location={"Kec. Majalengka"}
          />
          <AkomodasiCard
            imageUrl={"/akomodasi-bg.jpg"}
            rating={2}
            title={"Hotel Bima"}
            location={"Kec. Panyingkiran"}
          />
          <AkomodasiCard
            imageUrl={"/horison.jpg"}
            rating={4}
            title={"Hotel Horison Utama Kertajati"}
            location={"Kec. Kertajati"}
          />

          <AkomodasiCard
            imageUrl={"/summerville.jpg"}
            rating={4}
            title={"Hotel Summerville"}
            location={"Kec. Majalengka"}
          />
          <AkomodasiCard
            imageUrl={"/jatiwangiGuest.jpg"}
            rating={2}
            title={"Jatiwangi Syariah Guest House"}
            location={"Kec. Jatiwangi"}
          />
          <AkomodasiCard
            imageUrl={"/fieris.jpeg"}
            rating={3}
            title={"Fieris Hotel and Convention Kertajati"}
            location={"Kec. Kertajati"}
          />
          <AkomodasiCard
            imageUrl={"/garden.jpeg"}
            rating={4}
            title={"Garden Hotel Majalengka"}
            location={"Kec. Panyingkiran"}
          />
          <AkomodasiCard
            imageUrl={"/paraland.jpeg"}
            rating={4}
            title={"Paraland Resort"}
            location={"Kec. Panyingkiran"}
          />
        </div>
        <div className="w-full flex justify-center  items-center my-16">
          <Subscribe />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Akomodasi;
