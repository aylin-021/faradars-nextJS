import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import SliderCategoriesSubjectMobile from "./SliderCategoriesSubject";

const fetchCategoriesSubjectMobile = async () => {
    try {
        const response = await fetch("http://localhost:3001/categoriesSubject");

        if (!response.ok) {
            throw new Error("خطا در دریافت اطلاعات");
        }

        return await response.json();
    } catch (error) {
        console.log(error.message);
        return [];
    }
};

const CategoriesSubjectMobile = async () => {
    const slider = await fetchCategoriesSubjectMobile();

    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center py-7 px-5">
                <h3 className="font-bold text-[18px]">
                    دسته‌بندی‌های منتخب
                </h3>

                <Link href="#">
                    <span className="flex flex-row items-center text-blue-500">
                        همه
                        <ChevronLeft
                            size={20}
                            strokeWidth={1.5}
                            className="text-blue-500"
                        />
                    </span>
                </Link>
            </div>

            <SliderCategoriesSubjectMobile slider={slider} />
        </div>
    );
};

export default CategoriesSubjectMobile;