import React from "react";
import bannerImg from "../assets/images/banner.png";

const Banner = () => {
  return (
    <>
      <section className="lg:h-screen py-6 md:py-24 lg:py-28 xl:py-40 bg-behind ">
        <div className=" container md:flex justify-between items-center">
          {/* left side  */}
          <div>
            <h1 className="max-w-[657px] font-semibold text-3xl sm:text-5xl md:text-4xl  lg:text-6xl  text-title xl:leading-[76px] md:leading-10 font-primary">
              Lessons and insights{" "}
              <span className="text-primary">from 8 years</span>
            </h1>
            <p className="sm:w-96 lg:w-auto text-paragraph font-primary mt-2">
              Where to grow your business as a photographer site or social
              media?
            </p>
            <button className="btn mt-5 xl:mt-8 active:scale-90">
              Register
            </button>
          </div>
          {/* right side  */}
          <div>
            <img src={bannerImg} alt="bannerImg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
