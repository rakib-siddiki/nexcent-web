
import memberIcon from "../assets/images/business/member.svg";
import clubsIcon from "../assets/images/business/clubs.png";
import eventBookingIcon from "../assets/images/business/eventBooking.svg";
import paymentIcon from "../assets/images/business/payment.svg";
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from "react";
const BusinessReinvent = () => {
  const [visible,setVisible] = useState(false)
  return (
    <>
      <ScrollTrigger
        onEnter={() => setVisible(true)}
        onExit={() => setVisible(false)}
      >
        <section id="Feature" className=" my-12 bg-behind">
          <div className=" md:grid grid-cols-2 py-16  container">
            {/* left */}
            <div className="container text-center md:text-left">
              <h1 className="title font-semibold max-w-[408px] text-2xl w-[17rem] sm:w-full sm:text-xl md:text-2xl  lg:text-4xl mb-2 mx-auto md:mx-0 ">
                Helping a local{" "}
                <span className="text-primary">business reinvent itself</span>
              </h1>
              <p className="pera text-xs xl:text-base  text-[#18191F] mb-3 ">
                We reached here with our hard work and dedication
              </p>
            </div>
            {/* right  */}
            <div className="md:flex items-center gap-6 xl:gap-x-20">
              {/* left */}
              <div className="flex flex-col gap-y-4 xl:gap-y-6">
                <div className="flex justify-center">
                  <img src={memberIcon} alt="memberIcon" />

                  <div className="ml-4 w-44 ">
                    <h4 className="title text-2xl md:text-lg xl:text-[28px]">
                      {visible && <CountUp start={0} end={2245341}></CountUp>}
                    </h4>
                    <p className="pera md:text-xs xl:text-base">Members</p>
                  </div>
                </div>
                <div className="flex justify-center md:justify-start mb-2">
                  <img src={eventBookingIcon} alt="eventBookingIcon" />

                  <div className="ml-4 w-44 mb-3">
                    <h4 className="title text-2xl md:text-lg xl:text-[28px]">
                      {visible && <CountUp start={0} end={828867}></CountUp>}
                    </h4>
                    <p className="pera md:text-xs xl:text-base">
                      Event Bookings
                    </p>
                  </div>
                </div>
              </div>
              {/* left*/}

              {/* right  */}
              <div className="flex flex-col gap-y-4  xl:gap-y-6">
                <div className="flex justify-center md:justify-start">
                  <img src={clubsIcon} alt="eventBookingIcon" />

                  <div className="ml-4 w-44">
                    <h4 className="title text-2xl md:text-lg xl:text-[28px]">
                      {visible && <CountUp start={0} end={46328}></CountUp>}
                    </h4>
                    <p className="pera md:text-xs xl:text-base">
                      Event Bookings
                    </p>
                  </div>
                </div>
                <div className="flex justify-center ">
                  <img src={paymentIcon} alt="paymentIcon" />

                  <div className="ml-4 w-44 ">
                    <h4 className="title text-2xl md:text-lg xl:text-[28px]">
                      {visible && <CountUp start={0} end={1926436}></CountUp>}
                    </h4>
                    <p className="pera md:text-xs xl:text-base">Payments</p>
                  </div>
                </div>
              </div>
              {/* right  */}
            </div>
          </div>
        </section>
      </ScrollTrigger>
    </>
  );
};

export default BusinessReinvent;
