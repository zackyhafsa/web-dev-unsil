import Image from "next/image";
import React from "react";
import Logo from "../../../public/logo.png";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-text-header px-[7%] py-10 text-white">
      <div className="flex justify-between max-md:flex-col ">
        <div className="max-md:mb-5">
          <Image src={Logo} width={55} priority alt={"logo"} />
          <p className="text-white font-light text-sm">Discover the Hidden Beauty of West Java</p>
        </div>
        <div className="flex max-sm:flex-col max-sm:text-center">
          <div className="sm:mr-16 max-sm:my-5">
            <h1 className="font-bold mb-5 text-lg">About</h1>
            <ul className="font-light flex flex-col gap-3">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">News</a>
              </li>
            </ul>
          </div>
          <div className="sm:mr-16 max-sm:my-5">
            <h1 className="font-bold mb-5 text-lg">Company</h1>
            <ul className="font-light flex flex-col gap-3">
              <li>
                <a href="">FAQs</a>
              </li>
              <li>
                <a href="">History</a>
              </li>
              <li>
                <a href="">Testimoni</a>
              </li>
            </ul>
          </div>
          <div className="sm:mr-16 max-sm:my-5">
            <h1 className="font-bold mb-5 text-lg">Contact</h1>
            <ul className="font-light flex flex-col gap-3">
              <li>
                <a href="">Call Center</a>
              </li>
              <li>
                <a href="">Support Center</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="sm:mr-16 max-sm:my-5">
            <h1 className="font-bold mb-5 text-lg">Support</h1>
            <ul className="font-light flex flex-col gap-3">
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms & Service</a>
              </li>
              <li>
                <a href="">Payments</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto text-center mt-16">
        <div className="flex gap-4 justify-center py-5">
          <FaFacebookF size={25} />
          <FaInstagram size={25} />
          <FaYoutube size={25} />
          <FaTiktok size={25} />
        </div>
        <p className="">Design and Development by WINDSTAND</p>
        <p className="">© 2024 All Rights Reserved by Majestic Majalengka</p>
      </div>
    </div>
  );
};

export default Footer;
