// "use client";

// import { useState } from "react";
// import { X } from "lucide-react";
// import Countdown from "./CountDown";

// const BannerHeader = () => {
//     const [isVisible, setIsVisible] = useState(true);

//     if (!isVisible) return null;

//     return (
//         <div className="relative h-14.25 w-full">
//             <img className="absolute inset-0 z-0 h-full w-full object-cover" src="https://faradars.org/wp-content/uploads/2026/08/24/1.svg" alt="" />

//             <Countdown className="absolute left-70 top-1 z-10" />

//             <button onClick={() => setIsVisible(false)} className="absolute cursor-pointer right-0 top-0 z-20 flex h-full w-12 items-center justify-center text-white transition hover:bg-black/10" aria-label="بستن بنر">
//                 <X size={28} strokeWidth={2} />
//             </button>
//         </div>
//     );
// };

// export default BannerHeader;




"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Countdown from "./CountDown";

const BannerHeader = ({ isScrolled }) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className={`relative h-14.25 w-full overflow-hidden transition-opacity duration-200 ${isScrolled ? "opacity-0" : "opacity-100"}`}>
            <img className="absolute inset-0 z-0 h-full w-full object-cover" src="https://faradars.org/wp-content/uploads/2026/08/24/1.svg" alt="" />

            <Countdown className="absolute left-70 top-1 z-10" />

            <button onClick={() => setIsVisible(false)} className="absolute right-0 top-0 z-20 flex h-full w-12 cursor-pointer items-center justify-center text-white transition hover:bg-black/10" aria-label="بستن بنر">
                <X size={28} strokeWidth={2} />
            </button>
        </div>
    );
};

export default BannerHeader;