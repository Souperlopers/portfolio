import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

export default function MainLogo() {
    const [scrolled, setScrolled] = useState(false);

    const SouperSrc = "/assets/images/logo-images/souper.svg";
    const LopersSrc = "/assets/images/logo-images/lopers.svg";
    const PtxSrc = "/assets/images/logo-images/ptx.svg";

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const threshold = 100; // pixels from top

            setScrolled(scrollY > threshold);
            console.log(scrollY);
            console.log(scrollY > threshold);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <Link
            className={`aspect-[330/150] ${scrolled ? "fixed top-2 -right-5 h-[70px]" : "absolute -translate-x-20 translate-y-20 h-[150px]"} z-50 duration-700`}
            dir="ltr"
            href="/"
        >
            <div
                className={`h-full w-full relative cursor-pointer ease-linear`}
            >
                <img
                    src={SouperSrc}
                    alt="Souper"
                    className={`w-[45%] h-[60%] ${scrolled ? "top-[3%] left-[33.33%]" : "top-1/2 -translate-y-1/2 left-0"} absolute transition-position will-change-transform duration-700 ease-in-out`}
                />
                <img
                    src={LopersSrc}
                    alt="Lopers"
                    className={`w-[45%] h-[60%] ${scrolled ? "left-[21.21%] bottom-[3%]" : "bottom-1/2 translate-y-1/2 left-[45%]"} absolute transition-position will-change-transform duration-700 ease-in-out`}
                />
                <img
                    src={PtxSrc}
                    alt="Gul"
                    className={`w-[8%] h-[40%] ${scrolled ? "right-[22%] bottom-[15%] rotate-[80deg]" : "opacity-0 bottom-1/2 translate-y-1/2 right-0"} absolute transition-position will-change-transform duration-700 ease-in-out`}
                />
            </div>
        </Link>
    );
}
