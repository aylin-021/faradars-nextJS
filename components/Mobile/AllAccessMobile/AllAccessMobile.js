import { ChevronLeft, Check } from "lucide-react";

import Link from "next/link";

const AllAccessMobile = () => {
    return (
        <div dir="rtl" className="w-full px-5 mb-10">
            <div className="relative flex items-center justify-center w-full h-60 overflow-hidden rounded-[28px] bg-linear-to-b from-[#F4F8FF] via-[#F7FAFC] to-[#F8FAFC]">

                <img
                    className="absolute top-0 right-0"
                    src="https://faradars.org/wp-content/uploads/2026/05/18/right-bg.svg"
                    alt=""
                />

                <div className="relative z-10 flex flex-col justify-right text-right px-7">
                    <p className="font-bold"> دسترسی به همه آموزش‌ها، با یک اشتراک </p>
                    <p className="text-sm mt-3">با یک‌بار فعال‌سازی اشتراک، به تمام آموزش‌های فرادرس دسترسی کامل داشته باش.</p>
                    <Link href="#">
                    <button className="btn capitalize bg-linear-to-r from-[#9CD0FF] via-[#C4C5F8] to-[#F3BFEA] mt-10 rounded-[10px]">
                        فعال‌سازی اشتراک
                        <ChevronLeft/>
                    </button>
                    </Link>
                </div>

                <img className="absolute bottom-0 left-0" src="https://faradars.org/wp-content/uploads/2026/05/18/left-bg.svg" alt="" />
            </div>
        </div>
    );
};

export default AllAccessMobile;