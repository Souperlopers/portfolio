import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Logo({ isCompact = true }: { isCompact: boolean }) {
    const [target, setTarget] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const targetId = isCompact ? "header-logo" : "hero-logo";
        const target = document.getElementById(targetId);
        setTarget(target);
    }, [isCompact]);

    return !target
        ? null
        : createPortal(
              <AnimatePresence mode="wait">
                  <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className={`h-full w-full relative aspect-[313/150] z-50`}
                  >
                      <img
                          src={`/assets/images/logo-images/souper.svg`}
                          alt="Souper"
                          className={`w-[45%] h-[60%] ${isCompact ? "top-[3%] left-[33.33%]" : "top-1/2 -translate-y-1/2 left-0"} absolute transition-all will-change-transform duration-700 ease-in-out`}
                      />
                      <img
                          src={`/assets/images/logo-images/lopers.svg`}
                          alt="Lopers"
                          className={`w-[43.76%] h-[60%] ${isCompact ? "left-[21.21%] bottom-[3%]" : "bottom-1/2 translate-y-1/2 left-[45%]"} absolute transition-all will-change-transform duration-700 ease-in-out`}
                      />
                      <img
                          src={`/assets/images/logo-images/ptx.svg`}
                          alt="Gul"
                          className={`w-[8%] h-[40%] ${isCompact ? "right-[22%] bottom-[15%] rotate-[80deg]" : "opacity-0 bottom-1/2 translate-y-1/2 right-0"} absolute transition-all will-change-transform duration-700 ease-in-out`}
                      />
                  </motion.div>
              </AnimatePresence>,
              target,
          );
}
