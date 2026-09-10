import { ChevronLeft, Check } from "lucide-react";

const AllAccess = () => {
    return (
        <div dir="rtl" className="relative w-full max-w-7xl h-70 mx-auto my-30">

            {/* پس زمینه اصلی بنر */}
            <div className="absolute inset-0 overflow-hidden rounded-[28px] bg-linear-to-b from-[#F4F8FF] via-[#F7FAFC] to-[#F8FAFC]">

                <img
                    className="absolute top-0 right-0"
                    src="https://faradars.org/wp-content/uploads/2026/05/18/right-bg.svg"
                    alt=""
                />

            </div>

            {/* محتوای اصلی */}
            <div className="relative z-10 h-full flex flex-row items-center justify-between px-20">

                {/* ================= متن سمت راست ================= */}
                <div className="flex flex-col items-start">

                    <h3 className="text-2xl font-bold">
                        دسترسی به همه آموزش‌ها، با یک اشتراک
                    </h3>

                    <div className="text-base mt-3">
                        <p>
                            با یک‌بار فعال‌سازی اشتراک، به تمام آموزش‌های فرادرس دسترسی
                        </p>

                        <p className="mt-2">
                            کامل داشته باش.
                        </p>
                    </div>

                    <button className="w-60 h-13 rounded-[10px] bg-linear-to-r from-[#91CCFF] via-[#B7C9F8] to-[#F3BCEB] flex items-center justify-center gap-4 text-base mt-10 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        فعال‌سازی اشتراک
                        <ChevronLeft size={24} strokeWidth={1.8} />
                    </button>

                </div>


                {/* ================= کارت سمت چپ ================= */}
                <div className="relative h-80 w-70 ml-25">

                    {/* لایه آبی پشتی */}
                    <div className="absolute top-0 -left-2.5 w-70 h-80 bg-[#3064C0] rounded-[25px] rotate-[-9deg]">
                    </div>


                    {/* کارت اصلی */}
                    <div className="relative z-10 w-full h-full rounded-[25px] bg-linear-to-r from-[#EEDFF2] to-[#B8D9F5]">

                        {/* تصویر */}
                        <div className="absolute -top-20 left-20 z-10">
                            <img src="https://faradars.org/wp-content/uploads/2026/05/18/6a0b09d7eb786-books.svg" alt="" />
                        </div>

                        {/* عنوان کارت */}
                        <div className="flex justify-center pt-25">

                            <h4 className="text-xl font-bold text-[#28599E]">
                                اشتراک فرادرس
                            </h4>

                        </div>


                        {/* لیست امکانات */}
                        <div className="absolute bottom-4 left-3 right-3 bg-white rounded-[15px] px-4 py-3">

                            <div className="flex items-center justify-right text-sm mb-4">
                                <Check
                                    size={23}
                                    className="text-[#77A8EC]"
                                    strokeWidth={1.8}
                                />
                                <span className="pr-5">
                                    دسترسی به +۱۹,۰۰۰ آموزش
                                </span>

                            </div>


                            <div className="flex items-center justify-between text-sm mb-4">

                                <Check
                                    size={23}
                                    className="text-[#77A8EC]"
                                    strokeWidth={1.8}
                                />

                                <span>
                                    +۴,۰۰۰ آموزش دارای گواهینامه
                                </span>

                            </div>


                            <div className="flex items-center justify-right text-sm">
                                <Check
                                    size={23}
                                    className="text-[#77A8EC]"
                                    strokeWidth={1.8}
                                />
                                <span className="pr-5">
                                    +۲۰۰,۰۰۰ سوال همراه با پاسخ
                                </span>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0">
                    <img src="https://faradars.org/wp-content/uploads/2026/05/18/left-bg.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AllAccess;