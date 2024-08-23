"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoSunny } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../../../public/logo.png";
import Button from "./Button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State untuk toggle menu
  const [isScrolled, setIsScrolled] = useState(false); // State untuk mengatur warna navbar

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Menggunakan useEffect untuk menambahkan event listener pada scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full top-0 right-0 left-0 fixed pr-5 z-[9999] transition-all duration-300 ${
        isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
      }`}
    >
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
          } md:flex flex-col md:flex-row gap-4 uppercase text-sm absolute md:relative top-16 left-0 w-full bg-white  md:bg-transparent md:top-0 md:w-auto md:ml-5 md:p-0 p-5 ${
            isScrolled ? "" : "md:bg-transparent text-black md:text-white"
          }`}
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
                  className={`absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 ${
                    isScrolled ? "bg-black" : "bg-white"
                  } group-hover:w-3/6 duration-300`}
                ></span>
                <span
                  className={`absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 ${
                    isScrolled ? "bg-black" : "bg-white"
                  } group-hover:w-3/6 duration-300`}
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
                  className={`absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 ${
                    isScrolled ? "bg-black" : "bg-white"
                  } group-hover:w-3/6 duration-300`}
                ></span>
                <span
                  className={`absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 ${
                    isScrolled ? "bg-black" : "bg-white"
                  } group-hover:w-3/6 duration-300`}
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
                  className={`absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 ${
                    isScrolled ? "bg-black" : "bg-white"
                  } group-hover:w-3/6 duration-300`}
                ></span>
                <span
                  className={`absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 ${
                    isScrolled ? "bg-black" : "bg-white"
                  } group-hover:w-3/6 duration-300`}
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
                  className={`absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 ${
                    isScrolled ? "bg-black" : "bg-white"
                  } group-hover:w-3/6 duration-300`}
                ></span>
                <span
                  className={`absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 ${
                    isScrolled ? "bg-black" : "bg-white"
                  } group-hover:w-3/6 duration-300`}
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
                  className={`absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 ${
                    isScrolled ? "bg-black" : "bg-white"
                  } group-hover:w-3/6 duration-300`}
                ></span>
                <span
                  className={`absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 ${
                    isScrolled ? "bg-black" : "bg-white"
                  } group-hover:w-3/6 duration-300`}
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
                  className={`absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 ${
                    isScrolled ? "bg-black" : "bg-white"
                  } group-hover:w-3/6 duration-300`}
                ></span>
                <span
                  className={`absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 ${
                    isScrolled ? "bg-black" : "bg-white"
                  } group-hover:w-3/6 duration-300`}
                ></span>
              </Link>
            </li>
            {/* Tambahkan item menu lainnya di sini */}
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
