import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

export default function MainLogo({ isCompact = true }: { isCompact: boolean }) {

    return (
        <Link
            className={`aspect-[313/150] ${isCompact ? "fixed top-2 -right-5 w-[150px]" : "absolute translate-x-[-50%] md:translate-x-[-10%] translate-y-[10%] md:translate-y-[30%] w-[45%] md:w-[32%]"} z-50 duration-700`}
            dir="ltr"
            href="/"
        >
            <div
                className={`h-full w-full relative cursor-pointer ease-linear`}
            >
                <img
                    src={`/assets/images/logo-images/souper.svg`}
                    alt="Souper"
                    className={`w-[45%] h-[60%] ${isCompact ? "top-[3%] left-[33.33%]" : "top-1/2 -translate-y-1/2 left-0"} absolute transition-position will-change-transform duration-700 ease-in-out`}
                />
                <img
                    src={`/assets/images/logo-images/lopers.svg`}
                    alt="Lopers"
                    className={`w-[43.76%] h-[60%] ${isCompact ? "left-[21.21%] bottom-[3%]" : "bottom-1/2 translate-y-1/2 left-[45%]"} absolute transition-position will-change-transform duration-700 ease-in-out`}
                />
                <img
                    src={`/assets/images/logo-images/ptx.svg`}
                    alt="Gul"
                    className={`w-[8%] h-[40%] ${isCompact ? "right-[22%] bottom-[15%] rotate-[80deg]" : "opacity-0 bottom-1/2 translate-y-1/2 right-0"} absolute transition-position will-change-transform duration-700 ease-in-out`}
                />
            </div>
        </Link>
    );
}
