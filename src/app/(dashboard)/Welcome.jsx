import React from "react";

const Welcome = () => {
  return (
    <div>
      <div className="w-full h-full bg-gradient-to-r from-[#D9D9D980] to-[#C5FF9580] px-[7%] py-16">
        <div className="flex gap-20 items-center">
          <div className="w-1/3">
            <div className="bg-[url('/homeAbout2.png')] aspect-square bg-center bg-cover bg-no-repeat relative">
              <div className=" text-white py-2 px-4 bg-gradient-to-r from-[#C6FF9680] to-[#07417380] absolute md:-right-16 bottom-5 text-xl font-light ">
                Majestic <span className="font-bold italic">MJL</span>
              </div>
            </div>
          </div>
          <div className="w-2/3 text-justify leading-8">
            <p>
              Kabupaten Majalengka adalah sebuah kabupaten di Provinsi Jawa Barat, Indonesia, yang
              terletak di bagian timur provinsi ini. Dikelilingi oleh Kabupaten Sumedang di sebelah
              barat, Kabupaten Indramayu di utara, Kabupaten Cirebon di timur, serta Kabupaten
              Kuningan dan Kabupaten Ciamis di selatan, wilayah ini menawarkan keindahan geografis
              yang beragam, mulai dari dataran rendah hingga pegunungan yang menyejukkan.
            </p>
          </div>
        </div>
        <p className="leading-8 mt-5">
          Majalengka menjadi tempat yang sempurna bagi mereka yang mencari ketenangan dan keindahan
          yang alami. Selain alamnya yang mempesona, Majalengka juga kaya akan warisan budaya dan
          sejarah. Dari tradisi lokal yang masih terjaga hingga seni dan kerajinan tangan yang khas,
          setiap sudut Majalengka menyimpan cerita yang menarik untuk dijelajahi. Jelajahi lebih
          dalam keindahan Majalengka melalui "Majestic Majalengka", panduan pariwisata yang akan
          membawa Anda ke destinasi-destinasi terbaik, acara-acara budaya, hingga tips perjalanan
          yang berguna.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
