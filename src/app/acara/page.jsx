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
            <AcaraCard
              imageUrl={"/acara-bg.png"}
              estimasi={"2 Bulan 23 Hari lagi"}
              nama={"Rampak Genteng Jatiwangi Vol-5"}
              tempat={"Eks Pabrik Genteng Jatiwangi"}
              tanggal={"11 November 2024 "}
              waktu={"13:00 - 17:00 WIB"}
            />
          </div>
        </div>
        <div className="mb-16">
          <h1 className="text-text-header text-2xl font-bold mb-5">Acara Yang Telah Selesai</h1>
          <div className="grid grid-cols-2 gap-5">
            <AcaraCard
              imageUrl={"/pakauland.jpg"}
              estimasi={"8 Bulan 19 hari lalu"}
              nama={"Pakauland Raharja Manjang Cerita"}
              tempat={"Jl. Raya K.H Abdul Halim No.311, Majalengka Wetan"}
              tanggal={"5 Desember 2024 "}
              waktu={"08:00 - 13:00 WIB"}
            />
            <AcaraCard
              imageUrl={"/ngalaksa.jpg"}
              estimasi={"2 Bulan 23 Hari lagi"}
              nama={"Ngalaksa"}
              tempat={"Eks Pabrik Genteng Jatiwangi"}
              tanggal={"11 November 2024 "}
              waktu={"13:00 - 17:00 WIB"}
            />
            <AcaraCard
              imageUrl={"/binaragaJebor.jpg"}
              estimasi={"2 Bulan 23 Hari lagi"}
              nama={"Binaraga Jebor"}
              tempat={"Eks Pabrik Genteng Jatiwangi"}
              tanggal={"11 November 2024 "}
              waktu={"13:00 - 17:00 WIB"}
            />
            <AcaraCard
              imageUrl={"/fesKota.jpg"}
              estimasi={"2 Bulan 23 Hari lagi"}
              nama={"Festival Kota Angin"}
              tempat={"Eks Pabrik Genteng Jatiwangi"}
              tanggal={"11 November 2024 "}
              waktu={"13:00 - 17:00 WIB"}
            />
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
