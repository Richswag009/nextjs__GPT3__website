import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className=" py-4  mt-10 px-8 mx-0  lg:px-20 lg:mt-20 flex flex-col justify-center  bg-[#031b34] items-center ">
      <div className="w-full text-center mt-10">
        <h1 className="gradient__text font-extrabold text-3xl lg:text-6xl ">
          Do you want to step in to the future before others
        </h1>

        {/* <div> */}
        <button className=" cursor-pointer my-8 text-white  py-2 px-4 box-border text-lg border border-white">
          Request Early Access
        </button>
        {/* <button></button> */}
        {/* </div> */}
      </div>

      {/* links  */}
      <div className="text-white footer__links flex justify-between  items-start flex-wrap flex-col md:flex-row my-10">
        {/* footer image  */}
        <div>
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-[118] h-[30px] mb-4"
          />
          <p className="text-xs ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            consequuntur.
          </p>
        </div>
        {/* footer links  */}

        <div>
          <h4>links</h4>
          <p> Overons</p>
          <p> Social Media</p>
          <p> Counters</p>
          <p> Contact</p>
        </div>
        <div>
          <h4>Company</h4>
          <p> Terms & Conditions</p>
          <p> Privacy Policy</p>
          <p> Contact</p>
        </div>
        <div>
          <h4>Get In Touch</h4>
          <p> Crechterwoord k12 ok alknjkbcn</p>
          <p> 885-1234567</p>
          <p> info$payment.ng</p>
        </div>
      </div>

      <p className="text-center text-white text-xs">&copy; 2023 GPT-3</p>
    </footer>
  );
};

export default Footer;
