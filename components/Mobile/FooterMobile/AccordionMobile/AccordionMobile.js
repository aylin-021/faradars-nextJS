"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import {
    Laptop,
    Palette,
    Calculator,
    Languages,
    GraduationCap,
    Layers3,
} from "lucide-react";

const items = [
    {
        value: "item-1",
        title: "علوم کامپیوتر",
        icon: Laptop,
        children: [
            "داده‌کاوی و یادگیری ماشین",
            "لینوکس",
            "پایتون (Python)",
            "هوش مصنوعی",
            "شبکه‌های کامپیوتری",
        ],
    },
    {
        value: "item-2",
        title: "طراحی و گرافیک",
        icon: Palette,
        children: [
            "فتوشاپ",
            "ایلاستریتور",
            "طراحی رابط کاربری",
        ],
    },
    {
        value: "item-3",
        title: "اقتصاد و حسابداری",
        icon: Calculator,
        children: [
            "حسابداری",
            "اقتصاد",
            "مدیریت مالی",
        ],
    },
    {
        value: "item-4",
        title: "زبان خارجی",
        icon: Languages,
        children: [
            "زبان انگلیسی",
            "آمادگی آزمون زبان خارجی",
            "زبان آلمانی",
            "زبان فرانسه",
            "زبان چینی",
        ],
    },
    {
        value: "item-5",
        title: "دانشگاهی",
        icon: GraduationCap,
        children: [
            "مهندسی معماری",
            "مهندسی عمران",
            "مهندسی مکانیک",
            "مهندسی و علوم کامپیوتر",
            "مهندسی برق",
        ],
    },
    {
        value: "item-6",
        title: "سایر دسته‌ها",
        icon: Layers3,
        children: [
            "مدیریت",
            "علوم انسانی",
            "مهارت‌های فردی",
            "هنر",
        ],
    },
];

export default function AccordionMobile() {
    return (
        <div dir="rtl" className="w-full px-6">
            <Accordion className="w-full">
                {items.map((item) => {
                    const Icon = item.icon;

                    return (
                        <AccordionItem
                            key={item.value}
                            value={item.value}
                            className="border-b-0"
                        >
                            <AccordionTrigger className="py-5 text-right hover:no-underline cursor-pointer">
                                <div className="flex w-full items-center gap-3 ">
                                    <Icon className="size-5 shrink-0" />

                                    <span className="text-md font-semibold">
                                        {item.title}
                                    </span>
                                </div>
                            </AccordionTrigger>

                            <AccordionContent className="pb-5">
                                <div className="flex flex-col items-start gap-5 pr-10">
                                    {item.children.map((child) => (
                                        <span
                                            key={child}
                                            className="text-sm text-gray-700"
                                        >
                                            {child}
                                        </span>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </div>
    );
}