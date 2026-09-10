const BannerMobile = () => {
    return (
        <div>
            {/* Mobile: کمتر از 640px */}
            <div className="sm:hidden w-full h-50 bg-linear-to-r from-[#E4EEF8] via-[#DCE8F7] to-[#E1F2F9] flex flex-row justify-between items-center px-7">
                <div className="flex flex-col justify-center">
                    <div>
                        <p className="font-bold text-lg">
                            هزاران <span className="text-blue-600">آموزش‌ کاربردی</span> فرادرس،
                        </p>
                    </div>

                    <div className="text-sm mt-5">
                        <p>همین امروز شروع کن،</p>
                        <p>یاد بگیر و آینده رو بساز.</p>
                    </div>
                </div>

                <div>
                    <img
                        className="w-40 h-40"
                        src="https://faradars.org/wp-content/uploads/2026/07/20/homeherosection.svg"
                        alt=""
                    />
                </div>
            </div>

            {/* sm به بالا */}
            <div className="hidden sm:flex w-full h-70 bg-linear-to-r from-[#E4EEF8] via-[#DCE8F7] to-[#E1F2F9] flex-row justify-between items-center px-20">
                <div className="flex flex-col justify-center">
                    <div>
                        <p className="font-bold text-[30px]">
                            هزاران <span className="text-blue-600">آموزش‌ کاربردی</span> فرادرس،
                        </p>
                    </div>

                    <div className="text-lg mt-5">
                        <p>همین امروز شروع کن،</p>
                        <p>یاد بگیر و آینده رو بساز.</p>
                    </div>
                </div>

                <div>
                    <img
                        className="w-60 h-60"
                        src="https://faradars.org/wp-content/uploads/2026/07/20/homeherosection.svg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default BannerMobile;