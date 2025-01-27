"use client";

import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import SingleBrand from "./SingleBrand"; // Import the SingleBrand component
import brandData from "./brandData"; // Import the brandData

const CarouselLogo = () => {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 2000, // 3 seconds delay for autoplay
      animationDuration: 500,
      animationTimingFunc: "linear",
      perView: 3, // Shows 3 brands by default
      gap: 20, // Adjust the gap between images
      rewind: true, // Loop back to the first slide
      breakpoints: {
        1024: {
          perView: 2, // Shows 2 brands on tablets or smaller desktops
          gap: 15, // Adjust gap for smaller screens
        },
        640: {
          perView: 2, // Shows 1 brand on mobile devices
          gap: 5, // Smaller gap for mobile
        },
      },
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();

    return () => {
      slider.destroy(); // Clean up on component unmount
    };
  }, []);

  return (
    <div className="glide-09 relative w-full my-5    overflow-hidden ">
      {/* <!-- Track for the carousel --> */}
      <div data-glide-el="track">
        <ul className="flex items-center justify-center space-x-4 md:space-x-6 lg:space-x-8  overflow-hidden">
          {brandData.map((brand) => (
            <li key={brand.id} className="w-[120px] md:w-[150px] lg:w-[200px] mx-auto">
              <SingleBrand brand={brand} /> {/* Render each brand */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarouselLogo;
