import { HiOutlinePencilSquare } from "react-icons/hi2";
import { IoStarSharp } from "react-icons/io5";
import Rating from "./Rating";
import Comment from "./Comment";
import ButtonArrow from "@/app/components/ButtonArrow";

const Ulasan = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <HiOutlinePencilSquare size={20} />
        <h1>Tulis Ulasanmu</h1>
      </div>
      <div className="flex max-md:flex-col  mt-16">
        <div className="md:w-1/5 text-text-header md:mr-20 border shadow-md h-min px-2 py-5">
          <h1 className="font-bold text-xl">Ulasan</h1>
          <div> 
            <Rating />
            <div className="flex justify-between mt-3">
              <div className="flex">
                <IoStarSharp size={20} color="#ffc107" />
                <IoStarSharp size={20} color="#ffc107" />
                <IoStarSharp size={20} color="#ffc107" />
                <IoStarSharp size={20} color="#ffc107" />
                <IoStarSharp size={20} color="#ffc107" />
              </div>
              <p className="text-end">31</p>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <IoStarSharp size={20} color="#ffc107" />
                <IoStarSharp size={20} color="#ffc107" />
                <IoStarSharp size={20} color="#ffc107" />
                <IoStarSharp size={20} color="#ffc107" />
              </div>
              <p className="text-end">17</p>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <IoStarSharp size={20} color="#ffc107" />
                <IoStarSharp size={20} color="#ffc107" />
                <IoStarSharp size={20} color="#ffc107" />
              </div>
              <p className="text-end">2</p>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <IoStarSharp size={20} color="#ffc107" />
                <IoStarSharp size={20} color="#ffc107" />
              </div>
              <p className="text-end">0</p>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <IoStarSharp size={20} color="#ffc107" />
              </div>
              <p className="text-end">0</p>
            </div>
          </div>
        </div>
        <div className="md:w-4/5 max-md:mt-5">
          <Comment />
          <Comment />
          <Comment />
          <div className="flex justify-end">
            <ButtonArrow content={"LIHAT ULASAN LAIN"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ulasan;
