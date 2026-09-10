import { ChevronLeft } from "lucide-react";

const fetchCategoriesSubject = async () => {
    try {
        const response = await fetch("http://localhost:3001/categoriesSubject");

        if (!response.ok) {
            throw new Error("خطا در دریافت اطلاعات");
        }

        return await response.json();
    } catch (error) {
        console.log(error.message);
        return [];
    }
};

const CategoriesSubject = async () => {
    const categoriesSubjectData = await fetchCategoriesSubject()
    return (
        <div className="flex flex-col justify-center my-15 mx-15">
            <div className="flex justify-between mb-10 font-bold text-lg">
                <p>موضوعات و دسته‌بندی‌های آموزشی منتخب</p>

                <a href="#" className="flex flex-row">
                    <span className="text-[#2563EB] text-sm font-bold">
                        همه دسته‌بندی‌ها
                    </span>
                    <ChevronLeft className="w-6 h-6 text-[#2563EB]" strokeWidth={1.5} />
                </a>
            </div>

            <div className="grid grid-cols-8 grid-rows-2 gap-y-10 justify-items-center">
                {categoriesSubjectData?.map((item) => {
                    return (
                        <div key={item.id}>
                            <a href="#" className="flex flex-col items-center text-center">
                                <div className="flex items-center justify-center rounded-full bg-[#F1F2F2] max-w-30 w-30 max-h-30 h-30 mx-auto
                                hover:-translate-y-1">
                                    <img className="max-w-20" src={item.image} alt="" />
                                </div>
                                <span className="mt-5">{item.title}</span>
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CategoriesSubject;