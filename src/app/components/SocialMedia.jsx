import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div>
      <div className="h-full flex md:flex-col gap-5 text-white">
        <FaFacebookF size={30} />
        <FaInstagram size={30} />
        <FaYoutube size={30} />
        <FaTiktok size={30} />
      </div>
    </div>
  );
};

export default SocialMedia;
