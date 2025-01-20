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
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🔥 Ready to ship? Let’s make it happen! 
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
              Welcome to Our Courier Services {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                PrimeGorkha
                </span>
              </h1>
              <p>
              Whether it's a time-sensitive package or an international shipment, we’ve got you covered with real-time tracking, professional handling, and guaranteed delivery on time, every time. We make shipping easy, convenient, and hassle-free. No matter the size, distance, or destination—trust PrimeGorkha to deliver your parcels with care and precision. Get started now and enjoy the peace of mind that comes with reliable, efficient service!
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
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Trace Product
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white">
                
                </p>
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
