"use client";

import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import SliderPopularMobile from "./SliderPopularMobile";

const fetchPopular = async () => {
    try {
        const response = await fetch("http://localhost:3001/popularTrainings");

        if (!response.ok) {
            throw new Error("خطا در دریافت اطلاعات");
        }

        return await response.json();
    } catch (error) {
        console.log(error.message);
        return null;
    }
};

const PopularMobile = () => {
    const [popularData, setPopularData] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(1);

    useEffect(() => {
        const getPopular = async () => {
            const data = await fetchPopular();
            setPopularData(data);
        };

        getPopular();
    }, []);

    if (!popularData) {
        return null;
    }

    const filteredCourses =
        selectedCategory === 1
            ? popularData.courses
            : popularData.courses?.filter(
                (item) => item.categoryId === selectedCategory
            );

    return (
        <div dir="rtl" className="w-full">

            {/* عنوان */}
            <div className="flex flex-row items-center justify-between mb-4 my-10 pr-5">

                <h2 className="font-bold text-lg">
                    {popularData.title}
                </h2>

                <div className="flex items-center gap-1 text-[#2563EB] cursor-pointer ml-5 shrink-0">
                    <span className="text-sm font-bold">
                        دیدن همه
                    </span>

                    <ChevronLeft
                        size={25}
                        strokeWidth={1.7}
                    />
                </div>

            </div>

            {/* دسته بندی ها */}
            <div className="w-full bg-[#F1F2F2] rounded-[10px] h-15 mx-5">

                <div
                    className="w-full h-full overflow-x-auto overflow-y-hidden touch-pan-x scrollbar-none"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >

                    <div className="flex flex-row items-center gap-2 text-sm h-full w-max px-4 whitespace-nowrap">

                        {popularData.categories?.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setSelectedCategory(item.id)}
                                className={`shrink-0 h-11 px-2 rounded-lg transition-all duration-200 cursor-pointer ${
                                    selectedCategory === item.id
                                        ? "bg-white text-[#222] shadow-sm"
                                        : "text-[#222]"
                                }`}
                            >
                                {item.title}
                            </button>
                        ))}

                    </div>

                </div>

            </div>

            {/* دوره ها */}
            <div className="mt-4">
                <SliderPopularMobile slider={filteredCourses} />
            </div>

        </div>
    );
};

export default PopularMobile;