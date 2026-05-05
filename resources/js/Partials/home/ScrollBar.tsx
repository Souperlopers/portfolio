import { useState } from "react";

const ScrollBar = () => {
    const [isDisplayProjectTitle, setIsDisplayProjectTitle] = useState(false);
    const [isDisplayMemberTitle, setIsDisplayMemberTitle] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (!element) return;

        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div className="fixed top-[40%] right-1 bg-red-400 z-50 w-12 rounded-full h-40 flex flex-col justify-center items-center">
            <div
                className="hover:bg-red-300 transition-all duration-300 w-full h-full rounded-t-full flex justify-center items-center"
                onClick={() => scrollToSection("projects")}
                onMouseEnter={() => setIsDisplayProjectTitle(true)}
                onMouseLeave={() => setIsDisplayProjectTitle(false)}
            >
                P
                {isDisplayProjectTitle && (
                    <div className="absolute right-16 bg-neutral-500/60 w-16 py-1 text-center rounded">
                        پروژه ها
                    </div>
                )}
            </div>
            <div
                className="hover:bg-red-300 transition-all duration-300 w-full h-full rounded-b-full flex justify-center items-center"
                onClick={() => scrollToSection("members")}
                onMouseEnter={() => setIsDisplayMemberTitle(true)}
                onMouseLeave={() => setIsDisplayMemberTitle(false)}
            >
                M
                {isDisplayMemberTitle && (
                    <div className="absolute right-16 bg-neutral-500/60 w-16 py-1 text-center rounded">
                        کاربران
                    </div>
                )}
            </div>
        </div>
    );
};

export default ScrollBar;
