import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const SideNavbar = ({ currentImageIndex }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-between py-10 relative">
      <div className="my-auto">
        <div
          className={`w-0.5 h-8 mb-3 ${currentImageIndex === 0 ? "bg-slate-100" : "bg-slate-500"}`}
        ></div>
        <div
          className={`w-0.5 h-8 mb-3 ${currentImageIndex === 1 ? "bg-slate-100" : "bg-slate-500"}`}
        ></div>
        <div
          className={`w-0.5 h-8 ${currentImageIndex === 2 ? "bg-slate-100" : "bg-slate-500"}`}
        ></div>
      </div>
      <div className="text-white flex flex-col gap-4 absolute bottom-10">
        <FaFacebookF size={25} className="hover:text-primary ease-in-out duration-100" />
        <FaInstagram size={25} className="hover:text-primary ease-in-out duration-100" />
        <FaYoutube size={25} className="hover:text-primary ease-in-out duration-100" />
        <FaTiktok size={25} className="hover:text-primary ease-in-out duration-100" />
      </div>
    </div>
  );
};

export default SideNavbar;
