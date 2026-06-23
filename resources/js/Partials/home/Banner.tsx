import { motion, useScroll, useTransform } from "framer-motion";
import BannerImage from "./BannerImage";

const Banner = () => {
    const { scrollY } = useScroll();
    
    const bannerOpacity = useTransform(scrollY, [0, 400], [1, 0.1]);

    return (
        <motion.div
            style={{ opacity: bannerOpacity }}
            className="relative mx-auto lg:w-[1350px] w-[400px] max-w-full overflow-hidden mb-12"
        >
            <BannerImage />
        </motion.div>
    );
};

export default Banner;