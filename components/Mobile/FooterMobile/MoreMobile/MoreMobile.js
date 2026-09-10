"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const MoreMobile = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div dir="rtl" className="w-full">
            <div className="p-7 font-light text-sm">
                
                <div>
                    <img
                        src="https://faradars.org/wp-content/uploads/2025/06/02/footerlogo%20(1).svg"
                        alt="فرادرس"
                        className="w-32"
                    />
                </div>

                <div className="mt-3 leading-7 text-gray-600 text-justify">
                    <p>
                        سازمان علمی و آموزشی فرادرس، بزرگ‌ترین پلتفرم آموزش آنلاین ایران است که طی بیش از یک دهه فعالیت خود، بالغ بر ۳۵,۰۰۰ ساعت آموزش آنلاین، در قالب بیش از ۱۹,۰۰۰ عنوان آموزشی علمی، مهارتی و کاربردی، منتشر کرده‌است.
                    </p>

                    {isExpanded && (
                        <div className="mt-4">
                            <p>
                                فرادرس با پایبندی به شعار «دانش در دسترس همه، همیشه و همه جا» و همکاری با بیش از ۳,۲۰۰ مدرس برجسته در زمینه‌های علمی گوناگون از جمله:
                                <a
                                    href="https://faradars.org/how-to-learn/statistics"
                                    className="text-blue-500"
                                > آمار و داده‌کاوی
                                </a>
                                ،
                                <a
                                    href="https://faradars.org/how-to-learn/artificial-intelligence"
                                    className="text-blue-500"
                                > هوش مصنوعی
                                </a>
                                ،
                                <a
                                    href="https://faradars.org/how-to-learn/programming"
                                    className="text-blue-500"
                                > برنامه‌نویسی
                                </a>
                                ،
                                <a
                                    href="https://faradars.org/how-to-learn/photoshop-computer-design-and-graphics"
                                    className="text-blue-500"
                                > طراحی و گرافیک کامپیوتری
                                </a>
                                ،
                                <a
                                    href="https://faradars.org/how-to-learn/academic-courses"
                                    className="text-blue-500"
                                > آموزش‌های دانشگاهی و تخصصی
                                </a>
                                ،
                                <a
                                    href="https://faradars.org/how-to-learn/computer-applications"
                                    className="text-blue-500"
                                > آموزش نرم‌افزارهای گوناگون
                                </a>
                                ،
                                <a
                                    href="https://faradars.org/how-to-learn/high-school-and-pre-university-courses"
                                    className="text-blue-500"
                                > دروس رسمی دبیرستان و پیش دانشگاهی
                                </a>
                                ،
                                <a
                                    href="https://faradars.org/how-to-learn/students-and-teenagers"
                                    className="text-blue-500"
                                > آموزش‌های دانش‌آموزی و نوجوانان
                                </a>
                                ،
                                <a
                                    href="https://faradars.org/how-to-learn/foreign-languages"
                                    className="text-blue-500"
                                > آموزش زبان‌های خارجی
                                </a>
                                ،
                                <a
                                    href="https://faradars.org/how-to-learn/electrical-engineering-software"
                                    className="text-blue-500"
                                > مهندسی برق، الکترونیک
                                </a>
                                و
                                <a
                                    href="https://faradars.org/how-to-learn/robotics"
                                    className="text-blue-500"
                                > رباتیک
                                </a>
                                ،
                                <a
                                    href="https://faradars.org/how-to-learn/control-engineering"
                                    className="text-blue-500"
                                > مهندسی کنترل
                                </a>
                                ،
                                <a
                                    href="https://faradars.org/how-to-learn/mechanical-engineering"
                                    className="text-blue-500"
                                > مهندسی مکانیک
                                </a>
                                ،
                                <a
                                    href="https://faradars.org/how-to-learn/chemical-engineering"
                                    className="text-blue-500"
                                > مهندسی شیمی
                                </a>
                                ،
                                <a
                                    href="https://faradars.org/how-to-learn/industrial-engineering"
                                    className="text-blue-500"
                                > مهندسی صنایع
                                </a>
                                ،
                                <a
                                    href="https://faradars.org/how-to-learn/architect-engineering"
                                    className="text-blue-500"
                                > مهندسی معماری
                                </a>
                                و
                                <a
                                    href="https://faradars.org/how-to-learn/civil-engineering"
                                    className="text-blue-500"
                                > مهندسی عمران
                                </a>
                                ، بستری را فراهم کرده‌است تا افراد با شرایط مختلف زمانی، مکانی و جسمانی، بتوانند با بهره‌گیری از آموزش‌های با کیفیت، به‌روز و مهارت‌محور، همواره به یادگیری بپردازند.
                            </p>

                            <p className="mt-4">
                                با پیوستن به جامعه‌ی میلیونی فرادرس و استفاده از آموزش‌های آن، می‌توانید مسیر یادگیری و مهارت‌آموزی را ساده‌تر و مؤثرتر تجربه کنید.
                            </p>
                        </div>
                    )}
                </div>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-5 flex items-center gap-1 text-blue-500 font-medium cursor-pointer"
                >
                    {isExpanded ? " بستن" : "مشاهده بیشتر"}

                    {isExpanded ? (
                        <ChevronUp size={20} />
                    ) : (
                        <ChevronDown size={20} />
                    )}
                </button>

                <div className="flex flex-row my-7 gap-5">
                    <a href="#" className="flex justify-center border border-gray-300 w-20 rounded-[10px]">
                        <img className="w-15" src="https://faradars.org/wp-content/uploads/2024/05/20/samandehi-svgrepo-com.svg" alt="" />
                    </a>
                    <a href="#" className="flex justify-center border border-gray-300 w-20 rounded-[10px]">
                        <img className="w-15" src="https://faradars.org/wp-content/uploads/2024/05/20/samandehi-svgrepo-com.svg" alt="" />
                    </a>
                    <a href="#" className="flex justify-center border border-gray-300 w-20 rounded-[10px]">
                        <img className="w-15" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjM2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxwYXRoIGQ9Im0xMjAgMjQzbDk0LTU0IDAtMTA5IC05NCA1NCAwIDEwOSAwIDB6IiBmaWxsPSIjODA4Mjg1Ii8+Cgk8cGF0aCBkPSJtMTIwIDI1NGwtMTAzLTYwIDAtMTE5IDEwMy02MCAxMDMgNjAgMCAxMTkgLTEwMyA2MHoiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDo1O3N0cm9rZTojMDBhZWVmIi8+Cgk8cGF0aCBkPSJtMjE0IDgwbC05NC01NCAtOTQgNTQgOTQgNTQgOTQtNTR6IiBmaWxsPSIjMDBhZWVmIi8+Cgk8cGF0aCBkPSJtMjYgODBsMCAxMDkgOTQgNTQgMC0xMDkgLTk0LTU0IDAgMHoiIGZpbGw9IiM1ODU5NWIiLz4KCTxwYXRoIGQ9Im0xMjAgMTU3bDQ3LTI3IDAtMjMgLTQ3LTI3IC00NyAyNyAwIDU0IDQ3IDI3IDQ3LTI3IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MTU7c3Ryb2tlOiNmZmYiLz4KCTx0ZXh0IHg9IjE1IiB5PSIzMDAiIGZvbnQtc2l6ZT0iMjVweCIgZm9udC1mYW1pbHk9IidCIFlla2FuJyIgc3R5bGU9ImZpbGw6IzI5Mjk1Mjtmb250LXdlaWdodDpib2xkIj7Yudi22Ygg2KfYqtit2KfYr9uM2Ycg2qnYtNmI2LHbjDwvdGV4dD4KCTx0ZXh0IHg9IjgiIHk9IjM0MyIgZm9udC1zaXplPSIyNXB4IiBmb250LWZhbWlseT0iJ0IgWWVrYW4nIiBzdHlsZT0iZmlsbDojMjkyOTUyO2ZvbnQtd2VpZ2h0OmJvbGQiPtqp2LPYqCDZiCDaqdin2LHZh9in24wg2YXYrNin2LLbjDwvdGV4dD4KPC9zdmc+" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MoreMobile;