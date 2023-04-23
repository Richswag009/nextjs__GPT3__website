import Image from "next/image";
import React from "react";

const Possibility = () => {
  return (
    <section
      className="sections p-10  grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center"
      id="possibility"
    >
      <div className=" flex justify-center items-center">
        <Image
          src="/assets/possibility.png"
          alt="possibility"
          width={100}
          height={100}
          className="w-full h-full"
        />
      </div>

      {/* possibility content */}
      <div className=" mt-10 flex flex-col justify-center items-start lg:px-10 ">
        <h4 className=" font-medium text-base text-[#71e5ff]">
          Request Early Access to Get Started
        </h4>
        <h1 className=" py-2 lg:py-4 gradient__text font-extrabold text-2xl">
          The Posssibilities are beyond <br /> your Imagination
        </h1>
        <p className=" font-normal text-base leading-6 py-2 lg:py-4 text-[#81afdd]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          blanditiis voluptas fugit dolores. Beatae quasi sunt deleniti, natus
          et fuga.
        </p>
        <h4 className=" font-medium text-base text-[#ff8a71]">
          Request Early acess To Get Started
        </h4>
      </div>
    </section>
  );
};

export default Possibility;
