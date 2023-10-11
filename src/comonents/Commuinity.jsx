import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import img1 from "../assets/images/community/image1.png";
import img2 from "../assets/images/community/image2.png";
import img3 from "../assets/images/community/image3.png";
const Commuinity = () => {
  return (
    <>
      <section className="pt-12 pb-32 xl:pb-[174px]">
        <div className="text-center container">
          <h2 className="title">Caring is the new marketing</h2>
          <p className="pera max-w-[628px] mx-auto text-sm sm:text-base sm:mt-2">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </p>
        </div>
        <div className="container md:flex justify-between md:gap-x-4 xl:gap-0">
          {/* card1  */}
          <div className="flex justify-center md:block md:w-64 lg:w-80 xl:w-full">
            <div className="relative mt-4">
              <img src={img1} alt="image" />
              <div className="md:w-52 lg:w-56 xl:w-[317px] bg-behind text-center rounded-lg absolute top-3/4 left-3.5 mobile:left-6 sm:left-6 md:left-3 lg:left-11 xl:left-6 md:h-36 xl:h-auto p-4 shadow-commuinity">
                <h5 className="pera text-xl md:text-sm xl:text-xl font-semibold">
                  Creating Streamlined Safeguarding Processes with OneRen
                </h5>
                <div className="flex justify-center items-center gap-x-2 lg:ml-3 xl:ml-0 cursor-pointer mt-4">
                  <h5 className="font-primary font-semibold text-[10px] sm:text-lg md:text-sm xl:text-xl text-primary">
                    Meet all customers
                  </h5>
                  <AiOutlineArrowRight className="text-primary text-sm sm:text-xl" />
                </div>
              </div>
            </div>
          </div>
          {/* card1  */}

          {/* card1  */}
          <div className="flex justify-center md:block md:w-64 lg:w-80 xl:w-full">
            <div className="relative mt-28 md:mt-4">
              <img src={img2} alt="image" />
              <div className="md:w-52 lg:w-56 xl:w-[317px] bg-behind text-center rounded-lg absolute top-3/4 left-3 mobile:left-6 sm:left-6 md:left-3 lg:left-11 xl:left-6 md:h-36 xl:h-auto p-4 shadow-commuinity">
                <h5 className="pera text-xl md:text-sm xl:text-xl font-semibold">
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </h5>
                <div className="flex justify-center items-center gap-x-2 lg:ml-3 xl:ml-0 cursor-pointer mt-4">
                  <h5 className="font-primary font-semibold text-[10px] sm:text-lg md:text-sm xl:text-xl text-primary">
                    Meet all customers
                  </h5>
                  <AiOutlineArrowRight className="text-primary text-sm sm:text-xl" />
                </div>
              </div>
            </div>
          </div>
          {/* card1  */}

          {/* card1  */}
          <div className="flex justify-center md:block md:w-64 lg:w-80 xl:w-full">
            <div className="relative mt-28 md:mt-4">
              <img src={img3} alt="image" />
              <div className="md:w-52 lg:w-56 xl:w-[317px] bg-behind text-center rounded-lg absolute top-3/4 left-3 mobile:left-6 sm:left-6 md:left-3 lg:left-11 xl:left-6 md:h-36 xl:h-auto p-4 shadow-commuinity">
                <h5 className="pera text-xl md:text-sm xl:text-xl font-semibold">
                  Revamping the Membership Model with Triathlon Australia
                </h5>
                <div className="flex justify-center items-center gap-x-2 lg:ml-3 xl:ml-0 cursor-pointer mt-4">
                  <h5 className="font-primary font-semibold text-[10px] sm:text-lg md:text-sm xl:text-xl text-primary">
                    Meet all customers
                  </h5>
                  <AiOutlineArrowRight className="text-primary text-sm sm:text-xl" />
                </div>
              </div>
            </div>
          </div>
          {/* card1  */}
        </div>
      </section>
    </>
  );
};

export default Commuinity;
