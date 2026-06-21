import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Logo = () => {
    const [imagesLoadedCount, setImagesLoadedCount] = useState(0);

    const { scrollY } = useScroll();
    const souperX = useTransform(scrollY, [0, 300], ["0px", "12px"]);
    const souperY = useTransform(scrollY, [0, 300], ["0px", "-2px"]);
    const logoW = useTransform(scrollY, [0, 300], ["320px", "100px"]);

    const lopersX = useTransform(scrollY, [0, 300], ["0px", "-55px"]);
    const lopersY = useTransform(scrollY, [0, 300], ["0px", "20px"]);

    const logoTop = useTransform(scrollY, [0, 300], ["80px", "20px"]);
    const logoRight = useTransform(scrollY, [0, 300], ["80%", "0px"]);

    const ptxOpacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <>
            {imagesLoadedCount < 3 && (
                <div className="bg-[#494949] h-32 rounded skeleton flex lg:w-80 w-40 z-[100] fixed"></div>
            )}
            <motion.div
                style={{
                    top: logoTop,
                    right: logoRight,
                    width: logoW,
                }}
                className="fixed z-[100] flex lg:w-80 w-40 selection:bg-transparent "
                dir="ltr"
            >
                <motion.div style={{ x: souperX, y: souperY }}>
                    <img
                        src="/assets/images/logo-images/souper.svg"
                        alt="souper"
                        className="drop-shadow-2xl"
                        style={{
                            display: imagesLoadedCount === 3 ? "block" : "none",
                        }}
                        onLoad={() => setImagesLoadedCount((prev) => prev + 1)}
                    />
                </motion.div>
                <motion.div style={{ x: lopersX, y: lopersY }}>
                    <img
                        src="/assets/images/logo-images/lopers.svg"
                        alt="lopers"
                        style={{
                            display: imagesLoadedCount === 3 ? "block" : "none",
                        }}
                        onLoad={() => setImagesLoadedCount((prev) => prev + 1)}
                    />
                </motion.div>
                <motion.div style={{ opacity: ptxOpacity }}>
                    <img
                        src="/assets/images/logo-images/ptx.svg"
                        alt="ptx"
                        className="absolute lg:-right-5 -right-6 lg:w-9 w-5"
                        style={{
                            display: imagesLoadedCount === 3 ? "block" : "none",
                        }}
                        onLoad={() => setImagesLoadedCount((prev) => prev + 1)}
                    />
                </motion.div>
            </motion.div>
        </>
    );
};

export default Logo;
