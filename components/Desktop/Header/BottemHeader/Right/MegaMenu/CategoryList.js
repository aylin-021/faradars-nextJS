import * as Icons from "lucide-react";
import { ChevronLeft } from "lucide-react";

const CategoryList = ({ categories, activeCategory, onCategoryHover }) => {
    return (
        <div className="w-80 shrink-0 overflow-y-auto border-l border-gray-100 bg-white py-2">

            {categories.map((category) => {
                const Icon = Icons[category.icon];

                const isActive = activeCategory?.id === category.id;

                return (
                    <div
                        key={category.id}
                        onMouseEnter={() => onCategoryHover(category)}
                        className={`flex h-10.5 cursor-pointer items-center
              justify-between px-5 text-sm  transition duration-150
              ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"}
            `}
                    >
                        {/* متن و آیکون */}
                        <div className="flex items-center gap-3">

                            {Icon && (
                                <Icon
                                    size={20}
                                    strokeWidth={1.7}
                                    className={
                                        isActive
                                            ? "text-blue-600"
                                            : "text-gray-500"
                                    }
                                />
                            )}

                            <span className="whitespace-nowrap">
                                {category.title}
                            </span>
                        </div>

                        {/* فلش */}
                        <ChevronLeft
                            size={18}
                            strokeWidth={1.8}
                            className={
                                isActive
                                    ? "text-blue-600"
                                    : "text-gray-400"
                            }
                        />
                    </div>
                );
            })}

        </div>
    );
};

export default CategoryList;