import { useState } from "react";
import productImg from "../assets/images/customerReview/product.png";
import { AiOutlineArrowRight } from "react-icons/ai";

import logo from "../assets/images/clients-logo/Logo1.svg";
import logo2 from "../assets/images/clients-logo/Logo2.svg";
import logo3 from "../assets/images/clients-logo/Logo3.svg";
import logo4 from "../assets/images/clients-logo/Logo4.svg";
import logo5 from "../assets/images/clients-logo/Logo5.svg";
import logo6 from "../assets/images/clients-logo/Logo6.svg";

const CustomersReview = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section id="Product" className="bg-behind pt-12 mt-6 md:mt-0">
        <div className="container md:flex justify-between md:items-center">
          <div>
            <img
              className="w-[250px] md:w-full"
              src={productImg}
              alt="productImg"
            />
          </div>
          <div className="xl:ml-[78px]">
            <p
              onClick={() => setShow((prev) => !prev)}
              className={`pera text-sm  sm:w-96 md:w-96 lg:w-[500px] xl:w-[748px] cursor-pointer  ${
                show ? `line-clamp-none` : `line-clamp-6`
              }`}
            >
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h4 className="font-primary font-semibold text-primary text-lg md:text-xl mt-4">
              Tim Smith
            </h4>
            <p className="pera text-sm md:text-base">
              British Dragon Boat Racing Association
            </p>
            <div className=" container px-0 grid grid-cols-3 md:flex flex-wrap justify-between items-center mt-4 ">
              <img src={logo} alt="logo" />
              <img src={logo2} alt="logo" />
              <img src={logo3} alt="logo" />
              <img src={logo4} alt="logo" />
              <img src={logo5} alt="logo" />
              <img src={logo6} alt="logo" />
              <div className="hidden sm:flex items-center gap-x-2 lg:ml-3 xl:ml-0 cursor-pointer">
                <h3 className="font-primary font-semibold text-[10px] sm:text-lg xl:text-xl text-primary">
                  Meet all customers
                </h3>
                <AiOutlineArrowRight className="text-primary text-sm sm:text-xl" />
              </div>
            </div>
            {/* === */}
            <div className="flex items-center gap-x-2 lg:ml-3 xl:ml-0 cursor-pointer sm:hidden">
              <h3 className="font-primary font-semibold  sm:text-lg xl:text-xl text-primary">
                Meet all customers
              </h3>
              <AiOutlineArrowRight className="text-primary text-sm sm:text-xl" />
            </div>
            {/* === */}
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomersReview;
