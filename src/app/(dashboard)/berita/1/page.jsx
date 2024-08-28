import React from "react";
import Content from "./Content";
import BeritaCard from "./BeritaCard";
import Subscribe from "@/app/components/Subscribe";
import Footer from "@/app/components/Footer";

const Berita = () => {
  return (
    <div className="pt-32">
      <h1 className="text-center text-3xl font-bold text-text-header w-1/2 mx-auto">
        Tingkatkan Kunjungan Wisatawan, Pemkab Majalengka Terapkan Strategi Ini
      </h1>
      <div className="px-[15%]">
        <Content />
        <h1 className=" text-3xl font-bold text-text-header mt-16">Berita Lainnya yang Serupa</h1>
        <div className="grid grid-cols-2 gap-5  mb-16 mt-5">
          <BeritaCard />
          <BeritaCard />
        </div>
      </div>
      <div className="w-full flex justify-center  items-center my-16">
        <Subscribe />
      </div>
      <Footer />
    </div>
  );
};

export default Berita;
