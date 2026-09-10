"use client";

import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import SliderPopular from "./SliderPopular";

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

const Popular = () => {
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
        <div>
            <div className="flex flex-row justify-between gap-2 max-w-7xl bg-[#F1F2F2] mx-auto h-15 rounded-[10px] items-center">

                <div className="flex flex-row gap-4 mr-7">
                    <h2 className="font-bold">
                        {popularData.title}
                    </h2>

                    <div>|</div>

                    {popularData.categories?.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setSelectedCategory(item.id)}
                            className={`cursor-pointer ${selectedCategory === item.id
                                    ? "text-[#2563EB] font-bold"
                                    : ""
                                }`}
                        >
                            {item.title}
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-1 text-[#2563EB] cursor-pointer ml-7">
                    <span className="text-sm font-bold">
                        دیدن همه
                    </span>

                    <ChevronLeft
                        size={25}
                        strokeWidth={1.7}
                    />
                </div>
            </div>

            <div>
                <SliderPopular slider={filteredCourses} />
            </div>
        </div>
    );
};

export default Popular;