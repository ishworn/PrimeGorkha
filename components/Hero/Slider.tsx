"use client";

import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

const Slider = () => {
    // Slider data
    const slideImg = [
        {
            id: 1,
            imgSrc: "/images/cargo/img1.png",
        },
        {
            id: 2,
            imgSrc: "/images/cargo/img2.png",
        },
        {
            id: 3,
            imgSrc: "/images/cargo/img3.png",
        },
        {
            id: 4,
            imgSrc: "/images/cargo/img4.png",
        },
    ];

    useEffect(() => {
        const slider = new Glide(".glide-05", {
            type: "slider",
            focusAt: "center",
            perView: 1,
            autoplay: 5000, // Slider changes every 5 seconds
            animationDuration: 1000, // Animation duration is 1 second
            gap: 0,
            rewind: true, // Enable looping (repeating)
        }).mount();

        //resieze
        window.dispatchEvent(new Event("resize"));

        return () => {
            slider.destroy();
        };
    }, []);

    return (
        <div className="relative w-full glide-05">
            {/* Slides */}
            <div className="overflow-hidden" data-glide-el="track">
                <ul className="relative flex w-full h-96 p-0 m-0 transition-transform duration-500 ease-in-out" style={{ listStyle: 'none' }}>
                    {slideImg.map((item) => (
                        <li key={item.id} className="w-full flex-shrink-0">
                            <div className="w-full h-full flex items-center justify-center">
                                <img
                                    src={item.imgSrc}
                                    className="w-full h-full object-contain rounded-lg shadow-lg"
                                    alt={`image-${item.id}`}
                                    loading="lazy"
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Indicators */}
            <div className="flex items-center justify-center w-full gap-2 mt-4" data-glide-el="controls[nav]">
                {slideImg.map((item, index) => (
                    <button
                        key={item.id}
                        className="p-4 group"
                        data-glide-dir={`=${index}`}
                        aria-label={`goto slide ${index + 1}`}
                    >
                        <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Slider;