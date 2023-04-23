import React from "react";

const Feature = ({ title, text }) => {
  return (
    <div className="flex gpt3__whatgpt3-feature justify-between items-start  flex-col md:flex-row my-4 w-full  ">
      {/* feature title */}
      <div className="flex-1 flex-col justify-start items-center  mr-8  max-w-[180px]">
        <div className="gpt3__whatgpt3__line w-[38px] h-1 " />
        <h1 className="font-extrabold  text-base lg:text-lg text-white">
          {title}
        </h1>
      </div>

      {/* feature text  */}

      <div className=" flex-2 feature_text  max-w-[700px] ">
        <p className="font-medium text-base text-[#81afdd]">{text}</p>
      </div>
    </div>
  );
};

export default Feature;
