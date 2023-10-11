import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const LetUsDoTheWork = () => {
  return (
    <>
      <section className="bg-behind py-8">
        <div className=" container flex flex-col items-center">
          <h2 className="font-primary font-semibold text-3xl sm:text-5xl md:text-6xl xl:text-[64px] text-center max-w-[887px] mx-auto text-[#263238]">
            Let Nextcent do the work so you don't have to!
          </h2>
          <button className="btn mt-4 sm:mt-5 md:mt-8 inline-flex items-center gap-x-2">Get a Demo <AiOutlineArrowRight className="text-xl"/> </button>
        </div>
      </section>
    </>
  );
};

export default LetUsDoTheWork;
