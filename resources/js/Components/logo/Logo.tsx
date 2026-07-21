import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@inertiajs/react";

export default function Logo({ isCompact = true }: { isCompact: boolean }) {
    const [target, setTarget] = useState<HTMLElement | null>(null);
    const [timePassed, setTimePassed] = useState(false);

    const ANIMATION_TIME = 200;

    const relatedPositions = {
        x: isCompact ? -40 : 40,
        y: isCompact ? -100 : 100,
        opacity: 0,
        scale: isCompact ? 2 : 0.5,
    };

    // set timepassed var for initial animations
    useEffect(() => {
        setTimePassed(false);
        const tId = setTimeout(() => setTimePassed(true), ANIMATION_TIME * 1.2);
        return () => clearTimeout(tId);
    }, [isCompact]);

    // change target parent after defined time (dont change it immmediately so animation have time to execute)
    useEffect(() => {
        const tId = setTimeout(() => {
            const targetId = isCompact ? "header-logo" : "hero-logo";
            const target = document.getElementById(targetId);
            setTarget(target);
        }, ANIMATION_TIME);
        return () => clearTimeout(tId);
    }, [isCompact]);

    type StateType = "compact_start" | "compact_end" | "wide_start" | "wide_end"
    const state: StateType = isCompact
        ? (timePassed ? "compact_start" : "compact_end")
        : (timePassed ? "wide_start" : "wide_end")

    return !target
        ? null
        : createPortal(
            <AnimatePresence mode="wait">
                <motion.div
                    key={isCompact ? "compact" : "wide"}
                    initial={relatedPositions}
                    exit={relatedPositions}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ duration: ANIMATION_TIME / 1000, ease: "linear" }}
                    className={`h-full w-full z-50 relative`}
                >
                    <Link href="/">
                        <img src={`/assets/images/logo-images/souper.svg`} alt="Souper"
                            className={`absolute w-[45%] h-[60%] ${(state == "compact_start" || state === "wide_end") ? "top-[3%] left-[33.33%]" : "top-1/2 -translate-y-1/2 left-0"} transition-all will-change-transform duration-700 ease-out `} />
                        <img src={`/assets/images/logo-images/lopers.svg`} alt="Lopers"
                            className={`absolute w-[43.76%] h-[60%] ${(state == "compact_start" || state === "wide_end") ? "left-[21.21%] bottom-[3%]" : "bottom-1/2 translate-y-1/2 left-[28.5%]"} transition-all will-change-transform duration-700 ease-out `} />
                        <img src={`/assets/images/logo-images/ptx.svg`} alt="Gul"
                            className={`absolute w-[8%] h-[40%] ${(state == "compact_start" || state === "wide_end") ? "right-[22%] bottom-[15%] rotate-[80deg]" : "opacity-0.5 bottom-1/2 translate-y-1/2 left-[65%]"} transition-all will-change-transform duration-700 ease-out `} />
                    </Link>
                </motion.div>
            </AnimatePresence>,
            target,
        );
}
