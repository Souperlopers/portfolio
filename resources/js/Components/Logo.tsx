import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Logo = () => {
    const [isMobiled, setIsMobiled] = useState(false);
    const windowWidth = window.innerWidth;

    useEffect(() => {
        if (windowWidth < 500) setIsMobiled(true);
        else setIsMobiled(false);
    }, [windowWidth]);

    const { scrollY } = useScroll();

    const souperX = useTransform(scrollY, [0, 100], ["0", "80px"]);
    const souperY = useTransform(scrollY, [0, 100], ["0", "-65px"]);
    const lopersX = useTransform(scrollY, [0, 100], ["0", "15px"]);
    const lopersY = useTransform(scrollY, [0, 100], ["0", "-48px"]);
    const souperWidth = useTransform(scrollY, [0, 100], ["150px", "50px"]);
    const lopersWidth = useTransform(scrollY, [0, 100], ["170px", "50px"]);
    // const souperX = useTransform(scrollY, [0, 100], [isMobiled?"545px":"-30px", isMobiled?"850px":"780px"]);
    // const souperY = useTransform(scrollY, [0, 100], [isMobiled?"-250px":"0px", isMobiled?"-320px":"-280px"]);
    // const lopersX = useTransform(scrollY, [0, 100], [isMobiled?"545px":"-30px", isMobiled?"650px":"580px"]);
    // const lopersY = useTransform(scrollY, [0, 100], [isMobiled?"-250px":"0px", isMobiled?"-250px":"-210px"]);
    // const logoScale = useTransform(
    //     scrollY,
    //     [0, 100],
    //     [isMobiled ? 0.36 : 1, isMobiled ? 0.30 : 0.35],
    // );
    const ptxOpacity = useTransform(scrollY, [0, 100], [1, 0]);

    return (
        <motion.div
            style={{}}
            className="fixed top-20 right-[5%] z-[100] flex items-center selection:bg-transparent"
            dir="ltr"
        >
            <motion.div
                style={{
                    transformOrigin: "left center",
                    display: "flex",
                }}
            >
                <motion.div
                    style={{ x: souperX, y: souperY, width: souperWidth }}
                >
                    <img
                        src="/assets/images/logo-images/souper.svg"
                        alt="souper"
                        className="drop-shadow-2xl"
                    />
                </motion.div>
                <motion.div
                    style={{ x: lopersX, y: lopersY, width: lopersWidth }}
                >
                    <img
                        src="/assets/images/logo-images/lopers.svg"
                        alt="lopers"
                    />
                </motion.div>
                <motion.div style={{ opacity: ptxOpacity }}>
                    <img
                        src="/assets/images/logo-images/ptx.svg"
                        alt="ptx"
                        className="absolute lg:-right-1 lg:top-0 -right-[575px] -top-[250px] lg:w-8 w-6"
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Logo;
