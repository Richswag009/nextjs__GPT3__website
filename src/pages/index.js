import React from "react";
import Article from "@/components/article/Article";
import Brand from "@/components/brand/Brand";
import Cta from "@/components/cta/Cta";
// import Feature from "@/Components/feature/Feature";
import Navbar from "@/components/navbar/Navbar";
import {
  Header,
  WhatGPT3,
  Features,
  Possibility,
  Blog,
  Footer,
} from "@/containers";
const Home = () => {
  return (
    <div className=" bg-blue">
      <div className=" gradient__bg  ">
        <Navbar />
        <Header />
      </div>

      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
