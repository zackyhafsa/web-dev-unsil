import React from "react";
import Header from "../components/Header";
import KulinerCard from "./KulinerCard";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const Kuliner = () => {
  return (
    <div>
      <Header imageUrl={"/pepes.png"} first={"Kuliner"} second={"Khas Majalengka"} />
      <div className="px-[7%]">
        <div className="text-center py-16">
          <h1 className="text-3xl text-text-header font-bold">Kuliner</h1>
          <p>Temukan kuliner khas Majalengka yang kamu inginkan, dan nikmati cita rasa khas nya</p>
        </div>
        <div className=" md:grid-cols-2 lg:grid-cols-3 grid gap-5 lg:px-[10%]">
          <KulinerCard
            imageUrl={"/jalakotek.png"}
            title={"Jalakotek"}
            desc={
              "Jalakotek adalah camilan yang terdiri dari tahu, dan bakso aci yang dibumbui sehingga memberikan rasa yang lezat. "
            }
          />
          <KulinerCard
            imageUrl={"/mangga.png"}
            title={"Mangga Gedong Gincu"}
            desc={
              "Mangga Gedong Gincu yang menjadi ikon Kabupaten Majalengka ini memang sangat terkenal dengan rasanya yang manis, fresh, dan kualitasnya yang bagus. "
            }
          />
          <KulinerCard
            imageUrl={"/rempeyek.png"}
            title={"Rempeyek"}
            desc={
              "Rempeyek ini selalu menjadi kesukaan orang Majalengka untuk dijadikan camilan, dan pelengkap untuk makan pecel. "
            }
          />
          <KulinerCard
            imageUrl={"/pepes.png"}
            title={"Pepes Jeroan"}
            desc={
              "Pepes Jeroan Khas Majalengka yang diolah menggunakan bumbu, dan rempah-rempah yang yummy banget! Semua bahan ini akan dibungkus dengan daun pisang, dan selanjutnya Pepes Jeroan akan dibakar hingga mengeluarkan aroma sedap pada sajian Pepes Jeroan Khas Majalengka.  "
            }
          />
          <KulinerCard
            imageUrl={"/tutut.png"}
            title={"Tutut"}
            desc={
              "Tutut ini adalah keong yang memiliki ukuran kecil, dan Tutut ini akan dimasak dengan rempah-rempah untuk menghilangkan bau amis serta lendir pada Tutut. meskipun tampilan dari Tutut ini tidak menarik, tapi rasanya emang sempurna. "
            }
          />
          <KulinerCard
            imageUrl={"/kecap.png"}
            title={"Kecap Majalengka"}
            desc={
              "Selain Mangga Gedong Gincu, di Kabupaten Majalengka memang terkenal sekali memiliki kecap yang manis, gurih, dan bikin nagih"
            }
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

export default Kuliner;
