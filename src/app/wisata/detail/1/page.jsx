import React from "react";
import { MdNavigateNext } from "react-icons/md";
import Breadcrumb from "./Breadcrumb";
import WisataProfile from "./WisataProfile";
import Footer from "@/app/components/Footer";
import WisataDesc from "./WisataDesc";
import Ulasan from "./Ulasan";
import Rekomendasi from "./Rekomendasi";
import Subscribe from "@/app/components/Subscribe";

const DetailWisata = () => {
  return (
    <div>
      <div className="pt-32 px-[7%]">
        <Breadcrumb />
        <WisataProfile />
        <WisataDesc />
        <Ulasan />
        <Rekomendasi />
        <div className="w-full flex justify-center  items-center my-16">
          <Subscribe />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailWisata;
