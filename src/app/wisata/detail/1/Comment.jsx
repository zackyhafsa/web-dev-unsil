import Author from "@/app/(dashboard)/berita/1/Author";
import Star from "@/app/components/Star";
import { AiOutlineLike } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { VscEye } from "react-icons/vsc";

const Comment = () => {
  return (
    <div className="py-5 px-4 border mb-3 shadow-md">
      <div className="flex w-full justify-between mb-3">
        <div className="flex items-center text-text-header gap-3">
          <CgProfile size={40} />
          <div className="">
            <h1 className="font-bold">Xaviera Pacar Abrar</h1>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex items-center text-sm">
            <AiOutlineLike size={22} />
            <p>8</p>
          </div>
          <div className="flex items-center text-sm">
            <VscEye size={25} />
            <p>12</p>
          </div>
        </div>
      </div>
      <Star />
      <h1 className="font-semibold text-text-header my-3">Mantap Keren Banget</h1>
      <p>
        Terasering Panyaweuyan merupakan kawasan wisata terasering yang mayoritas adalah tanaman
        bawang putih dan bawang merah. Terasering di Panyaweuyan berbeda dengan terasering di daerah
        lain di Indonesia yang biasanya sebuah sawah.
      </p>
      <p className="text-sm text-text-header mt-3">Ditulis pada Jum’at, 16 Agustus 2024</p>
    </div>
  );
};

export default Comment;
