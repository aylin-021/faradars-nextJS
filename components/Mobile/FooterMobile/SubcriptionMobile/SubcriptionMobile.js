import { ChevronLeft } from "lucide-react";

const SubcriptionMobile = () => {
    return (
        <div className="w-full bg-[#F4F9FD] h-50">
            <div className="flex flex-col h-full font-bold justify-center items-center md:hidden">
                <p>دسترسی به ۱۹,۰۰۰ آموزش فرادرس</p>
                <p>همه با یک اشتراک</p>
                <button className="w-3/4 h-12 font-medium rounded-xl bg-linear-to-r from-[#9BD0FF] via-[#C5C9FF] to-[#F8CCF0] m-7 flex flex-row justify-center items-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                    فعال‌سازی اشتراک
                    <ChevronLeft size={24} />
                </button>
            </div>
            <div className="md:flex hidden flex-row h-full font-bold justify-center items-center ">
                <div className="flex flex-col w-3/5">
                    <p>دسترسی به ۱۹,۰۰۰ آموزش فرادرس همه با یک اشتراک</p>
                    <p className="font-medium mt-5">با فعال کردن اشتراک فرادرس به صورت یکجا به همه آموزش‌ها دسترسی داشته باشید.</p>
                </div>
                <button className="w-1/4 h-12 font-medium rounded-xl bg-linear-to-r from-[#9BD0FF] via-[#C5C9FF] to-[#F8CCF0] m-7 flex flex-row justify-center items-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                    فعال‌سازی اشتراک
                    <ChevronLeft size={24} />
                </button>
            </div>
        </div>
    );
}

export default SubcriptionMobile;