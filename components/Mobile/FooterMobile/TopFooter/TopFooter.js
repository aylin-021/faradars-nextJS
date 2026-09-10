const TopFooter = () => {
    return (
        <div className="w-full h-60 bg-[#eff4f9] grid grid-cols-2 grid-rows-2 place-items-center mx-auto py-2">
            <div className="flex flex-col items-center justify-center gap-2 text-sm">
                <img
                    src="https://faradars.org/wp-content/uploads/2025/07/20/%DA%AF%D9%88%D8%A7%D9%87%DB%8C%D9%86%D8%A7%D9%85%D9%87.svg"
                    alt=""
                    className="w-14"
                />
                <span>گواهینامه پایان دوره</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 text-sm">
                <img
                    src="https://faradars.org/wp-content/uploads/2025/07/20/%D8%B3%D8%A7%D8%B9%D8%AA-%D8%A7%D9%93%D9%85%D9%88%D8%B2%D8%B4.svg"
                    alt=""
                     className="w-14"
                />
                <span>هزاران ساعت آموزش</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 text-sm">
                <img
                    src="https://faradars.org/wp-content/uploads/2025/07/20/%D8%AF%D8%B3%D8%AA%D8%B1%D8%B3%DB%8C-%D8%A7%D9%93%D9%86%DB%8C.svg"
                    alt=""
                />
                <span>دسترسی آنی و همیشگی</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 text-sm">
                <img
                    src="https://faradars.org/wp-content/uploads/2025/07/20/%D8%AA%D8%B6%D9%85%DB%8C%D9%86-%DA%A9%DB%8C%D9%81%DB%8C%D8%AA.svg"
                    alt=""
                />
                <span>تضمین کیفیت آموزش‌ها</span>
            </div>
        </div>
    );
};

export default TopFooter;