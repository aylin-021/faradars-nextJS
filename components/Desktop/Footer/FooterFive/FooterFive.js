import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";

const FooterFive = () => {
    return (
        <div className="bg-[#F9FBFD] h-25 flex flex-row justify-between px-15 py-8.5 w-full">
            <div className="flex flex-row items-center gap-2">
                <Download size={24} strokeWidth={2} />
                <span className="font-bold">دانلود اپلیکیشن فرادرس</span>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <button className="btn btn-capitalize bg-[#1A376A] w-50 h-15 text-white flex items-center justify-center gap-3">
                    <p className="font-medium">
                        دریافت نسخه اندروید{" "}
                        <span className="font-bold">دانلود مستقیم</span>
                    </p>
                    <Download size={40} strokeWidth={2} />
                </button>

                <button className="btn btn-capitalize bg-[#1A376A] w-50 h-15 text-white flex items-center justify-center gap-3">
                    <p className="font-medium">
                        دریافت نسخه اندروید از{" "}
                        <span className="font-bold">Google Play</span>
                    </p>

                    <svg
                        width="40"
                        height="22"
                        viewBox="0 0 20 22"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-label="google play android icon"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.518481 0.337358C0.271173 0.603156 0.129028 1.01226 0.129028 1.54385V20.4525C0.129028 20.9841 0.271173 21.3932 0.527726 21.6498L0.594754 21.7064L11.1897 11.1114V10.8734L0.585508 0.280731L0.518481 0.337358Z"
                            fill="url(#paint0_linear_first)"
                        />

                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.7145 14.6569L11.1805 11.1218V10.8745L14.7157 7.33939L14.7919 7.38677L18.9731 9.76278C20.1703 10.4377 20.1703 11.5494 18.9731 12.2335L14.7919 14.6096C14.7908 14.6096 14.7145 14.6569 14.7145 14.6569Z"
                            fill="url(#paint1_linear_first)"
                        />

                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.7907 14.6096L11.1804 10.9982L0.518433 21.6602C0.907885 22.0785 1.56314 22.1259 2.29582 21.7168L14.7907 14.6096Z"
                            fill="url(#paint2_linear_first)"
                        />

                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.7907 7.38794L2.29582 0.28996C1.56429 -0.128384 0.907885 -0.0717575 0.518433 0.346586L11.1793 10.9982L14.7907 7.38794Z"
                            fill="url(#paint3_linear_first)"
                        />

                        <defs>
                            <linearGradient
                                id="paint0_linear_first"
                                x1="10.2383"
                                y1="1.3406"
                                x2="-6.73296"
                                y2="5.86262"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#00A0FF" />
                                <stop offset="0.007" stopColor="#00A1FF" />
                                <stop offset="0.26" stopColor="#00BEFF" />
                                <stop offset="0.512" stopColor="#00D2FF" />
                                <stop offset="0.76" stopColor="#00DFFF" />
                                <stop offset="1" stopColor="#00E3FF" />
                            </linearGradient>

                            <linearGradient
                                id="paint1_linear_first"
                                x1="20.531"
                                y1="10.9987"
                                x2="-0.161879"
                                y2="10.9987"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#FFE000" />
                                <stop offset="0.409" stopColor="#FFBD00" />
                                <stop offset="0.775" stopColor="#FFA500" />
                                <stop offset="1" stopColor="#FF9C00" />
                            </linearGradient>

                            <linearGradient
                                id="paint2_linear_first"
                                x1="12.8275"
                                y1="12.9628"
                                x2="-0.797107"
                                y2="35.8939"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#FF3A44" />
                                <stop offset="1" stopColor="#C31162" />
                            </linearGradient>

                            <linearGradient
                                id="paint3_linear_first"
                                x1="-2.16545"
                                y1="-5.9526"
                                x2="3.91291"
                                y2="4.2888"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#32A071" />
                                <stop offset="0.069" stopColor="#2DA771" />
                                <stop offset="0.476" stopColor="#15CF74" />
                                <stop offset="0.801" stopColor="#06E775" />
                                <stop offset="1" stopColor="#00F076" />
                            </linearGradient>
                        </defs>
                    </svg>
                </button>

                <Link href="/download">
                    <div className="bg-[#EAF0F9] w-15 h-15 rounded-[7px] flex items-center justify-center my-5">
                        <ArrowLeft
                            size={24}
                            strokeWidth={2}
                            className="text-[#3064C0]"
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default FooterFive;