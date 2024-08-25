import React from "react";
import Header from "../components/Header";
import AkomodasiCard from "./AkomodasiCard";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const Akomodasi = () => {
  return (
    <div>
      <Header imageUrl={"/akomodasi-bg.png"} first={"Akomodasi"} second={"Majalengka"} />
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
            imageUrl={"/akomodasi.png"}
            rating={2}
            title={"Fitra Hotel Majalengka"}
            location={"Kec. Majalengka"}
          />
          <AkomodasiCard
            imageUrl={"/akomodasi.png"}
            rating={4}
            title={"Fitra Hotel Majalengka"}
            location={"Kec. Majalengka"}
          />
          <AkomodasiCard
            imageUrl={"/akomodasi.png"}
            rating={4}
            title={"Fitra Hotel Majalengka"}
            location={"Kec. Majalengka"}
          />
          <AkomodasiCard
            imageUrl={"/akomodasi.png"}
            rating={4}
            title={"Fitra Hotel Majalengka"}
            location={"Kec. Majalengka"}
          />
          <AkomodasiCard
            imageUrl={"/akomodasi.png"}
            rating={4}
            title={"Fitra Hotel Majalengka"}
            location={"Kec. Majalengka"}
          />
          <AkomodasiCard
            imageUrl={"/akomodasi.png"}
            rating={4}
            title={"Fitra Hotel Majalengka"}
            location={"Kec. Majalengka"}
          />
          <AkomodasiCard
            imageUrl={"/akomodasi.png"}
            rating={4}
            title={"Fitra Hotel Majalengka"}
            location={"Kec. Majalengka"}
          />
          <AkomodasiCard
            imageUrl={"/akomodasi.png"}
            rating={4}
            title={"Fitra Hotel Majalengka"}
            location={"Kec. Majalengka"}
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
