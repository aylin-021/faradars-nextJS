"use client";

import { useEffect, useState } from "react";

const toPersianNumber = (number) => {
    return String(number).replace(
        /\d/g,
        (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]
    );
};

const Countdown = ({ className = "" }) => {
    const targetDate = new Date("2026-09-26T00:00:00").getTime();

    const calculateTimeLeft = () => {
        const difference = targetDate - new Date().getTime();

        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return {
            days: Math.floor(
                difference / (1000 * 60 * 60 * 24)
            ),
            hours: Math.floor(
                (difference / (1000 * 60 * 60)) % 24
            ),
            minutes: Math.floor(
                (difference / (1000 * 60)) % 60
            ),
            seconds: Math.floor(
                (difference / 1000) % 60
            ),
        };
    };

    
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div dir="rtl" className={`flex gap-2 ${className}`}>

            {/* ثانیه */}
            <div className="flex h-10 w-10 flex-col items-center justify-center rounded-lg border border-white">
                <span className="text-md font-bold text-blue-900">
                    {toPersianNumber(
                        String(timeLeft.seconds).padStart(2, "0")
                    )}
                </span>

                <span className="text-[10px] text-blue-900">
                    ثانیه
                </span>
            </div>

            {/* دقیقه */}
            <div className="flex h-10 w-10 flex-col items-center justify-center rounded-lg border border-white">
                <span className="text-md font-bold text-blue-900">
                    {toPersianNumber(
                        String(timeLeft.minutes).padStart(2, "0")
                    )}
                </span>

                <span className="text-[10px] text-blue-900">
                    دقیقه
                </span>
            </div>

            {/* ساعت */}
            <div className="flex h-10 w-10 flex-col items-center justify-center rounded-lg border border-white">
                <span className="text-md font-bold text-blue-900">
                    {toPersianNumber(
                        String(timeLeft.hours).padStart(2, "0")
                    )}
                </span>

                <span className="text-[10px] text-blue-900">
                    ساعت
                </span>
            </div>

            {/* روز */}
            <div className="flex h-10 w-10 flex-col items-center justify-center rounded-lg border border-white">
                <span className="text-md font-bold text-blue-900">
                    {toPersianNumber(
                        String(timeLeft.days).padStart(2, "0")
                    )}
                </span>

                <span className="text-[10px] text-blue-900">
                    روز
                </span>
            </div>

        </div>
    );
};

export default Countdown;