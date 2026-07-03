import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TOTAL_IMAGES = 6;

const Banner = () => {
    const [imagesLoadedCount, setImagesLoadedCount] = useState(0);
    const allLoaded = imagesLoadedCount >= TOTAL_IMAGES;
    const onLoad = () => setImagesLoadedCount((prev) => prev + 1);
    const { scrollY } = useScroll();

    const bannerOpacity = useTransform(scrollY, [0, 400], [1, 0.1]);

    return (
        <motion.div
            style={{ opacity: bannerOpacity }}
            className="w-[1350px] h-[500px] relative"
        >
            {!allLoaded && (
                <div className="absolute inset-0 bg-[#333333] rounded skeleton" />
            )}
            <div
                className="w-[1360px] absolute"
                style={{ aspectRatio: "1360 / 510" }}
            >
                <img
                    src="/assets/images/banner-images/Subtract.svg"
                    alt="banner bg"
                    onLoad={onLoad}
                    style={{
                        position: "absolute",
                        left: "-15%",
                        top: "-1%",
                        width: "1360px",
                        height: "510px",
                        zIndex: 10,
                        display: allLoaded ? "block" : "none",
                    }}
                />
            </div>
            <div
                className="w-[3002px] absolute"
                style={{ aspectRatio: "3002 / 400" }}
            >
                <img
                    src="/assets/images/banner-images/Subtract2.svg"
                    alt="banner bg2"
                    onLoad={onLoad}
                    style={{
                        position: "absolute",
                        right: "-26%",
                        top: "-120px",
                        width: "3002px",
                        height: "400px",
                        zIndex: 5,
                        display: allLoaded ? "block" : "none",
                    }}
                />
            </div>
            <img
                src="/assets/images/banner-images/plant.svg"
                alt="plant"
                onLoad={onLoad}
                style={{
                    position: "absolute",
                    left: "17%",
                    bottom: "11%",
                    height: "28%",
                    width: "auto",
                    zIndex: 50,
                    display: allLoaded ? "block" : "none",
                }}
            />
            <img
                src="/assets/images/banner-images/Girl.svg"
                alt="girl"
                onLoad={onLoad}
                style={{
                    position: "absolute",
                    left: "21%",
                    bottom: "10%",
                    height: "51%",
                    width: "auto",
                    zIndex: 50,
                    display: allLoaded ? "block" : "none",
                }}
            />
            <img
                src="/assets/images/banner-images/MAAAN.svg"
                alt="man"
                onLoad={onLoad}
                style={{
                    position: "absolute",
                    left: "38%",
                    bottom: "18%",
                    height: "50%",
                    width: "auto",
                    zIndex: 50,
                    display: allLoaded ? "block" : "none",
                }}
            />
            <img
                src="/assets/images/banner-images/monitor.svg"
                alt="monitor"
                onLoad={onLoad}
                style={{
                    position: "absolute",
                    left: "30%",
                    top: "19%",
                    width: "13%",
                    height: "auto",
                    zIndex: 50,
                    display: allLoaded ? "block" : "none",
                }}
            />
            <div
                style={{
                    zIndex: 50,
                    fontSize: "clamp(0.9rem, 2vw, 1.875rem)",
                    fontFamily: "Vazir, sans-serif",
                    color: "white",
                    filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.5))",
                }}
                className="absolute lg:bottom-[26%] lg:right-[13%] right-[5%] bottom-[15%]"
            >
                تیم توسعه‌ نرم افزار
            </div>
        </motion.div>
    );
};

export default Banner;
