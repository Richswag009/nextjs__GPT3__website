import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="flex justify-between  py-4 px-8 lg:py-6 lg:px-20 relative">
      <div className="flex-1 flex justify-items-start items-center ">
        {!showMenu && (
          <div className="mr-8">
            <Image
              src="/assets/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className="w-[62.56px] h-[16.02px]"
            />
          </div>
        )}
        {/* links */}
        <div className=" lg:flex-row hidden lg:flex ">
          <Link href="#home">Home</Link>
          <Link href="#wgpt3">What is GPT3</Link>
          <Link href="#possibility">Open Ai</Link>
          <Link href="#features ">Case Studies</Link>
          <Link href="#blog">Libary</Link>
        </div>
      </div>
      {/* sign in */}
      <div className="hidden lg:flex lg:justify-end items-center">
        <Link href="">
          <button className="text-lg leading-6 font-medium">Sign in</button>
        </Link>
        <Link href="">
          <button className=" bg-[#FF4820] text-white rounded-md  px-4 py-2 font-medium text-lg leading-6 outline-none border-none">
            Sign Up
          </button>
        </Link>
      </div>

      {/* mobile */}
      <div>
        {showMenu ? (
          <RiCloseLine
            size={27}
            color="white"
            className="absolute  top-3 text-2xl z-10 "
            onClick={() => setShowMenu(false)}
          />
        ) : (
          <RiMenu3Line
            size={27}
            color="white"
            className="lg:hidden"
            onClick={() => setShowMenu(true)}
          />
        )}

        {showMenu && <MobileMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
