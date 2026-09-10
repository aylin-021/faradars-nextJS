import {
    Laptop,
    Palette,
    Calculator,
    Languages,
    GraduationCap,
    Layers3,
    ArrowLeft
} from "lucide-react";

import Link from "next/link";

const icons = {
    Laptop,
    Palette,
    Calculator,
    Languages,
    GraduationCap,
    Layers3
};

const fetchFooterTwo = async () => {
    try {
        const response = await fetch("http://localhost:3001/footerTwo");

        if (!response.ok) {
            throw new Error("خطا در دریافت اطلاعات");
        }

        return await response.json();
    } catch (error) {
        console.log(error.message);
        return [];
    }
};

const FooterTwo = async () => {
    const FooterTwoData = await fetchFooterTwo();

    return (
        <div className="grid grid-cols-6 items-start my-7">
            {FooterTwoData?.map((items) => {
                const Icon = icons[items.icon];

                return (
                    <div key={items.id} className="justify-self-center">

                        <div className="flex items-center gap-2 font-bold">
                            {Icon && (
                                <Icon
                                    size={20}
                                    strokeWidth={1.5}
                                />
                            )}
                            {items.title}
                        </div>

                        <div className="flex flex-col gap-2 my-5">
                            {items.children?.map((child) => (
                                <div
                                    className="text-sm"
                                    key={child.id}
                                >
                                    {child.title}
                                </div>
                            ))}
                        </div>

                        <Link href={items.moreLink}>
                            <div className="flex items-center gap-3 text-gray-600 cursor-pointer">
                                <span className="text-sm">
                                    موارد بیشتر
                                </span>

                                <ArrowLeft
                                    size={19}
                                    strokeWidth={1.4}
                                />
                            </div>
                        </Link>

                    </div>
                );
            })}
        </div>
    );
};

export default FooterTwo;