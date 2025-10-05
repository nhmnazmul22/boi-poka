import React from "react";
import Container from "../Layout/Container";
import HeroImg from "../../assets/hero-book-img.png";

const Hero = () => {
  return (
    <Container>
      <div className="hero place-items-stretch bg-gray-100 min-h-[500px] p-10 lg:px-10 xl:px-20 rounded-2xl my-5">
        <div className="flex gap-10 items-center justify-between flex-col lg:flex-row-reverse">
          <figure className="">
            <img src={HeroImg} alt="Hero image" className="max-w-sm rounded-lg" />
          </figure>
          <div className="space-y-10 max-lg:text-center">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl sm:leading-16 xl:leading-20   font-semibold max-w-[600px]">
              Books to freshen up your bookshelf
            </h1>
            <button className="btn btn-success bg-[#23BE0A] text-white sm:!py-6 sm:px-5 sm:text-base hover:scale-103 transition-transform duration-300">
              View The List
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
