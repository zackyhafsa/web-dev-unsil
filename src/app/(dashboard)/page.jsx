import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import Berita from "./Berita";
import Hero from "./Hero";
import Sorotan from "./Sorotan";
import Welcome from "./Welcome";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="">
        <div className="py-16 text-center bg-[url('/welcome-bg2.png')] bg-center bg-no-repeat">
          <h1 className="text-3xl font-bold text-text-header uppercase">
            Selamat Datang Di Majalengka
          </h1>
          <p>Si Kota Angin yang berada di Timur Jawa Barat</p>
        </div>
        <Welcome />
        <div className="py-16 text-center bg-[url('/sorotan-bg.png')] bg-center bg-no-repeat">
          <h1 className="text-3xl font-bold text-text-header uppercase">Sorotan</h1>
          <p>
            Majalengka memiliki bermacam hal yang dapat dinikmati. Berikut <br />
            adalah beberapa hal yang menjadi sorotan saat ini.
          </p>
        </div>
        <div className="px-[7%] mt-16 mb-72">
          <Sorotan />
        </div>
        <div className="py-16 text-center bg-[url('/berita-bg.png')] bg-center bg-no-repeat">
          <h1 className="font-bold text-3xl text-text-header uppercase">Berita</h1>
          <p>Cari tahu informasi terkait pariwisata Majalengka dengan membaca berita berikut.</p>
        </div>
        <div className="px-[7%] py-16 flex flex-col gap-5">
          <Berita />
          <Berita />
          <Berita />
        </div>
        <div className="w-full flex justify-center  items-center my-16">
          <Subscribe />
        </div>
      </div>
      <Footer />
    </div>
  );
}
