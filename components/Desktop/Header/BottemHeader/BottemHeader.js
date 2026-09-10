"use client";

import Left from "./Left/Left";
import Right from "./Right/Right";

const BottomHeader = ({ isScrolled }) => {
    return (
        <div className={`w-full bg-white z-100 ${isScrolled ? "fixed right-0 top-0" : "relative"}`}>
        <div className="flex w-full max-w-[1920px] mx-auto items-center justify-between gap-2 px-4 py-3 md:gap-3 md:px-5 lg:px-16 shadow-[-44px_16px_56px_-17px_rgba(8,11,14,0.06)]">
                <div>
                    <Right />
                </div>

                <div>
                    <Left />
                </div>
            </div>
        </div>
    );
};

export default BottomHeader;