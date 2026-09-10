"use client";

import { useEffect, useRef, useState } from "react";

import BannerHeaderMobile from "./BannerHeaderMobile/BannerHeaderMobile";
import BottomHeaderMobile from "./BottomHeaderMobile/BottomHeader";

const HeaderMobile = () => {
    const [isFixed, setIsFixed] = useState(false);

    const bottomHeaderRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!bottomHeaderRef.current) return;

            const headerTop =
                bottomHeaderRef.current.getBoundingClientRect().top;

            setIsFixed(headerTop <= 0);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="w-full">
            {/* هدر بالایی */}
            <BannerHeaderMobile />

            {/* محل اصلی Bottom Header */}
            <div
                ref={bottomHeaderRef}
                className={isFixed ? "h-21" : "h-auto"}
            >
                <BottomHeaderMobile isFixed={isFixed} />
            </div>
        </div>
    );
};

export default HeaderMobile;
