import logo from "../assets/images/clients-logo/Logo1.svg";
import logo2 from "../assets/images/clients-logo/Logo2.svg";
import logo3 from "../assets/images/clients-logo/Logo3.svg";
import logo4 from "../assets/images/clients-logo/Logo4.svg";
import logo5 from "../assets/images/clients-logo/Logo5.svg";
import logo6 from "../assets/images/clients-logo/Logo6.svg";
const Client = () => {
  return (
    <>
      <section id="Service" className="py-10">
        {/* title  */}
        <div className="text-center container">
          <h1 className="title">Our Clients</h1>
          <p className="pera text-sm sm:text-base  mt-2">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        {/* clients logo  */}
        <div className=" container grid grid-cols-3 md:flex flex-wrap justify-between items-center mt-4 ">
          <img src={logo} alt="logo" />
          <img src={logo2} alt="logo" />
          <img src={logo3} alt="logo" />
          <img src={logo4} alt="logo" />
          <img src={logo5} alt="logo" />
          <img src={logo6} alt="logo" />
        </div>
      </section>
    </>
  );
};

export default Client;
