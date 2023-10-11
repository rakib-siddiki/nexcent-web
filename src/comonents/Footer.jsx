import React from "react";
import logo from '../assets/images/footer/footerlogo.svg'
import instagram from '../assets/images/footer/instagram.svg'
import SocialIcons from "../assets/images/footer/SocialIcons.svg";
import twitter from "../assets/images/footer/twitter.svg";
import youtube from "../assets/images/footer/youtube.svg";
import sendIcon from "../assets/images/footer/send.svg";
const Footer = () => {
  return (
    <>
      <section className="bg-[#263238]">
        <div className="container py-8 sm:py-10 md:py-16 md:flex md:justify-between xl:justify-start">
          <div className="xl:w-2/4">
            <img src={logo} alt="" />
            <div className=" my-3 sm:my-5 xl:my-10">
              <p className="footer-text">Copyright © 2020 Nexcent ltd.</p>
              <p className="footer-text mt-2">All rights reserved</p>
            </div>
            <div className="flex items-center gap-x-4 mb-3">
              <img src={instagram} alt="instagram" />
              <img src={SocialIcons} alt="SocialIcons" />
              <img src={twitter} alt="twitter" />
              <img src={youtube} alt="youtube" />
            </div>
          </div>
          {/* ========= */}
          <div className="xl:w-3/5 ">
            <div className="md:flex lg:gap-x-24 md:gap-x-4 grid grid-cols-2 md:place-items-start gap-y-3 md:gap-y-0 ">
              <div>
                <h3 className="font-primary font-semibold text-xl text-white mb-3 md:mb-6">
                  Company
                </h3>
                <ul className="footer-text flex flex-col gap-y-3">
                  <li>About us</li>
                  <li>Blog</li>
                  <li>Contact us</li>
                  <li>Pricing</li>
                  <li>Testimonials</li>
                </ul>
              </div>
              {/* ======== */}
              <div>
                <h3 className="font-primary font-semibold text-xl text-white mb-3 md:mb-6">
                  Support
                </h3>
                <ul className="footer-text flex flex-col gap-y-3">
                  <li>Help center</li>
                  <li>Terms of service</li>
                  <li>Legal</li>
                  <li>Privacy policy</li>
                  <li>Status</li>
                </ul>
              </div>

              <div>
                <h3 className="font-primary font-semibold text-xl text-white mb-3 md:mb-6">
                  Stay up to date
                </h3>
                <div className="relative w-[255px] ">
                  <input
                    type="text"
                    placeholder="Your email address"
                    className="py-[10px] pl-3 pr-12 rounded-lg text-white bg-[#515b60] font-primary text-sm outline-none"
                  />
                  <img
                    className="absolute top-3 right-3 cursor-pointer"
                    src={sendIcon}
                    alt="sendIcon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
