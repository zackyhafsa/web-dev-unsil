import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";
import SideNavbar from "./Side";

const Hero = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="bg-[url('/hero-bg.png')] bg-center bg-no-repeat bg-cover h-screen w-full flex items-center">
        <div className="p-[46px] bg-gradient-to-b from-[#01A9C680] to-[#0D0D1480] h-screen hidden md:flex items-center">
          <SideNavbar />
        </div>
        <div className="ml-10 mt-60">
          <h1 className="text-6xl uppercase font-extrabold text-primary">
            Majestic <span className="block text-white">Majalengka</span>
          </h1>
          <p className="w-96 text-white mt-12 mb-5 text-justify ">
            Surga Tersembunyi di Jawa Barat. Temukan Keindahan Alam yang Menyatu dengan Kekayaan
            Budaya Lokal, dari Pegunungan yang Menyegarkan hingga Warisan Budaya yang Memikat Hati.
            Mari Jelajahi Pesona yang Tak Terlupakan di Setiap Sudutnya.
          </p>
          <a href="" className="py-2 px-4 bg-primary text-text-header font-bold text-xl ">
            JELAJAHI SEKARANG
          </a>
        </div>
        <div className="pt-16 bg-gradient-to-b from-[#3D71A780] to-[#CCE61480] backdrop-blur-sm px-10 text-white absolute right-1/3  bottom-0 h-[500px]">
          <div className="mb-5">
            <h1 className="font-bold text-xl">1.204,24 km2</h1>
            <p className="font-light">Luas Wilayah</p>
          </div>
          <div className="mb-5">
            <h1 className="font-bold text-xl">55+</h1>
            <p className="font-light">Tempat Wisata</p>
          </div>
          <div className="mb-5">
            <h1 className="font-bold text-xl">1.307.995</h1>
            <p className="font-light">Total Populasi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
