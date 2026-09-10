"use client";

import { useEffect, useRef, useState } from "react";
import { Search as SearchIcon, X } from "lucide-react";

const SearchHeader = () => {
    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState([]);
    const [showSearch, setShowSearch] = useState(false);
    const [loading, setLoading] = useState(false);

    const searchRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target)
            ) {
                setShowSearch(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const searchText = search.trim().toLowerCase();

        if (!searchText) {
            setCategories([]);
            setLoading(false);
            return;
        }

        const controller = new AbortController();

        const timer = setTimeout(async () => {
            try {
                setLoading(true);

                const response = await fetch(
                    "http://localhost:3001/categories",
                    {
                        signal: controller.signal,
                    }
                );

                if (!response.ok) {
                    throw new Error("خطا در دریافت دسته‌بندی‌ها");
                }

                const data = await response.json();

                if (!Array.isArray(data)) {
                    throw new Error("ساختار اطلاعات دسته‌بندی‌ها صحیح نیست");
                }

                const filteredCategories = data.filter((category) => {
                    const titleMatch =
                        typeof category.title === "string" &&
                        category.title
                            .toLowerCase()
                            .includes(searchText);

                    const subcategoryMatch =
                        Array.isArray(category.subcategories) &&
                        category.subcategories.some(
                            (subcategory) =>
                                typeof subcategory === "string" &&
                                subcategory
                                    .toLowerCase()
                                    .includes(searchText)
                        );

                    return titleMatch || subcategoryMatch;
                });

                setCategories(filteredCategories);
            } catch (error) {
                if (error.name !== "AbortError") {
                    console.error("Search error:", error);
                    setCategories([]);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }, 300);

        return () => {
            clearTimeout(timer);
            controller.abort();
        };
    }, [search]);

    const clearSearch = () => {
        setSearch("");
        setCategories([]);
        setShowSearch(true);
    };

    const handlePopularSearch = (item) => {
        setSearch(item);
        setShowSearch(true);
    };

    return (
        <div
            ref={searchRef}
            dir="rtl"
            className="relative w-120 max-w-[calc(100vw-32px)]"
        >
            <div className="flex h-14 items-center rounded-lg border border-gray-300 bg-white px-4">
                <SearchIcon
                    size={25}
                    className="text-gray-500"
                />

                <input
                    type="text"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setShowSearch(true);
                    }}
                    onFocus={() => setShowSearch(true)}
                    placeholder="جستجوی آموزش ..."
                    className="mr-3 w-full bg-transparent text-[16px] outline-none"
                />

                {search && (
                    <button
                        type="button"
                        onClick={clearSearch}
                    >
                        <X
                            size={20}
                            className="text-gray-500"
                        />
                    </button>
                )}
            </div>

            {showSearch && (
                <div
                    dir="rtl"
                    className="absolute right-0 top-17.5 z-100 w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-lg"
                >
                    {!search ? (
                        <>
                            <h3 className="mb-5 text-right text-[16px] font-bold text-gray-700">
                                جستجوهای پرطرفدار
                            </h3>

                            <div className="flex flex-col gap-5">
                                {[
                                    "پایتون",
                                    "اکسل",
                                    "حسابداری",
                                    "فتوشاپ",
                                    "زبان انگلیسی",
                                ].map((item) => (
                                    <button
                                        type="button"
                                        key={item}
                                        onClick={() =>
                                            handlePopularSearch(item)
                                        }
                                        className="flex items-center flex-row-reverse justify-end gap-3 text-right text-[17px] text-gray-700"
                                    >
                                        <span>{item}</span>

                                        <SearchIcon
                                            size={23}
                                            className="text-gray-600"
                                        />
                                    </button>
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            {loading && (
                                <p className="py-5 text-center text-gray-500">
                                    در حال جستجو...
                                </p>
                            )}

                            {!loading && categories.length === 0 && (
                                <p className="py-5 text-center text-gray-500">
                                    نتیجه‌ای پیدا نشد
                                </p>
                            )}

                            {!loading && categories.length > 0 && (
                                <div className="flex flex-col">
                                    {categories.map((category) => {
                                        const searchText = search
                                            .trim()
                                            .toLowerCase();

                                        const matchedSubcategories =
                                            Array.isArray(
                                                category.subcategories
                                            )
                                                ? category.subcategories.filter(
                                                    (subcategory) =>
                                                        typeof subcategory ===
                                                        "string" &&
                                                        subcategory
                                                            .toLowerCase()
                                                            .includes(
                                                                searchText
                                                            )
                                                )
                                                : [];

                                        return (
                                            <div
                                                key={category.id}
                                                className="border-b border-gray-100 py-4 last:border-b-0"
                                            >
                                                <div className="flex items-center flex-row-reverse justify-end gap-3">
                                                    <span className="text-right text-[16px] font-bold text-gray-800">
                                                        {category.title}
                                                    </span>

                                                    <SearchIcon
                                                        size={20}
                                                        className="text-gray-500"
                                                    />
                                                </div>

                                                {matchedSubcategories.length >
                                                    0 && (
                                                        <div className="mt-3 flex flex-wrap justify-start gap-2">
                                                            {matchedSubcategories.map(
                                                                (
                                                                    subcategory
                                                                ) => (
                                                                    <span
                                                                        key={
                                                                            subcategory
                                                                        }
                                                                        className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-600"
                                                                    >
                                                                        {
                                                                            subcategory
                                                                        }
                                                                    </span>
                                                                )
                                                            )}
                                                        </div>
                                                    )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchHeader;
