import { Book, ShoppingCart, User } from "lucide-react";

const Left = () => {
    return (
        <div className="flex flex-row items-center justify-center gap-15">
            <div className="hidden lg:flex flex-row items-center justify-center gap-2">
                <a
                    href="#"
                    className="rounded-[10px] bg-linear-to-r from-[#E3A5DC] via-[#B4A4E1] to-[#5DA1E8] p-0.5"
                >
                    <div className="flex flex-row justify-center items-center gap-2 bg-[#F0F8FF] px-3 py-2 rounded-lg cursor-pointer">
                        <img
                            className="w-5 h-5"
                            src="https://faradars.org/next/imgs/how-to-learn-subscription.svg"
                            alt=""
                        />
                        <span className="text-[12px] text-[#224788] font-bold">
                            اشتراک فرادرس
                        </span>
                    </div>
                </a>

                <a href="#" className="flex flex-row items-center gap-1 cursor-pointer">
                    <Book />
                    <span className="text-[14px]">آموزش‌های من</span>
                </a>
            </div>

            <div className="flex flex-row items-center gap-5">
                <User className="cursor-pointer" />
                <div className="w-px h-8 bg-[#E5E5E5]"></div>
                <ShoppingCart className="cursor-pointer" />
            </div>
        </div>
    );
};

export default Left;