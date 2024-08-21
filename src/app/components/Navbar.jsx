"use client";

import Image from "next/image";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoSunny } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi"; // Import hamburger menu dan close icon
import Logo from "../../../public/logo.png";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State untuk toggle menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full top-0 right-0 left-0 fixed pr-5 bg-white z-[9999]">
      <div className="flex justify-between items-center">
        <div className="bg-primary p-5">
          <Image src={Logo} alt="bg" width={55} priority />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden pr-5">
          <button onClick={toggleMenu}>{isOpen ? <HiX size={30} /> : <HiMenu size={30} />}</button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row gap-4 uppercase text-sm absolute md:relative top-16 left-0 w-full bg-white md:bg-transparent md:top-0 md:w-auto md:ml-5 md:p-0 p-5`}
        >
          <ul className="flex flex-col md:flex-row gap-4">
            <li>
              <a href="/" className="group relative">
                Beranda
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-text-header group-hover:w-3/6 duration-300"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-text-header group-hover:w-3/6 duration-300"></span>
              </a>
            </li>
            <li>
              <a href="/about" className="group relative">
                Tentang
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-text-header group-hover:w-3/6 duration-300"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-text-header group-hover:w-3/6 duration-300"></span>
              </a>
            </li>
            <li>
              <a href="/wisata" className="group relative">
                Wisata
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-text-header group-hover:w-3/6 duration-300"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-text-header group-hover:w-3/6 duration-300"></span>
              </a>
            </li>
            <li>
              <a href="" className="group relative">
                Kuliner
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-text-header group-hover:w-3/6 duration-300"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-text-header group-hover:w-3/6 duration-300"></span>
              </a>
            </li>
            <li>
              <a href="" className="group relative">
                Akomodasi
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-text-header group-hover:w-3/6 duration-300"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-text-header group-hover:w-3/6 duration-300"></span>
              </a>
            </li>
            <li>
              <a href="" className="group relative">
                Acara
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-text-header group-hover:w-3/6 duration-300"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-text-header group-hover:w-3/6 duration-300"></span>
              </a>
            </li>
          </ul>
        </div>

        {/* Icons */}
        <div className="hidden md:flex gap-4 pr-5">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
