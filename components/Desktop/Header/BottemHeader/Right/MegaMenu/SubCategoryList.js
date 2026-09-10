import { ArrowLeft } from "lucide-react";

const SubCategoryList = ({ activeCategory }) => {
    if (!activeCategory) {
        return (
            <div className="flex flex-1 items-center justify-center text-sm text-gray-400">
                دسته‌بندی را انتخاب کنید
            </div>
        );
    }

    return (
        <div className="flex-1 bg-gray-50 px-7 py-6">

            {/* عنوان */}
            <div className="mb-6 flex items-center gap-2">

                <span className="cursor-pointer text-sm font-bold text-blue-600 hover:text-blue-700">
                    همه آموزش‌های {activeCategory.title}
                </span>

                <ArrowLeft
                    size={18}
                    strokeWidth={2}
                    className="text-blue-600"
                />
            </div>

            {/* زیر دسته‌ها */}
            <div className="flex flex-col gap-5">

                {activeCategory.subcategories?.map(
                    (subcategory, index) => (
                        <div
                            key={index}
                            className="cursor-pointer text-sm text-gray-700 transition hover:text-blue-600"
                        >
                            {subcategory}
                        </div>
                    )
                )}

            </div>
        </div>
    );
};

export default SubCategoryList;