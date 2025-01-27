"use client"

import React, { useState } from 'react';
import styles from "./hero.module.css"

const HeroSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className={`overflow-hidden pb-20 pt-28 md:pt-30 xl:pb-25 xl:pt-32 relative h-screen ${styles.background}`}>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video/heroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay and Content */}
      <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-center ltr:sm:text-left rtl:sm:text-right mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 w-2/3">
          <h4 className="mb-4.5 text-lg font-medium text-white">
            🔥 Ready to ship? Let’s make it happen!
          </h4>
          <h1 className="mb-5 pr-16 text-3xl font-bold text-white xl:text-hero">
            Welcome To{" "}
            <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
              <span className="text-blue-500 mr-2">Prime</span>
              <span className="text-[#FFA500]">Gurkha</span>
            </span>
          </h1>
          <p className="text-white">
            No matter the size, distance, or destination—trust PrimeGorkha
            to deliver your parcels with care and precision. Get started now
            and enjoy the peace of mind that comes with reliable, efficient
            service!
          </p>

          <div className="mt-10 flex justify-center items-center">
            <form onSubmit={handleSubmit} className="flex flex-wrap gap-5">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Enter your tracking number"
                aria-label="tracking number input"
                className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
              />
              <button
                aria-label="get started button"
                className="flex rounded-full bg-[#FFA500] px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-[#FF8C00] dark:bg-[#FF8C00] dark:hover:bg-[#FF7F00]"
              >
                Trace Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;