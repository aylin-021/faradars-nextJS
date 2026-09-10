"use client";

import { useEffect, useState } from "react";

import {
    Cpu,
    HardHat,
    Zap,
    Factory,
    BrainCircuit,
    Orbit,
    FlaskConical,
    Drill,
    Sprout,
    Settings,
    ChartNoAxesColumnIncreasing,
    Layers3,
    Calculator,
    Anvil,
    FlaskRound,
    Atom,
    Pickaxe,
    ChartNoAxesCombined,
    FileSpreadsheet,
    Utensils,
    Landmark,
    Scale,
    BriefcaseBusiness,
    CircleDollarSign,
    Brain,
    Globe2,
    Trees,
    Waypoints,
    Building2,
    ChevronDown
} from "lucide-react";

const fetchUniversityMajors = async () => {
    try {
        const response = await fetch(
            "http://localhost:3001/universityFields"
        );

        if (!response.ok) {
            throw new Error("خطا در دریافت اطلاعات");
        }

        return await response.json();
    } catch (error) {
        console.log(error.message);
        return [];
    }
};

const UniversityMobile = () => {
    const [universityFields, setUniversityFields] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const getUniversityMajors = async () => {
            const data = await fetchUniversityMajors();
            setUniversityFields(data);
        };

        getUniversityMajors();
    }, []);

    const iconMap = {
        Cpu,
        HardHat,
        Zap,
        Factory,
        BrainCircuit,
        Orbit,
        FlaskConical,
        Drill,
        Sprout,
        Settings,
        ChartNoAxesColumnIncreasing,
        Layers3,
        Calculator,
        Anvil,
        FlaskRound,
        Atom,
        Pickaxe,
        ChartNoAxesCombined,
        FileSpreadsheet,
        Utensils,
        Landmark,
        Scale,
        BriefcaseBusiness,
        CircleDollarSign,
        Brain,
        Globe2,
        Trees,
        Waypoints,
        Building2
    };

    const visibleFields = showAll
        ? universityFields
        : universityFields.slice(0, 15);

    return (
        <div
            dir="rtl"
            className="w-full max-w-7xl mx-auto mt-4 px-5"
        >
            <h3 className="font-bold text-[18px] ">رشته‌های دانشگاهی</h3>
            <p className="my-4 text-[14px]">تمام آموزش‌های مرتبط با رشته تحصیلی‌ خود را یکجا پیدا کنید.</p>
            {/* لیست رشته‌ها */}
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">

                {visibleFields?.map((item) => {
                    const Icon = iconMap[item.icon];

                    return (
                        <div
                            key={item.id}
                            className="group h-12 border border-gray-200 rounded-full flex items-center gap-4 justify-right px-2 cursor-pointer hover:bg-blue-100 duration-300 ease-in-out"
                        >
                            {/* آیکن */}
                            <div className="w-9 h-9 shrink-0 rounded-full bg-[#EDF3FC] flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
                                {Icon && (
                                    <Icon
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-blue-500 group-hover:text-white transition-colors duration-300"
                                    />
                                )}
                            </div>

                            {/* عنوان */}
                            <span className="md:text-base text-[14px]">
                                {item.title}
                            </span>
                        </div>
                    );
                })}

            </div>

            {/* مشاهده همه */}
            {universityFields.length > 15 && (
                <div className="flex">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="my-5 mr-auto flex items-center gap-2 text-blue-600 text-sm cursor-pointer"
                    >

                        <span>
                            {showAll ? "بستن" : "مشاهده همه"}
                        </span>

                        <ChevronDown
                            size={20}
                            strokeWidth={1.5}
                            className={`transition-transform duration-300 ${
                                showAll ? "rotate-180" : ""
                            }`}
                        />

                    </button>
                </div>
            )}
        </div>
    );
};

export default UniversityMobile;