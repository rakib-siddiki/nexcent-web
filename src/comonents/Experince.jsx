import { useState } from "react";
import img from "../assets/images/experince.svg";
const Experince = () => {
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
              The unseen of spending three years at Pixelgrade
            </h2>
            <p
              onClick={handleShow}
              className={`pera cursor-pointer md:cursor-auto text-sm sm:text-base m-2 mb-4 md:mt-4 md:mb-8 mx-0 ${
                show ? `line-clamp-none` : `line-clamp-5`
              }`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="btn">Learn More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experince;
