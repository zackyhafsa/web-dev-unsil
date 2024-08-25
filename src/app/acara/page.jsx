import React from "react";
import Header from "../components/Header";
import AcaraCard from "./AcaraCard";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const Acara = () => {
  return (
    <div>
      <Header imageUrl={"/acara-bg.png"} first={"Acara"} second={"Majalengka"} />
      <div className="px-[7%]">
        <div className="text-center py-16">
          <h1 className="text-text-header text-3xl font-bold uppercase">Acara</h1>
          <p className="mt-2">Eksplorasi dan ikuti kegiatan menarik yang ada di Majalengka</p>
        </div>
        <div className="mb-16">
          <h1 className="text-text-header text-2xl font-bold mb-5">Acara Yang Akan Mendatang</h1>
          <div className="grid grid-cols-2 gap-5">
            <AcaraCard />
          </div>
        </div>
        <div className="mb-16">
          <h1 className="text-text-header text-2xl font-bold mb-5">Acara Yang Telah Selesai</h1>
          <div className="grid grid-cols-2 gap-5">
            <AcaraCard />
            <AcaraCard />
            <AcaraCard />
            <AcaraCard />
          </div>
        </div>
        <div className="w-full flex justify-center  items-center my-16">
          <Subscribe />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Acara;
