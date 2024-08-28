import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import Header from "../components/Header";

const About = () => {
  return (
    <div>
      <div>
        <Header imageUrl={"/hero-bg.png"} first={"Tentang"} second={"Kami"} />
      </div>
      <div className="px-[7%] pt-16">
        <div>
          <div className="bg-[url('/about-bg.png')] bg-cover bg-no-repeat py-16">
            <h1 className="text-3xl text-text-header font-bold uppercase">Majestic Majalengka</h1>
            <p className="mt-3 text-justify">
              Selamat datang di Majestic Majalengka, sebuah portal pariwisata yang dirancang untuk
              mengenalkan pesona tersembunyi Majalengka kepada dunia. Kami hadir dengan tujuan untuk
              memudahkan Anda dalam mengeksplorasi kekayaan alam, budaya, dan tradisi yang ada di
              Majalengka, serta memberikan panduan lengkap untuk pengalaman wisata yang tak
              terlupakan.
            </p>
          </div>
          <div className="w-full h-96 bg-[url('/homeAbout.png')] bg-no-repeat bg-cover bg-center my-5 relative">
            <div className=" text-white py-2 px-4 bg-gradient-to-r from-[#C6FF9680] to-[#07417380] absolute md:-right-16 bottom-5 text-xl font-light ">
              Majestic <span className="font-bold italic">MJL</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between max-md:flex-col mt-16">
          <div className="md:w-1/2 md:mr-8">
            <h1 className="text-3xl text-text-header font-bold uppercase">Cerita Kami</h1>
            <p className="text-justify mt-3">
              Nama "Majestic Majalengka" diambil dari kata "Majestic" yang berarti megah, anggun,
              dan penuh kemuliaan. Nama ini mencerminkan keindahan alam dan budaya Majalengka yang
              begitu luar biasa, namun belum banyak dikenal. Melalui website ini, kami ingin
              menunjukkan kepada dunia bahwa Majalengka adalah destinasi wisata yang layak disebut
              sebagai "mahkota" dari keindahan Jawa Barat.
            </p>
          </div>
          <div className="md:w-1/2 md:ml-8 max-md:mt-5 bg-[url('/hero-bg.png')] bg-no-repeat bg-cover bg-center h-72 "></div>
        </div>
        <div className="mt-8 text-justify">
          <p>
            <span className="block mt-5 ">
              Website ini lahir dari kecintaan kami terhadap Majalengka, sebuah daerah yang kaya
              akan potensi wisata namun sering kali terabaikan. Kami menyadari bahwa banyak orang
              yang belum mengenal keindahan Majalengka, sehingga kami berinisiatif untuk membangun
              sebuah platform yang dapat menjadi jembatan antara wisatawan dengan keindahan yang
              ditawarkan daerah ini.
            </span>
            <span className="block">
              Majestic Majalengka dibangun oleh sekelompok anak muda yang berdedikasi dalam
              mempromosikan pariwisata lokal. Berawal dari sebuah ide sederhana untuk memperkenalkan
              tempat-tempat tersembunyi di Majalengka, kami akhirnya berkembang menjadi platform
              informasi yang komprehensif, dengan berbagai fitur yang dirancang untuk memenuhi
              kebutuhan wisatawan.
            </span>
            <span className="block mt-5 ">
              Kami memiliki misi untuk mempromosikan Majalengka sebagai salah satu destinasi wisata
              unggulan di Indonesia. Melalui website ini, kami ingin memastikan bahwa setiap
              wisatawan dapat menikmati keindahan Majalengka dengan cara yang paling mudah dan
              informatif. Kami berkomitmen untuk selalu memberikan informasi yang akurat, terkini,
              dan relevan bagi para pengunjung.
            </span>
            <span className="block mt-5">
              Terima kasih telah mempercayakan perjalanan wisata Anda kepada Majestic Majalengka.
              Kami mengundang Anda untuk bersama-sama menjelajahi, merasakan, dan menikmati
              keajaiban yang ditawarkan oleh Majalengka. Mari kita lestarikan keindahan alam dan
              budaya ini, sehingga tetap dapat dinikmati oleh anak cucu kita kelak.
            </span>
          </p>
        </div>
        <div className="my-16 w-full">
          <h1 className="text-3xl text-text-header font-bold uppercase text-center mt-16 mb-9">
            Mulai perjalanan Anda sekarang
          </h1>
          <Card />
        </div>
        <div className="w-full flex justify-center  items-center my-16">
          {/* <div className="bg-[url('/subscribe.png')] bg-cover bg-center bg-no-repeat"> */}
          <Subscribe />
          {/* </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
