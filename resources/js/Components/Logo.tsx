import { useEffect, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValueEvent,
} from "framer-motion";

const Logo = () => {
    const [isMobiled, setIsMobiled] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const checkWidth = () => setIsMobiled(window.innerWidth < 900);
        checkWidth();
        window.addEventListener("resize", checkWidth);
        return () => window.removeEventListener("resize", checkWidth);
    }, []);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    console.log(isScrolled);

    const souperX = useTransform(
        scrollY,
        [0, 70],
        [isMobiled ? "0px" : "0", isMobiled ? "50px" : "120px"],
    );
    const souperY = useTransform(
        scrollY,
        [0, 50],
        [isMobiled ? "0px" : "0px", isMobiled ? "0px" : "-65px"],
    );

    const lopersX = useTransform(
        scrollY,
        [0, 100],
        [isMobiled ? "0px" : "0px", isMobiled ? "-5px" : "55px"],
    );
    const lopersY = useTransform(
        scrollY,
        [0, 100],
        [isMobiled ? "0px" : "0px", isMobiled ? "20px" : "-45px"],
    );

    const souperWidth = useTransform(
        scrollY,
        [0, 50],
        [isMobiled ? "50px" : "150px", isMobiled ? "40px" : "50px"],
    );
    const lopersWidth = useTransform(
        scrollY,
        [0, 50],
        [isMobiled ? "50px" : "170px", isMobiled ? "40px" : "50px"],
    );

    const ptxOpacity = useTransform(scrollY, [0, 100], [1, 1]);
    const ptxScale = useTransform(scrollY, [0, 180], [1, 0.01]);
    const ptxX = useTransform(
        scrollY,
        [0, 100],
        [isMobiled ? "13px" : "40px", isMobiled ? "10px" : "90px"],
    );
    const ptxY = useTransform(
        scrollY,
        [0, 100],
        [isMobiled ? "-2px" : "0", isMobiled ? "25px" : "-50px"],
    );

    return (
        <motion.div
            className={`fixed ${isMobiled ? "top-5" : "top-20"} top-5 z-[50] flex items-center selection:bg-transparent`}
            style={{
                right: isMobiled
                    ? "calc(20vw - 160px + 112px)"
                    : "calc(50vw - 675px + 112px)",
            }}
            dir="ltr"
        >
            <motion.div
                className="flex"
                style={{ transformOrigin: "top right", position: "relative" }}
            >
                <motion.div
                    style={{
                        x: souperX,
                        y: souperY,
                        width: souperWidth,
                        position: "relative",
                        top: "0",
                        right: "0",
                    }}
                >
                    <img
                        src="/assets/images/logo-images/souper.svg"
                        alt="souper"
                        className="w-full drop-shadow-2xl"
                    />
                </motion.div>

                <motion.div
                    style={{
                        x: lopersX,
                        y: lopersY,
                        width: lopersWidth,
                        position: "relative",
                    }}
                >
                    <img
                        src="/assets/images/logo-images/lopers.svg"
                        alt="lopers"
                        className="w-full"
                    />
                </motion.div>

                <motion.div
                    style={{
                        opacity: ptxOpacity,
                        scale: ptxScale,
                        position: "absolute",
                        top: "0",
                        right: "0",
                        x: ptxX,
                        y: ptxY,
                    }}
                >
                    <img
                        src="/assets/images/logo-images/ptx.svg"
                        alt="ptx"
                        className="w-3 lg:w-8 z-50"
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Logo;
