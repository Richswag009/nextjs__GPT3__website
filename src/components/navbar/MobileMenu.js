import React from "react";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <nav className="bg-[#031b34] scale-up-center px-20 items-center ">
      <div className=" mobilenav items-center flex flex-col">
        <Link href="#home">Home</Link>
        <Link href="#wgpt3">What is GPT3</Link>
        <Link href="#possibility">Open Ai</Link>
        <Link href="#features ">Case Studies</Link>
        <Link href="#blog">Libary</Link>
      </div>
      <div className="flex py-5 flex-col justify-end items-center">
        <Link href="">
          <button className="text-lg leading-6 font-medium">Sign in</button>
        </Link>
        <Link href="">
          <button className=" bg-[#FF4820] text-white rounded-md  px-4 py-2 my-5 font-medium text-lg leading-6 outline-none border-none">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default MobileMenu;
