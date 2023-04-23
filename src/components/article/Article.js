import Image from "next/image";
import React from "react";

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="w-full h-full bg-[#031b34]">
      {/* article image */}
      <div className="bg-[#031b34]">
        <Image
          src={imgUrl}
          alt="blog name"
          width={200}
          height={100}
          className="w-full h-full "
        />
      </div>

      {/* blog contetnt */}
      <div className="flex flex-col justify-between py-4 px-2 lg:px-6">
        <div className="text-white">
          <p className="font-bold text-xs">{date}</p>
          <h3 className="font-extrabold  text-base lg:text-2xl">{title}</h3>

          <p className="cursor-pointer mt-20 ">Read Full Article...</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
