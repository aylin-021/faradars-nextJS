"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

const FooterFour = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div dir="rtl" className="w-full flex flex-row justify-between items-start gap-50 px-15 py-8.5">

            {/* بخش متن */}
            <div className="flex-1 min-w-0">

                {/* لوگوی فرادرس */}
                <div className="flex justify-start">
                    <img
                        src="https://faradars.org/wp-content/uploads/2025/06/02/footerlogo%20(1).svg"
                        alt="فرادرس"
                        className="w-26.25 h-auto"
                    />
                </div>

                <div className="mt-1">

                    {/* متن اول - همیشه نمایش داده می‌شود */}
                    <p className="text-[15px] leading-7 text-gray-600 text-justify">
                        سازمان علمی و آموزشی فرادرس، بزرگ‌ترین پلتفرم آموزش آنلاین ایران است
                        که طی بیش از یک دهه فعالیت خود، بالغ بر ۳۵,۰۰۰ ساعت آموزش آنلاین،
                        در قالب بیش از ۱۹,۰۰۰ عنوان آموزشی علمی، مهارتی و کاربردی،
                        منتشر کرده‌است.
                    </p>

                    {/* متن دوم - بعد از کلیک زیر متن اول باز می‌شود */}
                    {showMore && (
                        <div className="mt-6">

                            <p className="text-[15px] leading-7 text-gray-600 text-justify">

                                فرادرس با پایبندی به شعار «دانش در دسترس همه، همیشه و همه جا»
                                و همکاری با بیش از ۳,۲۰۰ مدرس برجسته در{" "}

                                <a
                                    href="https://faradars.org/explore-topics"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-600"
                                >
                                    زمینه‌های علمی گوناگون
                                </a>{" "}

                                از جمله:{" "}

                                <a
                                    href="https://faradars.org/how-to-learn/statistics"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-600"
                                >
                                    آمار و داده‌کاوی
                                </a>
                                ،{" "}

                                <a
                                    href="https://faradars.org/how-to-learn/artificial-intelligence"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-600"
                                >
                                    هوش مصنوعی
                                </a>
                                ،{" "}

                                <a
                                    href="https://faradars.org/how-to-learn/programming"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-600"
                                >
                                    برنامه‌نویسی
                                </a>
                                ،{" "}

                                <a
                                    href="https://faradars.org/how-to-learn/photoshop-computer-design-and-graphics"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-600"
                                >
                                    طراحی و گرافیک کامپیوتری
                                </a>
                                ،{" "}

                                <a
                                    href="https://faradars.org/how-to-learn/academic-courses"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-600"
                                >
                                    آموزش‌های دانشگاهی و تخصصی
                                </a>
                                ،{" "}

                                <a
                                    href="https://faradars.org/how-to-learn/computer-applications"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-600"
                                >
                                    آموزش نرم‌افزارهای گوناگون
                                </a>
                                ،{" "}

                                <a
                                    href="https://faradars.org/how-to-learn/high-school-and-pre-university-courses"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-600"
                                >
                                    دروس رسمی دبیرستان و پیش دانشگاهی
                                </a>
                                ،{" "}

                                <a
                                    href="https://faradars.org/how-to-learn/students-and-teenagers"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-600"
                                >
                                    آموزش‌های دانش‌آموزی و نوجوانان
                                </a>
                                ،{" "}

                                <a
                                    href="https://faradars.org/how-to-learn/foreign-languages"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-600"
                                >
                                    آموزش زبان‌های خارجی
                                </a>
                                ،{" "}

                                <a
                                    href="https://faradars.org/how-to-learn/electrical-engineering-software"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-600"
                                >
                                    مهندسی برق، الکترونیک
                                </a>{" "}
                                و{" "}

                                <a
                                    href="https://faradars.org/how-to-learn/robotics"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-600"
                                >
                                    رباتیک
                                </a>
                                ،{" "}

                                <a
                                    href="https://faradars.org/how-to-learn/control-engineering"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-600"
                                >
                                    مهندسی کنترل
                                </a>
                                ،{" "}

                                <a
                                    href="https://faradars.org/how-to-learn/mechanical-engineering"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-600"
                                >
                                    مهندسی مکانیک
                                </a>
                                ،{" "}

                                <a
                                    href="https://faradars.org/how-to-learn/chemical-engineering"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-600"
                                >
                                    مهندسی شیمی
                                </a>
                                ،{" "}

                                <a
                                    href="https://faradars.org/how-to-learn/industrial-engineering"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-600"
                                >
                                    مهندسی صنایع
                                </a>
                                ،{" "}

                                <a
                                    href="https://faradars.org/how-to-learn/architect-engineering"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-600"
                                >
                                    مهندسی معماری
                                </a>{" "}
                                و{" "}

                                <a
                                    href="https://faradars.org/how-to-learn/civil-engineering"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-600"
                                >
                                    مهندسی عمران
                                </a>
                                ، بستری را فراهم کرده‌است تا افراد با شرایط مختلف زمانی،
                                مکانی و جسمانی، بتوانند با بهره‌گیری از آموزش‌های با کیفیت،
                                به‌روز و مهارت‌محور، همواره به یادگیری بپردازند.

                                <br />
                                <br />

                                با پیوستن به جامعه‌ی میلیونی فرادرس و استفاده از آموزش‌های آن،
                                می‌توانید مسیر یادگیری و مهارت‌آموزی را ساده‌تر و مؤثرتر تجربه کنید.

                            </p>

                        </div>
                    )}

                    {/* دکمه */}
                    <button
                        onClick={() => setShowMore((prev) => !prev)}
                        className="mt-4 flex items-center gap-1 text-[15px] text-blue-500 cursor-pointer"
                    >
                        <span>
                            {showMore ? "بستن" : "مشاهده بیشتر"}
                        </span>

                        {showMore ? (
                            <ChevronUp size={18} strokeWidth={1.8} />
                        ) : (
                            <ChevronDown size={18} strokeWidth={1.8} />
                        )}
                    </button>

                </div>
            </div>

            {/* نمادهای اعتماد */}
            <div
                dir="ltr"
                className="w-82.5 shrink-0 flex flex-row items-start gap-3.75"
            >
                <a
                    href="#"
                    className="w-25 h-25 rounded-[10px] border border-gray-200 flex items-center justify-center"
                >
                    <img
                        src="https://faradars.org/wp-content/uploads/2024/05/20/samandehi-svgrepo-com.svg"
                        alt="ساماندهی"
                        className="w-20.5 h-20.5 object-contain"
                    />
                </a>

                <a
                    href="#"
                    className="w-25 h-25 rounded-[10px] border border-gray-200 flex items-center justify-center"
                >
                    <img
                        src="https://trustseal.enamad.ir/logo.aspx?id=82480&Code=Rsc5FN8cQujc0rvzJAs6X8K4xRNjhRCf"
                        alt="نماد اعتماد"
                        className="w-20.5 h-20.5 object-contain"
                    />
                </a>

                <a
                    href="#"
                    className="w-25 h-25 rounded-[10px] border border-gray-200 flex items-center justify-center"
                >
                    <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjM2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxwYXRoIGQ9Im0xMjAgMjQzbDk0LTU0IDAtMTA5IC05NCA1NCAwIDEwOSAwIDB6IiBmaWxsPSIjODA4Mjg1Ii8+Cgk8cGF0aCBkPSJtMTIwIDI1NGwtMTAzLTYwIDAtMTE5IDEwMy02MCAxMDMgNjAgMCAxMTkgLTEwMyA2MHoiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDo1O3N0cm9rZTojMDBhZWVmIi8+Cgk8cGF0aCBkPSJtMjE0IDgwbC05NC01NCAtOTQgNTQgOTQgNTQgOTQtNTR6IiBmaWxsPSIjMDBhZWVmIi8+Cgk8cGF0aCBkPSJtMjYgODBsMCAxMDkgOTQgNTQgMC0xMDkgLTk0LTU0IDAgMHoiIGZpbGw9IiM1ODU5NWIiLz4KPC9zdmc+"
                        alt="نشان ملی"
                        className="w-20.5 h-20.5 object-contain"
                    />
                </a>
            </div>

        </div>
    );
};

export default FooterFour;