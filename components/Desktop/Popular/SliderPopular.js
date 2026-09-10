"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight, Clock3, ContactRoundIcon, ShoppingCartIcon } from "lucide-react";

import "swiper/css";

export default function SliderPopular({ slider }) {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative max-w-7xl mx-auto mt-5 mb-10">
      <Swiper
        onSwiper={(swiper) => setSwiper(swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        dir="rtl"
        slidesPerView={4}
        spaceBetween={20}
        className="w-full"
      >
        {slider?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-full border border-gray-400 rounded-[10px] p-4">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-4/3 object-cover rounded-[10px]"
                />

                <span className="absolute top-2 left-2 text-[13px] bg-red-700 text-white px-1 py-0.5 rounded">
                  {item.discount}
                </span>

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

              <div>
                <h3 className="text-[14px] font-bold mt-4 mb-8 h-10 leading-5 line-clamp-2">
                  {item.title}
                </h3>

                <div className="flex flex-row gap-3 text-[12px] items-center text-gray-500">
                  <ContactRoundIcon size={18} strokeWidth={1} />
                  {item.teacher}
                </div>

                <div className="flex flex-row gap-3 text-[12px] items-center text-gray-500 mt-2">
                  <Clock3 size={18} strokeWidth={1} />
                  {item.duration}
                </div>

                <div className="my-4 text-gray-400 max-w-75 mx-auto">
                  <hr />
                </div>
              </div>

              <div className="flex flex-row justify-between px-5 items-center">
                <div className="flex flex-row gap-3 items-center">
                  <div className="line-through decoration-gray-400 decoration-1 text-gray-400">
                    {Number(item.oldPrice).toLocaleString("fa-IR")}
                  </div>

                  <div>
                    {Number(item.price).toLocaleString("fa-IR")}
                    <span className="font-light text-[12px]"> تومان</span>
                  </div>
                </div>

                <div className="w-7 h-7 flex shrink-0 items-center justify-center rounded-[5px] hover:bg-blue-100 cursor-pointer">
                  <ShoppingCartIcon size={24} strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* فلش سمت چپ */}
      {activeIndex < (swiper?.slides.length || 0) - 4 && (
        <button
          onClick={() => swiper?.slideNext()}
          className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-100 bg-white shadow-md cursor-pointer"
        >
          <ChevronLeft
            size={26}
            strokeWidth={1.5}
            className="text-gray-700"
          />
        </button>
      )}

      {/* فلش سمت راست */}
      {activeIndex > 0 && (
        <button
          onClick={() => swiper?.slidePrev()}
          className="absolute right-0 top-1/2 z-10 flex h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-100 bg-white shadow-md cursor-pointer"
        >
          <ChevronRight
            size={26}
            strokeWidth={1.5}
            className="text-gray-700"
          />
        </button>
      )}
    </div>
  );
}