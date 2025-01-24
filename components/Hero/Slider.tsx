import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";

export default function Slider() {
    //slider data
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
        }
    ];

    useEffect(() => {
        const slider = new Glide(".glide-05", {
            type: "slider",
            focusAt: "center",
            perView: 1,
            autoplay: 3000,
            animationDuration: 700,
            gap: 0,
        }).mount();

        // Trigger a resize event after mounting to recalculate layout
        const resizeEvent = new Event("resize");
        window.dispatchEvent(resizeEvent);

        return () => {
            slider.destroy();
        };
    }, []);

    return (
        <>
            {/* Slider with indicators outside */}
            <div className="relative w-full glide-05">
                {/* Slides */}
                <div className="overflow-hidden" data-glide-el="track">
                    <ul className="relative flex w-full h-full p-0 m-0 transition-transform duration-500 ease-in-out" style={{ listStyle: 'none' }}>
                        {slideImg.map((item) => (
                            <li key={item.id} className="w-full flex-shrink-0">
                                <Image
                                    src={item.imgSrc}
                                    className="w-full h-auto object-contain rounded-lg shadow-lg"  // Added rounded-lg and shadow
                                    alt={`image-${item.id}`}
                                    width={600}
                                    height={300}
                                    priority={true} // Ensures that the image is prioritized for loading
                                />
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
        </>
    );
}
