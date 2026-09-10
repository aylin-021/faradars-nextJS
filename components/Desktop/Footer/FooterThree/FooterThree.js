import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const FooterThree = () => {
    return ( 
        <div className="bg-[#F8FAFC] h-30 w-full flex flex-row justify-between items-center px-15">
            <div className=" flex flex-col gap-3">
                <p className="font-bold text-lg">دسترسی به ۱۹,۰۰۰ آموزش فرادرس همه با یک اشتراک</p>
                <p className="text-gray-600">با فعال کردن اشتراک فرادرس به صورت یکجا به همه آموزش‌ها دسترسی داشته باشید.</p>
            </div>
            <div>
                <Link href="#">
                <button className="flex flex-row items-center w-50 h-12 rounded-[10px] bg-linear-to-r from-[#9BD0FF] via-[#C1C5FC] to-[#FCCDF0] 
                transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_25px_rgba(150,170,230,0.35)] justify-center gap-2 text-base cursor-pointer">
                     <span>فعال‌سازی اشتراک</span>
                    <ChevronLeft size={26} strokeWidth={2} />
                </button>
                </Link>
            </div>
        </div>
     );
}
 
export default FooterThree;