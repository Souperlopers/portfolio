import React from "react";

const ScrollBar = () => {
    return (
        <div className="fixed top-[40%] right-1 bg-red-400 z-50 w-12 rounded-full h-40 flex flex-col justify-center items-center">
            <div className="hover:bg-red-300 transition-all duration-300 w-full h-full rounded-t-full flex justify-center items-center">
                ⭐
            </div>
            <div className="hover:bg-red-300 transition-all duration-300 w-full h-full rounded-b-full flex justify-center items-center">
                🐾
            </div>
        </div>
    );
};

export default ScrollBar;
