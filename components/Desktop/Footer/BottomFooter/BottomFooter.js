import Link from "next/link";

const fetchBottomFooter = async () => {
    try {
        const response = await fetch("http://localhost:3001/footerLinks");

        if (!response.ok) {
            throw new Error("خطا در دریافت اطلاعات");
        }

        return await response.json();
    } catch (error) {
        console.log(error.message);
        return [];
    }
};

const BottomFooter = async () => {
    const BottomFooterData = await fetchBottomFooter();

    return (
        <div className="w-full">
            <hr className="w-full border-gray-200" />

            <div dir="rtl" className="w-full max-w-350 mx-auto flex flex-row items-center justify-center gap-6 font-medium text-sm">
                {BottomFooterData?.map((item) => (
                    <div className="my-7" key={item.id}>
                        <Link href={item.link}>
                            {item.title}
                        </Link>
                    </div>
                ))}
            </div>

            <hr className="w-full border-gray-200" />
            <p className="flex justify-center font-medium text-[12px] text-gray-600 my-4">تمام حقوق متعلق به «کلان دانش سهند» است.©</p>
        </div>
    );
};

export default BottomFooter;