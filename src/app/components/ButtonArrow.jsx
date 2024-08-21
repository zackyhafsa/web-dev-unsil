import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ButtonArrow = ({ content }) => {
  return (
    <button className="py-2 px-3 font-semibold bg-text-header text-white flex items-center gap-3">
      {content} <FaArrowRight />
    </button>
  );
};

export default ButtonArrow;
