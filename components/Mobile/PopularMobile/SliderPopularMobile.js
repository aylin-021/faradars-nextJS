"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
Clock3,
ContactRoundIcon,
ShoppingCartIcon,
} from "lucide-react";

import "swiper/css";

export default function SliderPopularMobile({ slider }) {
const swiperRef = useRef(null);


useEffect(() => {
    const handleResize = () => {
        if (swiperRef.current) {
            swiperRef.current.update();
            swiperRef.current.updateSize();
            swiperRef.current.updateSlides();
            swiperRef.current.updateProgress();
            swiperRef.current.updateSlidesClasses();
        }
    };

    window.addEventListener("resize", handleResize);

    const timer = setTimeout(() => {
        handleResize();
    }, 100);

    return () => {
        window.removeEventListener("resize", handleResize);
        clearTimeout(timer);
    };
}, []);

if (!Array.isArray(slider) || slider.length === 0) {
    return null;
}

return (
    <div
        dir="rtl"
        className="relative w-full mt-5 mb-10 px-3 overflow-hidden"
    >
        <Swiper
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
            }}
            dir="rtl"
            slidesPerView={2.25}
            spaceBetween={8}
            observer={true}
            observeParents={true}
            resizeObserver={true}
            watchOverflow={true}
            breakpoints={{
                480: {
                    slidesPerView: 1.8,
                    spaceBetween: 8,
                },
                640: {
                    slidesPerView: 2.5,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3.5,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 4.5,
                    spaceBetween: 12,
                },
                1280: {
                    slidesPerView: 5.5,
                    spaceBetween: 12,
                },
            }}
            className="w-full"
        >
            {slider.map((item) => (
                <SwiperSlide
                    key={item.id}
                    className="h-auto"
                >
                    <div className="w-full min-h-90 border border-gray-300 rounded-[10px] p-3 sm:p-4 flex flex-col">
                        <div className="relative shrink-0">
                            <img
                                src={item.image}
                                alt={item.title || ""}
                                className="w-full aspect-4/3 object-cover rounded-[10px]"
                            />

                            {item.discount && (
                                <span className="absolute top-2 left-2 text-[12px] sm:text-[13px] bg-red-700 text-white px-1.5 py-0.5 rounded">
                                    {item.discount}
                                </span>
                            )}

                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-gray-700 absolute top-2 right-2 bg-gray-200 rounded"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4.277 2.56975C4.85633 2.15475 5.6239 2 6.42391 2H10.065C10.8915 2 11.6649 2.16606 12.241 2.60717C12.8387 3.06481 13.1544 3.76425 13.1544 4.66838L13.1574 12.9916C13.1574 13.1663 13.1117 13.3361 13.0271 13.4857C12.7543 13.9698 12.141 14.1394 11.6581 13.8676L11.6575 13.8673L8.26065 11.9485L4.82999 13.8716C4.67996 13.9555 4.51034 14 4.33786 14C3.78241 14 3.33243 13.5496 3.33325 12.9944V4.56316C3.33325 3.67602 3.6725 3.00279 4.277 2.56975Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>

                        <div className="flex-1">
                            <h3 className="text-[13px] sm:text-[14px] font-bold mt-4 mb-4 min-h-10 leading-5 line-clamp-2">
                                {item.title}
                            </h3>

                            <div className="flex flex-row gap-2 sm:gap-3 text-[11px] sm:text-[12px] items-center text-gray-500">
                                <ContactRoundIcon
                                    size={17}
                                    strokeWidth={1}
                                    className="shrink-0"
                                />
                                <span className="truncate">
                                    {item.teacher}
                                </span>
                            </div>

                            <div className="flex flex-row gap-2 sm:gap-3 text-[11px] sm:text-[12px] items-center text-gray-500 mt-2">
                                <Clock3
                                    size={17}
                                    strokeWidth={1}
                                    className="shrink-0"
                                />
                                <span className="truncate">
                                    {item.duration}
                                </span>
                            </div>

                            <div className="my-4 text-gray-400 w-full">
                                <hr />
                            </div>
                        </div>

                        <div className="flex flex-row justify-between items-center gap-2 mt-auto">
                            <div className="flex flex-row gap-2 sm:gap-3 items-center min-w-0">
                                {item.oldPrice && (
                                    <div className="line-through decoration-gray-400 decoration-1 text-gray-400 text-[10px] sm:text-[12px] whitespace-nowrap">
                                        {Number(
                                            item.oldPrice
                                        ).toLocaleString("fa-IR")}
                                    </div>
                                )}

                                <div className="text-[11px] sm:text-sm whitespace-nowrap">
                                    {Number(
                                        item.price || 0
                                    ).toLocaleString("fa-IR")}

                                    <span className="font-light text-[10px] sm:text-[12px]">
                                        {" "}
                                        تومان
                                    </span>
                                </div>
                            </div>

                            <div className="w-7 h-7 flex shrink-0 items-center justify-center rounded-[5px] hover:bg-blue-100 cursor-pointer">
                                <ShoppingCartIcon
                                    size={22}
                                    strokeWidth={1.5}
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
);


}
