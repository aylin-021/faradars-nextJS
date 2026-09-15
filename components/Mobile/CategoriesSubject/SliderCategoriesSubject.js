"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";

import { Grid } from "swiper/modules";

const SliderCategoriesSubjectMobile = ({ slider }) => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const columns = isDesktop ? 8 : 5;

    return (
        <div dir="rtl" className="w-full px-3">
            <Swiper
                key={columns}
                slidesPerView={columns}
                grid={{
                    rows: 2,
                    fill: "row",
                }}
                spaceBetween={5}
                modules={[Grid]}
                className="w-full"
            >
                {slider?.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="flex flex-col items-center justify-start gap-2 py-2">
                            <div className="flex h-15 w-15 items-center justify-center rounded-full bg-[#F3F3F3]">
                                <img
                                    src={item.image}
                                    alt={item.title || ""}
                                    className="h-12 w-12 object-contain"
                                />
                            </div>

                            <span className="text-center text-[10px] font-bold leading-5 md:text-[13px]">
                                {item.title}
                            </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SliderCategoriesSubjectMobile;