"use client";
import { useState } from "react";

//import components
import Slider from "./Slider"

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-28 md:pt-30 xl:pb-25 xl:pt-32">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🔥 Ready to ship? Let’s make it happen!
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Welcome To  {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
  <span className="text-blue-500 mr-2">Prime</span>
  <span className="text-[#FFA500]">Gorkha</span>
</span>

              </h1>
              <p>
                No matter the size, distance, or destination—trust PrimeGorkha to deliver your parcels with care and precision. Get started now and enjoy the peace of mind that comes with reliable, efficient service!
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your tracing number"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-[#FFA500] px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-[#FF8C00] dark:bg-[#FF8C00] dark:hover:bg-[#FF7F00]"
                    >
                      Trace Product
                    </button>
                  </div>
                </form>

              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <Slider />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
