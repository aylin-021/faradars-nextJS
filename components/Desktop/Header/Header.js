"use client";

import { useEffect, useState } from "react";
import BannerHeader from "./BannerHeader/BannerHeader";
import BottomHeader from "./BottemHeader/BottemHeader";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 57);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="relative w-full">
            <BannerHeader isScrolled={isScrolled} />

            <div className="h-17 w-full">
                <BottomHeader isScrolled={isScrolled} />
            </div>
        </header>
    );
};

export default Header;