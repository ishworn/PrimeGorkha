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
    ]


    useEffect(() => {
        const slider = new Glide(".glide-05", {
            type: "slider",
            focusAt: "center",
            perView: 1,
            autoplay: 3000,
            animationDuration: 700,
            gap: 0,
            classes: {
                nav: {
                    active: "[&>*]:bg-wuiSlate-800",
                },
            },
        }).mount()

        // Trigger a resize event after mounting to recalculate layout
        const resizeEvent = new Event("resize");
        window.dispatchEvent(resizeEvent);

        return () => {
            slider.destroy()
        }
    }, [])


    return (
        <>
            {/*<!-- Component: Slider with indicators outside --> */}
            <div className="relative w-full glide-05">
                {/*    <!-- Slides --> */}
                <div className="overflow-hidden" data-glide-el="track">
                    <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                        {slideImg.map((item) => (
                            <li key={item.id}>
                                <Image
                                    src={item.imgSrc}
                                    className="w-full max-w-full max-h-full"
                                    alt="image"
                                    width={600}
                                    height={300}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                {/*    <!-- Indicators --> */}
                <div
                    className="flex items-center justify-center w-full gap-2"
                    data-glide-el="controls[nav]"
                >
                    <button
                        className="p-4 group"
                        data-glide-dir="=0"
                        aria-label="goto slide 1"
                    >
                        <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                    </button>
                    <button
                        className="p-4 group"
                        data-glide-dir="=1"
                        aria-label="goto slide 2"
                    >
                        <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                    </button>
                    <button
                        className="p-4 group"
                        data-glide-dir="=2"
                        aria-label="goto slide 3"
                    >
                        <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                    </button>
                    <button
                        className="p-4 group"
                        data-glide-dir="=3"
                        aria-label="goto slide 4"
                    >
                        <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                    </button>
                </div>
            </div>
            {/*<!-- End Slider with indicators outside --> */}
        </>
    )
}