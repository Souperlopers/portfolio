import { motion, useScroll, useTransform } from "framer-motion";
import BannerImage from "./BannerImage";

const Banner = () => {
    const { scrollY } = useScroll();
    
    const bannerOpacity = useTransform(scrollY, [0, 100], [1, 0.6]);
    const bannerScale = useTransform(scrollY, [0, 100], [1, 0.95]);

    return (
        <motion.div
            style={{ opacity: bannerOpacity, scale: bannerScale }}
            className="relative mx-auto lg:w-[1350px] w-[400px] max-w-full h-[490px] overflow-hidden mb-12"
        >
            <BannerImage />
        </motion.div>
    );
};

export default Banner;