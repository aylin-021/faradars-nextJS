import { ArrowLeft, Download } from "lucide-react";

const DownloadAppMobile = () => {
    return (
        <div className="bg-[#F4F9FD] w-full h-66">
            <div className="p-7">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-3 items-center">
                        <Download />
                        <span>دانلود اپلیکیشن فرادرس</span>
                    </div>
                    <a href="#" className="w-12 h-12 bg-[#dbe3f0] flex justify-center items-center text-blue-500 rounded-[10px]">
                        <ArrowLeft />
                    </a>
                </div>
                <div>
                    <a
                        href="#"
                        className="flex w-full h-15 items-center justify-center bg-[#1A376A] text-white my-5 rounded-[10px]"
                    >
                        <div className="flex flex-row items-center gap-3 ">
                            <div className="flex flex-col items-center">
                                <p className="font-medium">دریافت نسخه اندروید</p>
                                <p>دانلود مستقیم</p>
                            </div>
                            <Download />
                        </div>
                    </a>
                    <a
                        href="#"
                        className="flex w-full h-15 items-center justify-center bg-[#1A376A] text-white my-5 rounded-[10px]"
                    >
                        <div className="flex flex-row items-center gap-3 ">
                            <div className="flex flex-col items-center">
                                <p className="font-medium"> دریافت نسخه اندروید از </p>
                                <p> Google Play </p>
                            </div>
                            <svg width="20" height="22" viewBox="0 0 20 22" fill="#fff" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="google play android icon" id="second"><path fillRule="evenodd" clipRule="evenodd" d="M0.518481 0.337358C0.271173 0.603156 0.129028 1.01226 0.129028 1.54385V20.4525C0.129028 20.9841 0.271173 21.3932 0.527726 21.6498L0.594754 21.7064L11.1897 11.1114V10.8734L0.585508 0.280731L0.518481 0.337358Z" fill="url(#paint0_linear_second)"></path><path fillRule="evenodd" clipRule="evenodd" d="M14.7145 14.6569L11.1805 11.1218V10.8745L14.7157 7.33939L14.7919 7.38677L18.9731 9.76278C20.1703 10.4377 20.1703 11.5494 18.9731 12.2335L14.7919 14.6096C14.7908 14.6096 14.7145 14.6569 14.7145 14.6569Z" fill="url(#paint1_linear_second)"></path><path fillRule="evenodd" clipRule="evenodd" d="M14.7907 14.6096L11.1804 10.9982L0.518433 21.6602C0.907885 22.0785 1.56314 22.1259 2.29582 21.7168L14.7907 14.6096Z" fill="url(#paint2_linear_second)"></path><path fillRule="evenodd" clipRule="evenodd" d="M14.7907 7.38794L2.29582 0.28996C1.56429 -0.128384 0.907885 -0.0717575 0.518433 0.346586L11.1793 10.9982L14.7907 7.38794Z" fill="url(#paint3_linear_second)"></path><defs><linearGradient id="paint0_linear_second" x1="10.2383" y1="1.3406" x2="-6.73296" y2="5.86262" gradientUnits="userSpaceOnUse"><stop stopColor="#00A0FF"></stop><stop offset="0.007" stopColor="#00A1FF"></stop><stop offset="0.26" stopColor="#00BEFF"></stop><stop offset="0.512" stopColor="#00D2FF"></stop><stop offset="0.76" stopColor="#00DFFF"></stop><stop offset="1" stopColor="#00E3FF"></stop></linearGradient><linearGradient id="paint1_linear_second" x1="20.531" y1="10.9987" x2="-0.161879" y2="10.9987" gradientUnits="userSpaceOnUse"><stop stopColor="#FFE000"></stop><stop offset="0.409" stopColor="#FFBD00"></stop><stop offset="0.775" stopColor="#FFA500"></stop><stop offset="1" stopColor="#FF9C00"></stop></linearGradient><linearGradient id="paint2_linear_second" x1="12.8275" y1="12.9628" x2="-0.797107" y2="35.8939" gradientUnits="userSpaceOnUse"><stop stopColor="#FF3A44"></stop><stop offset="1" stopColor="#C31162"></stop></linearGradient><linearGradient id="paint3_linear_second" x1="-2.16545" y1="-5.9526" x2="3.91291" y2="4.2888" gradientUnits="userSpaceOnUse"><stop stopColor="#32A071"></stop><stop offset="0.069" stopColor="#2DA771"></stop><stop offset="0.476" stopColor="#15CF74"></stop><stop offset="0.801" stopColor="#06E775"></stop><stop offset="1" stopColor="#00F076"></stop></linearGradient></defs></svg>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DownloadAppMobile;