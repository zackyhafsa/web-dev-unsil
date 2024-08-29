import { IoStarSharp } from "react-icons/io5";

const Rating = () => {
  return (
    <div className="flex items-center justify-between gap-3">
      <h1 className="text-text-header text-lg">4,5</h1>
      <div className="flex">
        <IoStarSharp size={20} color="#ffc107" />
        <IoStarSharp size={20} color="#ffc107" />
        <IoStarSharp size={20} color="#ffc107" />
        <IoStarSharp size={20} color="#ffc107" />
        <IoStarSharp size={20} color="#ffc107" />
      </div>
      <p className="text-text-header underline ">50 Ulasan</p>
    </div>
  );
};

export default Rating;
