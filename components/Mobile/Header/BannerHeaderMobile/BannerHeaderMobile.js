"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Countdown from "./CountDownMobile";

const BannerHeaderMobile = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="relative w-full h-15 overflow-hidden">
            <img
                src="/HeaderMobile.svg"
                alt="banner"
                className="block w-full h-full object-cover"
            />

            <Countdown className="absolute left-1/5 top-3 z-100 -translate-x-1/2" />

            <button
                onClick={() => setIsVisible(false)}
                className="absolute right-0 top-0 z-20 flex h-full w-12 cursor-pointer items-center justify-center text-white transition hover:bg-black/10"
                aria-label="بستن بنر"
            >
                <X size={28} strokeWidth={2} />
            </button>
        </div>
    );
};

export default BannerHeaderMobile;