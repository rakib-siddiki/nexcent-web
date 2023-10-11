import logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <>
      <section className="bg-behind pt-5">
        <div className="container">
          <div className="md:flex justify-between items-center ">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div>
              <ul className="md:flex justify-end items-center gap-x-2 lg:gap-8 xl:gap-[50px] font-primary md:font-normal text-[#18191F] capitalize xl:ml-52">
                <li className="hover:text-primary duration-300">Home</li>
                <li className="hover:text-primary duration-300 ">Service</li>
                <li className="hover:text-primary duration-300 ">Feature</li>
                <li className="hover:text-primary duration-300 ">Product</li>
                <li className="hover:text-primary duration-300 ">
                  Testimonial
                </li>
                <li className="hover:text-primary duration-300 ">FAQ</li>
              </ul>
            </div>
            <div>
              <button className="py-1.5 px-3 md:py-2 lg:py-2.5 lg:px-5 border border-solid border-primary text-primary hover:text-white duration-300 hover:bg-primary rounded-md font-primary active:scale-90">
                login
              </button>
              <button className=" py-1.5 px-3 lg:py-2.5 lg:px-5 md:py-2 md:px-3 border border-solid border-primary text-primary hover:text-white duration-300 hover:bg-primary rounded-md font-primary ml-3.5 active:scale-90">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
