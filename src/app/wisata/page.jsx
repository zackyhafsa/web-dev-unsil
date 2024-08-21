import React from "react";
import SocialMedia from "../components/SocialMedia";
import WisataCard from "../components/WisataCard";
import Footer from "../components/Footer";
import { FaArrowRight } from "react-icons/fa";
import Adrenalin from "./Adrenalin";
import Button from "../components/ButtonArrow";
import Subscribe from "../components/Subscribe";
import ButtonArrow from "../components/ButtonArrow";

const Wisata = () => {
  return (
    <div>
      <div className="bg-[url('/wisata-bg.png')] h-96 w-full bg-no-repeat bg-cover bg-center flex md:items-center pt-10 max-md:justify-center max-md:flex-col relative">
        <div className="p-8 bg-gradient-to-b from-[#01A9C680] to-[#0D0D1480] h-full hidden md:flex items-center">
          <SocialMedia />
        </div>
        <div className="ml-3">
          <h1 className="text-5xl text-white font-bold uppercase max-md:text-center">
            <span className="text-primary">Wisata</span> Majalengka
          </h1>
        </div>
        <div className="p-8 bg-gradient-to-r from-[#01A9C680] to-[#0D0D1480] w-full md:hidden flex items-center absolute bottom-0 justify-center">
          <SocialMedia />
        </div>
      </div>
      <div className="mt-16 text-center">
        <h1 className=" font-bold text-3xl text-text-header mb-3">Destinasi Wisata</h1>
        <p>
          Terdapat Beragam Wisata yang ada di Majalengka, Jelajahi dan temukan wisata yang anda
          inginkan
        </p>
      </div>
      <div className="px-[7%] my-5 mx-auto">
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-20 gap-y-28">
          <WisataCard
            imageUrl={`/akomodasi.png`}
            title={`Panyaweyan`}
            description={`One of Saturn’s largest rings may be newer than anyone`}
            date={`May 13, 2019`}
            author={`Unmaku`}
          />
          <WisataCard
            imageUrl={`/akomodasi.png`}
            title={`Panyaweyan`}
            description={`One of Saturn’s largest rings may be newer than anyone`}
            date={`May 13, 2019`}
            author={`Unmaku`}
          />
          <WisataCard
            imageUrl={`/akomodasi.png`}
            title={`Panyaweyan`}
            description={`One of Saturn’s largest rings may be newer than anyone`}
            date={`May 13, 2019`}
            author={`Unmaku`}
          />
          <WisataCard
            imageUrl={`/akomodasi.png`}
            title={`Panyaweyan`}
            description={`One of Saturn’s largest rings may be newer than anyone`}
            date={`May 13, 2019`}
            author={`Unmaku`}
          />
          <WisataCard
            imageUrl={`/akomodasi.png`}
            title={`Panyaweyan`}
            description={`One of Saturn’s largest rings may be newer than anyone`}
            date={`May 13, 2019`}
            author={`Unmaku`}
          />
          <WisataCard
            imageUrl={`/akomodasi.png`}
            title={`Panyaweyan`}
            description={`One of Saturn’s largest rings may be newer than anyone`}
            date={`May 13, 2019`}
            author={`Unmaku`}
          />
          <WisataCard
            imageUrl={`/akomodasi.png`}
            title={`Panyaweyan`}
            description={`One of Saturn’s largest rings may be newer than anyone`}
            date={`May 13, 2019`}
            author={`Unmaku`}
          />
          <WisataCard
            imageUrl={`/akomodasi.png`}
            title={`Panyaweyan`}
            description={`One of Saturn’s largest rings may be newer than anyone`}
            date={`May 13, 2019`}
            author={`Unmaku`}
          />
          <WisataCard
            imageUrl={`/akomodasi.png`}
            title={`Panyaweyan`}
            description={`One of Saturn’s largest rings may be newer than anyone`}
            date={`May 13, 2019`}
            author={`Unmaku`}
          />
          <WisataCard
            imageUrl={`/akomodasi.png`}
            title={`Panyaweyan`}
            description={`One of Saturn’s largest rings may be newer than anyone`}
            date={`May 13, 2019`}
            author={`Unmaku`}
          />
          <WisataCard
            imageUrl={`/akomodasi.png`}
            title={`Panyaweyan`}
            description={`One of Saturn’s largest rings may be newer than anyone`}
            date={`May 13, 2019`}
            author={`Unmaku`}
          />
          <WisataCard
            imageUrl={`/akomodasi.png`}
            title={`Panyaweyan`}
            description={`One of Saturn’s largest rings may be newer than anyone`}
            date={`May 13, 2019`}
            author={`Unmaku`}
          />
        </div>
        <div className="my-20 flex justify-end">
          <ButtonArrow content={"Lihat Lainnya"} />
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#0741737f] to-[#c5ff9577] px-[7%] py-10 mb-16">
        <div className="lg:w-[70%] mx-auto">
          <h1 className="font-extrabold text-4xl explore-hidden-gem ml-10 mb-2 text-[#1F2937]">
            EXPLORE HIDDEN GEM
          </h1>
          <h2 className="text-[#1F2937] text-3xl font-extrabold ml-10 mb-5">CURUG BALIGO</h2>
          <div className="border-l-2 border-[#4B5563] pl-10 text-[#4B5563]">
            <p>
              <a href="https://www.kabaralam.com/tag/curug-baligo" className="underline">
                Curug Baligo
              </a>
              merupakan salah satu destinasi berbasis air terjun yang tengah hits di Kabupaten{" "}
              <a href="https://www.kabaralam.com/tag/majalengka" className="underline">
                Majalengka
              </a>
              , Jawa Barat. Sesuai namanya, Curug Baligo berada di Blok Baligo, Desa Padaherang,
              Kecamatan Sindangwangi, Kabupaten Majalengka, Jawa Barat. Berada di kawasan konservasi
              Taman Nasional{" "}
              <a href="https://www.kabaralam.com/tag/gunung-ciremai" className="underline">
                Gunung Ciremai
              </a>{" "}
              (TNGC).
            </p>
          </div>
        </div>
      </div>
      <div className="px-[7%] text-center mb-16">
        <div className="bg-[url('/hero-bg.png')] bg-center bg-cover bg-no-repeat w-full h-[490px] relative">
          <div className=" text-white py-2 px-4 bg-gradient-to-r from-[#C6FF9680] to-[#07417380] absolute md:-right-20 md:top-20 top-0 right-0 md:rotate-90 text-xl font-light ">
            Majestic <span className="font-bold italic">MJL</span>
          </div>
        </div>
        <p className="text-slate-400">Photo by : instagram.com/@exploretrip_adventure</p>
      </div>
      <div className="px-[7%] my-16">
        <Adrenalin />
      </div>
      <div className="w-full flex justify-center  items-center my-16">
        <Subscribe />
      </div>
      <Footer />
    </div>
  );
};

export default Wisata;
