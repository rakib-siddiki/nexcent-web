import React from "react";
import mamberIcon from "../assets/images/manage/mamber.svg";
import nationalIcon from "../assets/images/manage/national.svg";
import clublIcon from "../assets/images/manage/club.svg";

const Manage = () => {
  return (
    <>
      <section className="pb-10">
        {/* title  */}
        <div className="text-center mb-2 container">
          <h1 className="max-w-[552px] mx-auto title">
            Manage your entire community in a single system
          </h1>
          <p className="= pera mt-2">Who is Nextcent suitable for?</p>
        </div>
        {/* card  */}
        <div className="container flex justify-center md:block">
          <div className="md:flex md:justify-between shrink-0 ">
            <div className="max-w-[300px] text-center rounded-lg py-6 px-8  shadow-cardShadow mb-6 duration-500 ease-linear hover:bg-[#E8F5E9] focus:bg-[#E8F5E9] mt-3 md:portrait:scale-90">
              <img className="mx-auto" src={mamberIcon} alt="mamberIcon" />
              <h2 className="font-primary font-bold text-[28px] text-title">
                Membership Organisations
              </h2>
              <p className="max-w-[250px] mx-auto font-primary text-sm text-paragraph">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
            <div className="max-w-[300px] text-center rounded-lg py-6 px-8  shadow-cardShadow  mb-6 duration-500 ease-linear hover:bg-[#E8F5E9] focus:bg-[#E8F5E9] mt-3  md:portrait:scale-90">
              <img className="mx-auto" src={nationalIcon} alt="mamberIcon" />
              <h2 className="font-primary font-bold text-[28px] text-title">
                National Associations
              </h2>
              <p className="max-w-[250px] mx-auto font-primary text-sm text-paragraph ">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
            <div className="max-w-[300px] text-center rounded-lg py-6 px-8  shadow-cardShadow mb-6 duration-500 ease-linear hover:bg-[#E8F5E9] focus:bg-[#E8F5E9] mt-3  md:portrait:scale-90">
              <img className="mx-auto" src={clublIcon} alt="mamberIcon" />
              <h2 className="font-primary font-bold text-[28px] text-title">
                Clubs And Groups
              </h2>
              <p className="max-w-[250px] mx-auto font-primary text-sm text-paragraph">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Manage;
