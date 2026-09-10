import { Grid2X2, House, NotebookTabs, ShoppingCart, User } from "lucide-react";

const Bottom = () => {
    const footer = [
        {
            id: 1,
            icon: House,
            title: "خانه",
        },
        {
            id: 2,
            icon: Grid2X2,
            title: "دسته بندی ها",
        },
        {
            id: 3,
            icon: ShoppingCart,
            title: "سبد خرید",
        },
        {
            id: 4,
            icon: NotebookTabs,
            title: "آموزش‌های من",
        },
        {
            id: 5,
            icon: User,
            title: "پروفایل",
        },
    ];

    return (
        <div className="w-full max-w-full bg-[#FFFFFF]">
            <div className="flex flex-row justify-around items-center h-17">
                {footer?.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div key={item.id} className="flex flex-col items-center gap-1 cursor-pointer hover:text-blue-700">
                            <Icon size={20} />
                            <span className="text-[12px]">{item.title}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Bottom;