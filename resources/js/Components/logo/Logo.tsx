import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@inertiajs/react";

export default function Logo({ isCompact = true }: { isCompact: boolean }) {
    const [target, setTarget] = useState<HTMLElement | null>(null);
    const [timePassed, setTimePassed] = useState(false);

    const [loadedCount, setLoadedCount] = useState(0);
    const allLoaded = loadedCount >= 3;

    const onLoad = () => setLoadedCount((prev) => prev + 1);

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

    type StateType =
        | "compact_start"
        | "compact_end"
        | "wide_start"
        | "wide_end";
    const animationState: StateType = isCompact
        ? timePassed
            ? "compact_start"
            : "compact_end"
        : timePassed
          ? "wide_start"
          : "wide_end";
    const isOnTop =
        animationState === "compact_end" || animationState === "wide_start";

    return !target
        ? null
        : createPortal(
              <AnimatePresence mode="wait">
                  <motion.div
                      key={isCompact ? "compact" : "wide"}
                      initial={relatedPositions}
                      exit={relatedPositions}
                      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                      transition={{
                          duration: ANIMATION_TIME / 1000,
                          ease: "linear",
                      }}
                      className={`h-full w-full z-50 relative`}
                  >
                      <Link href="/">
                          <img
                              src={`/assets/images/logo-images/souper.svg`}
                              alt="Souper"
                              onLoad={onLoad}
                              className={`absolute ${isOnTop ? "w-[45%] top-0 left-0" : "w-[80%] top-0 left-[20%"} transition-all will-change-transform duration-700 ease-out ${allLoaded ? "block" : "hidden"}`}
                          />
                          <img
                              src={`/assets/images/logo-images/lopers.svg`}
                              alt="Lopers"
                              onLoad={onLoad}
                              className={`absolute ${isOnTop ? "w-[43.76%] bottom-0 left-[45%]" : "w-[80%] bottom-0 left-0"} transition-all will-change-transform duration-700 ease-out ${allLoaded ? "block" : "hidden"}`}
                          />
                          <img
                              src={`/assets/images/logo-images/ptx.svg`}
                              alt="Gul"
                              onLoad={onLoad}
                              className={`absolute ${isOnTop ? "w-[11.24%] bottom-1/2 translate-y-1/2 right-0" : "w-[8%] bottom-[5%] right-[5%] rotate-[80deg]"} transition-all will-change-transform duration-700 ease-out ${allLoaded ? "block" : "hidden"}`}
                          />
                      </Link>
                  </motion.div>
              </AnimatePresence>,
              target,
          );
}
