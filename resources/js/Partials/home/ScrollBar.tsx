import React from "react";

const ScrollBar = () => {
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
            >
                P
            </div>
            <div
                className="hover:bg-red-300 transition-all duration-300 w-full h-full rounded-b-full flex justify-center items-center"
                onClick={() => scrollToSection("members")}
            >
                M
            </div>
        </div>
    );
};

export default ScrollBar;
