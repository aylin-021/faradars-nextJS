"use client";

import { useEffect, useState } from "react";
import { Grid2X2 } from "lucide-react";

import CategoryList from "./CategoryList";
import SubCategoryList from "./SubCategoryList";

const MegaMenu = () => {
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("http://localhost:3001/categories");

                if (!response.ok) {
                    throw new Error("خطا در دریافت دسته‌بندی‌ها");
                }

                const data = await response.json();

                setCategories(data);

                // اولین دسته به صورت پیش‌فرض فعال باشد
                if (data.length > 0) {
                    setActiveCategory(data[0]);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryHover = (category) => {
        setActiveCategory(category);
    };

    return (
        <div
            dir="rtl"
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* دکمه دسته‌بندی‌ها */}
            <div className="flex cursor-pointer items-center gap-2 py-4 text-sm text-gray-700">
                <Grid2X2 size={20} strokeWidth={1.8} />

                <span>دسته‌بندی‌ها</span>
            </div>

            {/* Mega Menu */}
            {isOpen && (
                <div className="absolute right-0 top-full z-100 w-175 overflow-hidden rounded-b-lg bg-white shadow-xl">
                    <div className="flex h-125">

                        {/* ستون دسته‌بندی‌ها */}
                        <CategoryList
                            categories={categories}
                            activeCategory={activeCategory}
                            onCategoryHover={handleCategoryHover}
                        />

                        {/* ستون زیر دسته‌ها */}
                        <SubCategoryList activeCategory={activeCategory} />

                    </div>
                </div>
            )}
        </div>
    );
};

export default MegaMenu;