import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const Top = () => {
    return (
        <div className="w-full max-w-full h-15 bg-[#224788] overflow-hidden">
            <div className="w-full h-full px-3 flex flex-row justify-between items-center gap-2">
                <div className="flex flex-row items-center gap-2 min-w-0">
                    <img
                        src="https://faradars.org/wp-content/uploads/2026/05/20/sub-icon.svg"
                        alt=""
                        className="w-8 h-8 shrink-0"
                    />

                    <p className="text-[12px] text-white font-bold truncate">
                        دسترسی به همه آموزش‌ها، با یک اشتراک
                    </p>
                </div>

                <Link
                    href="#"
                    className="shrink-0 flex flex-row items-center justify-center gap-1 border-2 w-25 h-10 text-white rounded-[10px]"
                >
                    <span className="text-[12px]">کلیک کنید</span>
                    <ChevronLeft className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
};

export default Top;