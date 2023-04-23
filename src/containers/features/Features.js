import Feature from "@/components/feature/Feature";
import React from "react";

const Features = () => {
  const featuresData = [
    {
      title: "Improving end distrusts instantly ",
      text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
      title: "Become the tended active",
      text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
      title: "Message or am nothing",
      text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
      title: "Really boy law county",
      text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
    },
  ];

  const features = featuresData.map((feature, i) => {
    return <Feature key={i} title={feature.title} text={feature.text} />;
  });
  return (
    <section
      id="features"
      className="sections flex justify-between flex-col lg:flex-row  w-full"
    >
      <div className=" flex justify-start flex-1  lg:items-start text-center items-center lg:text-left mt-4  lg:mr-20 flex-col">
        <h1 className="gradient__text font-extrabold  text-2xl lg:text-4xl max-w-[426px]">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p className=" font-medium text-base leading-5 text-[#ff8a71] mt-10">
          Request Early Access to Get Started
        </p>
      </div>

      <div className="flex-[1.5] ">{features}</div>
    </section>
  );
};

export default Features;
