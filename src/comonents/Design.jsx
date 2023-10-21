import  { useState } from "react";
import img from "../assets/images/design/sideImg.svg";
const Design = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      <section className="xl:py-10">
        <div className="grid grid-cols-2 container lg:items-center">
          <div>
            <img src={img} alt="Image" />
          </div>
          <div>
            <h2 className="title font-bold md:font-semibold text-sm sm:text-xl md:text-2xl max-w-[600px] mb-3">
              How to design your site footer like we did
            </h2>
            <p
              onClick={handleShow}
              className={`pera cursor-pointer md:cursor-auto text-sm sm:text-base m-2 mb-4 md:mt-4 md:mb-8 xl:line-clamp-none mx-0 ${
                show ? `line-clamp-none` : `line-clamp-5`
              }`}
            >
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <button className="btn">Learn More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Design;
