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

const FooterLinks = async () => {
    const BottomFooterData = await fetchBottomFooter();

    return (
        <div className="w-full pb-35">
            <hr className="w-full border-gray-200" />

            <div dir="rtl" className="w-full mx-auto font-medium text-sm my-5">
                <div className="grid grid-cols-2 grid-rows-5 items-center justify-items-center">
                    {BottomFooterData?.map((item) => (
                        <div className="my-3" key={item.id}>
                            <Link href={item.link}>
                                {item.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FooterLinks;