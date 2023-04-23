import Feature from "@/components/feature/Feature";
import React from "react";

const WhatGPT3 = () => {
  return (
    <section
      className=" gpt3__whatgp3  mx-8 lg:mx-20 gpt3__whatgpt3"
      id="wgpt3"
    >
      {/* feature */}
      <div className="gpt3__whatgp3-feature">
        <Feature
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor featureconvinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          title="What is GPT-3"
        />
        <div className="gpt3__whatgp3-heading flex justify-between flex-col lg:flex-row lg:items-center">
          <h1 className=" leading-10 gradient__text font-extrabold text-3xl lg:text-4xl  my-8">
            The possibilities are beyond <br /> your imagination
          </h1>
          <p className=" cursor-pointer text-base leading-8 text-left text-[#ff8a71]">
            Explore the libary
          </p>
        </div>
        {/*  */}
        <div className="gpt3__whatgpt3-container flex  md:flex-nowrap flex-col md:flex-row">
          <Feature
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
            title="Chatbots"
          />
          <Feature
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
            title="Knowledgebase"
          />
          <Feature
            title="Education"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatGPT3;
