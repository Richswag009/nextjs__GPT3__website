import React from "react";

const Cta = () => {
  return (
    <section className="rounded-md flex justify-between flex-col lg:flex-row items-center mx-8 lg:mx-20 p-4 lg:p-8 gradient__bar ">
      {/* content */}
      <div>
        <p className="font-medium text-xs text-[#0e0e0e]">
          Request Access to get Started
        </p>
        <h3 className="text-black font-extrabold  text-lg">
          Register Today & start exploring the endless possibilities
        </h3>
      </div>

      {/* button */}
      <div className="flex justify-center items-center my-4 lg:my-0 lg:ml-8 ">
        <button className="bg-black text-white rounded-full font-bold text-base lg:text-lg px-3 py-2 cursor-pointer border-none outline-none min-w-[150px]">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Cta;
