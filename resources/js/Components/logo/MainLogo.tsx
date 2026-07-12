import { useEffect, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValueEvent,
} from "framer-motion";
import { Link } from "@inertiajs/react";

const TOTAL_IMAGES = 3;

const MainLogo = () => {
    const [isMobiled, setIsMobiled] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const [imagesLoadedCount, setImagesLoadedCount] = useState(0);
    const allLoaded = imagesLoadedCount >= TOTAL_IMAGES;
    const onLoad = () => setImagesLoadedCount((prev) => prev + 1);

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

    const souperX = useTransform(scrollY,[0, 70],[isMobiled ? "-10px" : "0px"  , isMobiled ? "35px" : "130px"],);
    const souperY = useTransform(scrollY,[0, 50],[isMobiled ? "0px" : "0px", isMobiled ? "0px"  : "-75px"],);

    const lopersX = useTransform(scrollY,[0, 100],[isMobiled ? "-10px" : "0px", isMobiled ? "-17px" : "65px" ],);
    const lopersY = useTransform(scrollY,[0, 100],[isMobiled ? "0px" : "0px", isMobiled ? "20px" : "-52px"],);

    const souperWidth = useTransform(scrollY,[0, 50],[isMobiled ? "50px" : "150px", isMobiled ? "40px" : "50px"],);
    const lopersWidth = useTransform(scrollY,[0, 50],[isMobiled ? "50px" : "170px", isMobiled ? "40px" : "50px"],);

    const ptxOpacity = useTransform(scrollY, [0, 100], [1, 1   ]);
    const ptxScale   = useTransform(scrollY, [0, 180], [1, 0.01]);

    const ptxX = useTransform(scrollY,[0, 100],[isMobiled ? "5px" : "40px", isMobiled ? "5px" : "100px" ],);
    const ptxY = useTransform(scrollY,[0, 100],[isMobiled ? "-2px" : "0"   , isMobiled ? "25px" : "-55px"],);

    return (
        <Link href="/">
                <motion.div
                    className={`fixed ${isMobiled ? "top-5" : "top-[90px]"} top-5 cursor-pointer z-50 flex items-center selection:bg-transparent`}
                    // calc(1/2 screan width - (1/2 main content + Logo width))
                    style={{
                        right: isMobiled
                            ? "calc(50vw - 260px + 80px)"
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
                                onLoad={onLoad}
                                className="w-full drop-shadow-2xl"
                                style={{ display: allLoaded ? "block" : "none" }}
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
                                onLoad={onLoad}
                                className="w-full"
                                style={{ display: allLoaded ? "block" : "none" }}
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
                                onLoad={onLoad}
                                className="w-3 lg:w-8 z-50"
                                style={{ display: allLoaded ? "block" : "none" }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
        </Link>
    );
};

export default MainLogo;
