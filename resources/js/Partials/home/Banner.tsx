import { motion, useScroll, useTransform } from "framer-motion";
import BannerImage from "./BannerImage";
import Subtract1 from "./Subtract1";

const Banner = () => {
    const { scrollY } = useScroll();

    const bannerOpacity = useTransform(scrollY, [0, 400], [1, 0.1]);

    return (
        <motion.div
            style={{ opacity: bannerOpacity }}
            className="w-[1350px] h-[500px] relative"
        >
            <Subtract1 />
            <div
                className=""
                style={{ aspectRatio: "1360 / 510" }}
            >
                <img
                    src="/assets/images/banner-images/Subtract.svg"
                    alt="banner bg"
                    style={{
                        position: "absolute",
                        left: "-15%",
                        top: "-1%",
                        width: "3000px",
                        height:"510px",
                        zIndex: 10,
                    }}
                />
            </div>
            {/* <BannerImage /> */}
        </motion.div>
    );
};

export default Banner;
