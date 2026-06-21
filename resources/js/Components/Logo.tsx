import { motion, useScroll, useTransform } from "framer-motion";

const Logo = () => {
    const { scrollY } = useScroll();
    const souperX = useTransform(scrollY, [0, 300], ["0px", "10px"]);
    const souperY = useTransform(scrollY, [0, 300], ["0px", "0px"]);
    const logoW = useTransform(scrollY, [0,300], ["320px" , "100px"]);

    const lopersX = useTransform(scrollY, [0, 300], ["0px", "-55px"]);
    const lopersY = useTransform(scrollY, [0, 300], ["0px", "20px"]);

    const logoTop = useTransform(scrollY, [0, 300], ["80px", "20px"]);
    const logoRight = useTransform(scrollY, [0, 300], ["80%", "0px"]);

    const ptxOpacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
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
                />
            </motion.div>
            <motion.div style={{ x: lopersX, y: lopersY }}>
                <img
                    src="/assets/images/logo-images/lopers.svg"
                    alt="lopers"
                    className=""
                />
            </motion.div>
            <motion.div style={{ opacity: ptxOpacity }}>
                <img
                    src="/assets/images/logo-images/ptx.svg"
                    alt="ptx"
                    className="absolute lg:-right-5 -right-6 lg:w-9 w-5"
                />
            </motion.div>
        </motion.div>
    );
};

export default Logo;
