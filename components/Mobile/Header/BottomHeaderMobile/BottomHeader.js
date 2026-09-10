"use client";

import { useState } from "react";
import { Search, ArrowLeft } from "lucide-react";

const popularSearches = [
    "پایتون",
    "اکسل",
    "حسابداری",
    "فتوشاپ",
    "زبان انگلیسی",
];

const BottomHeaderMobile = ({ isFixed }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [search, setSearch] = useState("");

    return (
        <>
            {/* هدر اصلی موبایل */}
            <div
                dir="rtl"
                className={`w-full shadow bg-white ${
                    isFixed
                        ? "fixed top-0 right-0 left-0 z-100"
                        : "relative"
                }`}
            >
                <div className="flex flex-row items-center gap-4 px-7 py-5 w-full">
                    {/* لوگو */}
                    <img
                        src="https://faradars.org/wp-content/uploads/2025/05/28/headerlogo.svg"
                        alt="فرادرس"
                        className="w-15 h-auto shrink-0"
                    />

                    {/* سرچ‌باکس */}
                    <div
                        onClick={() => setIsSearchOpen(true)}
                        className="relative flex-1 cursor-pointer"
                    >
                        <Search
                            size={20}
                            strokeWidth={1.8}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                        />

                        <input
                            type="text"
                            value=""
                            readOnly
                            placeholder="جستجو در فرادرس"
                            className="w-full h-11 rounded-xl bg-[#F5F7FA] pr-10 pl-3 outline-none border border-transparent text-sm text-gray-700 placeholder:text-gray-400 cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            {/* صفحه جستجو */}
            {isSearchOpen && (
                <div
                    dir="rtl"
                    className="fixed inset-0 z-101 w-full h-dvh bg-white overflow-y-auto"
                >
                    {/* هدر صفحه جستجو */}
                    <div className="flex flex-row items-center justify-between w-full h-23 px-6 border-b border-[#E5E7EB]">
                        <div className="flex flex-row items-center gap-3">
                            <ArrowLeft
                                size={25}
                                strokeWidth={1.8}
                                onClick={() => {
                                    setIsSearchOpen(false);
                                    setSearch("");
                                }}
                                className="cursor-pointer"
                            />

                            <span className="text-lg font-medium">
                                جستجو
                            </span>
                        </div>
                    </div>

                    {/* محتوای جستجو */}
                    <div className="px-6 pt-7">
                        {/* سرچ‌باکس */}
                        <div className="relative w-full">
                            <Search
                                size={24}
                                strokeWidth={1.7}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5F6368] pointer-events-none"
                            />

                            <input
                                autoFocus
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="جستجوی آموزش ..."
                                className="w-full h-13 rounded-lg border border-[#D1D5DB] pr-11 pl-4 outline-none text-base text-gray-800 placeholder:text-[#6B7280] focus:border-[#3064C0]"
                            />
                        </div>

                        {/* جستجوهای پرتکرار */}
                        <div className="mt-7">
                            <p className="text-sm text-[#374151] mb-5">
                                جستجوهای پرتکرار
                            </p>

                            <div className="flex flex-col">
                                {popularSearches?.map((item) => (
                                    <button
                                        key={item}
                                        type="button"
                                        onClick={() => setSearch(item)}
                                        className="flex flex-row items-center justify-start w-full h-15 text-right text-base text-[#111827] hover:bg-gray-200 cursor-pointer"
                                    >
                                        <Search
                                            size={24}
                                            strokeWidth={1.7}
                                            className="text-[#5F6368] ml-5"
                                        />

                                        <span>{item}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BottomHeaderMobile;
