import SearchBanner from "./SearchBanner";

const fetchBanner = async () => {
    try {
        const response = await fetch("http://localhost:3001/banner");

        if (!response.ok) {
            throw new Error("خطا در دریافت بنرها");
        }

        return await response.json();
    } catch (error) {
        console.log(error.message);
        return [];
    }
};

const Banner = async () => {
    const bannerData = await fetchBanner();

    return (
        <div className="flex flex-row-reverse justify-between lg:px-50 lg:py-7
        bg-[linear-gradient(90deg,#DAECF8_0%,#C8DEF4_20%,#C8F3F8_38%,#EAF0F9_58%,#EAF0F9_100%)]">
            <div>
                {bannerData.map((item) => (
                    <div key={item.id}>
                        <img src={item.image} alt="banner" />
                    </div>
                ))}
            </div>
            <div className="flex flex-col justify-center gap-4">
                <p className="text-[36px] font-extrabold">با هزاران  <span className="text-[#3064C0]">آموزش‌</span>  کاربردی فرادرس،</p>
                <p className="text-[#52565C] font-extrabold text-[28px]">همین امروز شروع کن،</p>
                <p className="text-[#52565C] font-extrabold text-[28px]">یاد بگیر و آینده رو قدم به قدم بساز.</p>
                <SearchBanner/>
            </div>
        </div>
    );
};

export default Banner;