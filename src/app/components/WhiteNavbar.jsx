"use client";

import Image from "next/image";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoSunny } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi"; // Import hamburger menu dan close icon
import Logo from "../../../public/Logo_Majestic.png";
import { usePathname } from "next/navigation";
import Link from "next/link";

const WhiteNavbar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false); // State untuk toggle menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full top-0 right-0 left-0 fixed pr-5 bg-white z-[9999] shadow-md">
      <div className="flex justify-between items-center">
        <div className="bg-primary p-5">
          <Image src={Logo} alt="bg" width={55} />
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
              <Link
                href="/"
                className={`group relative link ${pathname === "/" ? "font-bold" : ""}`}
                onClick={toggleMenu}
              >
                Beranda
                <span
                  className={`absolute bg-black -bottom-1 left-1/2 w-0 transition-all h-0.5 group-hover:w-3/6 duration-300`}
                ></span>
                <span
                  className={`absolute bg-black -bottom-1 right-1/2 w-0 transition-all h-0.5  group-hover:w-3/6 duration-300`}
                ></span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`group relative link ${pathname === "/about" ? "font-bold" : ""}`}
                onClick={toggleMenu}
              >
                Tentang
                <span
                  className={`absolute bg-black -bottom-1 left-1/2 w-0 transition-all h-0.5 group-hover:w-3/6 duration-300`}
                ></span>
                <span
                  className={`absolute bg-black -bottom-1 right-1/2 w-0 transition-all h-0.5  group-hover:w-3/6 duration-300`}
                ></span>
              </Link>
            </li>
            <li>
              <Link
                href="/wisata"
                className={`group relative link ${pathname === "/wisata" ? "font-bold" : ""}`}
                onClick={toggleMenu}
              >
                Wisata
                <span
                  className={`absolute bg-black -bottom-1 left-1/2 w-0 transition-all h-0.5 group-hover:w-3/6 duration-300`}
                ></span>
                <span
                  className={`absolute bg-black -bottom-1 right-1/2 w-0 transition-all h-0.5  group-hover:w-3/6 duration-300`}
                ></span>
              </Link>
            </li>
            <li>
              <Link
                href="/kuliner"
                className={`group relative link ${pathname === "/kuliner" ? "font-bold" : ""}`}
                onClick={toggleMenu}
              >
                Kuliner
                <span
                  className={`absolute bg-black -bottom-1 left-1/2 w-0 transition-all h-0.5 group-hover:w-3/6 duration-300`}
                ></span>
                <span
                  className={`absolute bg-black -bottom-1 right-1/2 w-0 transition-all h-0.5  group-hover:w-3/6 duration-300`}
                ></span>
              </Link>
            </li>
            <li>
              <Link
                href="/akomodasi"
                className={`group relative link ${pathname === "/akomodasi" ? "font-bold" : ""}`}
                onClick={toggleMenu}
              >
                Akomodasi
                <span
                  className={`absolute bg-black -bottom-1 left-1/2 w-0 transition-all h-0.5 group-hover:w-3/6 duration-300`}
                ></span>
                <span
                  className={`absolute bg-black -bottom-1 right-1/2 w-0 transition-all h-0.5  group-hover:w-3/6 duration-300`}
                ></span>
              </Link>
            </li>
            <li>
              <Link
                href="/acara"
                className={`group relative link ${pathname === "/acara" ? "font-bold" : ""}`}
                onClick={toggleMenu}
              >
                Acara
                <span
                  className={`absolute bg-black -bottom-1 left-1/2 w-0 transition-all h-0.5 group-hover:w-3/6 duration-300`}
                ></span>
                <span
                  className={`absolute bg-black -bottom-1 right-1/2 w-0 transition-all h-0.5  group-hover:w-3/6 duration-300`}
                ></span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Icons */}
        <div className="hidden md:flex gap-4 pr-5">
          <button
            className={`btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-transparent rounded hover:bg-white group py-1.5 px-2.5 border  `}
          >
            <span className="w-56 h-48 rounded bg-text-header absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span
              className={`relative w-full text-left  transition-colors duration-300 ease-in-out group-hover:text-white font-semibold`}
            >
              Login
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhiteNavbar;
