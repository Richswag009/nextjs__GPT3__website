import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header
      className="sections grid grid-cols-1 lg:grid-cols-2 justify-center item-center  gap-x-5  "
      id="home"
    >
      {/* header content */}
      <div className="mt-10">
        <h1 className="gradient__text font font-extrabold md:text-4xl lg:text-5xl  ">
          Let&apos;s Build Something Amazing with GPT-3 OpenAi{" "}
        </h1>
        <p className=" font-normal  text-base md:text-xl lg:text-xl leading-7 text-[#81afdd] my-4">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className="flex flex-row min-h-[50px] max-w-full  my-3 rounded-md mx-0 ">
          <input
            type="email"
            className="bg-[#052d56] text-xl w-full  font-normal text-[#3d6184] px-2  outline-none border-none"
            placeholder=" Enter your email"
          />
          <button className="text-center px-4  items-center  bg-[#f05330] text-white font-bold">
            Get Started
          </button>
        </div>

        <div className="flex flex-row md:flex-col items-center w-full">
          <Image
            src="/assets/people.png"
            alt="people "
            width={100}
            className="w-[181.79px] h-[38px]"
            height={100}
          />
          <p className="mx-3 text-xs text-white text-center font-medium">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>

      {/* header image */}
      <div>
        {/* <Image/> */}
        <Image
          src="/assets/ai.png"
          alt="ai"
          width={400}
          height={400}
          className="w-full h-full"
        />
      </div>
    </header>
  );
};

export default Header;
