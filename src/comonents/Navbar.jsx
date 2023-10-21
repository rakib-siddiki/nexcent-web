import { useEffect, useState } from "react";
import logo from "../assets/images/Logo.png";
import smNavLogo from "../assets/images/smNavLogo.svg";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [responsiveView, SetResponsiveView] = useState(false);
  useEffect(() => {
    window.innerWidth <= 768 && SetResponsiveView(true);
  }, [responsiveView]);
  return (
    <>
      <nav id="home" className="md:bg-behind py-7 md:pt-5 relative bg-primary">
        <div className="container">
          <div className="md:flex lg:justify-between items-center">
            <div className="fixed z-50 w-full  md:w-auto top-0 px-3 py-4 md:p-0 left-0 md:static backdrop-blur-sm bg-primary/90 md:backdrop-blur-none md:bg-transparent">
              <div className="cursor-pointer">
                <img className="hidden md:block" src={logo} alt="logo" />
                <img className="md:hidden" src={smNavLogo} alt="smNavLogo" />
              </div>
              <div
                onClick={() => setShow((prev) => !prev)}
                className="md:hidden absolute md:static top-5 right-3 text-xl cursor-pointer"
              >
                {show ? (
                  <FaWindowClose className="text-white text-2xl" />
                ) : (
                  <FaBars className="text-white text-2xl" />
                )}
              </div>
            </div>
            <div
              className={` w-full  md:static md:flex items-center justify-between lg:gap-x-20 fixed z-50
               backdrop-blur-sm bg-primary/90  md:bg-transparent  duration-500 ease-in-out py-5 mt-8 md:m-0
             ${show ? `right-0` : `-right-full`} `}
            >
              <div className=" md:block">
                <ul className=" flex flex-col md:flex-row md:justify-end md:items-center gap-y-1 gap-x-2 lg:gap-8 xl:gap-[50px] font-primary md:font-normal text-white md:text-[#18191F] text-xl md:text-base font-medium capitalize ml-16 xl:ml-52 cursor-pointer">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={responsiveView ? -10 : 50}
                    duration={500}
                    onClick={() => setShow((prev) => !prev)}
                    className="md:hover:text-primary duration-300 underline-effect"
                  >
                    Home
                  </Link>
                  <Link
                    to="Service"
                    spy={true}
                    smooth={true}
                    offset={responsiveView ? -50 : 20}
                    duration={500}
                    onClick={() => setShow((prev) => !prev)}
                    className="md:hover:text-primary duration-300 underline-effect"
                  >
                    Service
                  </Link>
                  <Link
                    to="Feature"
                    spy={true}
                    smooth={true}
                    offset={responsiveView ? -30 : 10}
                    duration={500}
                    onClick={() => setShow((prev) => !prev)}
                    className="md:hover:text-primary duration-300 underline-effect"
                  >
                    Feature
                  </Link>
                  <Link
                    to="Product"
                    spy={true}
                    smooth={true}
                    offset={responsiveView ? -50 : 0}
                    duration={500}
                    onClick={() => setShow((prev) => !prev)}
                    className="md:hover:text-primary duration-300 underline-effect"
                  >
                    Product
                  </Link>
                  <Link
                    to="Testimonial"
                    spy={true}
                    smooth={true}
                    offset={responsiveView ? -30 : 20}
                    duration={500}
                    onClick={() => setShow((prev) => !prev)}
                    className="md:hover:text-primary duration-300 underline-effect after:hover:w-32 md:after:hover:w-24 "
                  >
                    Testimonial
                  </Link>
                  <Link
                    to="FAQ"
                    spy={true}
                    smooth={true}
                    offset={responsiveView ? -60 : 0}
                    duration={500}
                    onClick={() => setShow((prev) => !prev)}
                    className="md:hover:text-primary duration-300 underline-effect hover:after:w-10"
                  >
                    FAQ
                  </Link>
                </ul>
              </div>
              <div className="md:block ml-16 md:ml-0 mt-3 md:mt-0">
                <button className="py-1.5 px-3 md:py-2 lg:py-2.5 lg:px-5 border border-solid text-primary bg-white outline-transparent md:bg-transparent md:border-primary md:text-primary md:hover:text-white md:hover:bg-primary duration-300  rounded-md font-primary active:scale-90">
                  login
                </button>
                <button className=" py-1.5 px-3 ml-3  lg:py-2.5 lg:px-5 md:py-2 md:px-3 border border-solid text-primary bg-white outline-transparent md:bg-transparent md:border-primary md:text-primary md:hover:text-white md:hover:bg-primary duration-300  rounded-md font-primary active:scale-90">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* nav open & close button  */}
      </nav>
    </>
  );
};

export default Navbar;
