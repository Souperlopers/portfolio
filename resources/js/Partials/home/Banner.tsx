import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MainLogo } from "@/index";

const TOTAL_IMAGES = 6;

const Banner = () => {
    const [imagesLoadedCount, setImagesLoadedCount] = useState(0);
    const allLoaded = imagesLoadedCount >= TOTAL_IMAGES;
    const onLoad = () => setImagesLoadedCount((prev) => prev + 1);
    const { scrollY } = useScroll();

    const bannerOpacity = useTransform(scrollY, [0, 400], [1, 0.1]);

    return (
        <>
            {/* {allLoaded && <MainLogo />} */}
            <div className="h-[460px] w-full bg-blue-50 flex justify-center">
                <div className="relative overflow-x-visible bg-blue-300 w-full max-w-7xl h-full">
                    {/* blue section */}
                    {/* <div className="absolute h-100 left-0 top-100 w-1/2 h-1/2 overflow-visible bg-orange-300">
                        <div className="relative w-full h-full">
                            <img
                                src="/assets/images/banner-images/Subtract.svg"
                                alt="blue section of banner"
                                onLoad={onLoad}
                                style={{
                                    position: "absolute",
                                    left: "-15%",
                                    top: "-1%",
                                    width: "100.7%",
                                    height: "102%",
                                    zIndex: 10,
                                    display: allLoaded ? "block" : "none",
                                }}
                            />
                            <img
                                src="/assets/images/banner-images/Subtract.svg"
                                alt="shadow of blue section of banner"
                                onLoad={onLoad}
                                style={{
                                    position: "absolute",
                                    left: "-15%",
                                    top: "-1%",
                                    width: "100.7%",
                                    height: "102%",
                                    zIndex: 10,
                                    display: allLoaded ? "block" : "none",
                                }}
                            />
                        </div>
                    </div> */}

                    {/* white section */}
                    <div
                        className="relative w-[100] h-[100%] overflow-x-visible"
                    >
                        <img
                            src="/assets/images/banner-images/Subtract2.svg"
                            alt="banner white section"
                            onLoad={onLoad}
                            className={`absolute z-5 left-1/2 min-w-[170%] -translate-x-1/2 ${allLoaded ? "block" : "none"}`}
                        />
                    </div>

                    {/* developers section */}
                    {/* <div className="absolute w-1/2 h-1/2 bg-green-400">
                        <div className="relative w-full h-full">
                            <img
                                src="/assets/images/banner-images/plant.svg"
                                alt="banner plant"
                                onLoad={onLoad}
                                style={{
                                    position: "absolute",
                                    left: "18%",
                                    bottom: "10.5%",
                                    height: "28%",
                                    width: "auto",
                                    zIndex: 50,
                                    display: allLoaded ? "block" : "none",
                                }}
                            />
                            <img
                                src="/assets/images/banner-images/Girl.svg"
                                alt="banner girl"
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
                                alt="banner man"
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
                                alt="banner monitor"
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
                        </div>
                    </div> */}
                </div>
            </div>
            {/* <motion.div
                style={{ opacity: bannerOpacity, aspectRatio: "1360 / 510" }}
                className="w-[100%] relative"
            >
                {!allLoaded && (
                    <div className="absolute inset-0 bg-[#333333] rounded skeleton" />
                )}
                <div
                    className="lg:w-[1360px] md:w-[950px] sm:w-[660px] w-[400px] absolute"
                    style={{ aspectRatio: "1360 / 510" }}
                >
                </div>
                <div
                    className="lg:w-[3002px] md:w-[2100px] sm:w-[1400px] w-[900px] absolute"
                    style={{ aspectRatio: "3002 / 400" }}
                >
                <div
                    style={{
                        zIndex: 50,
                        fontSize: "clamp(0.9rem, 2vw, 1.875rem)",
                        fontFamily: "Vazir, sans-serif",
                        color: "white",
                        filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.5))",
                        display: allLoaded ? "block" : "none",
                    }}
                    className="absolute lg:bottom-[26%] lg:right-[13%] right-[5%] bottom-[15%]"
                >
                    تیم توسعه‌ نرم‌افزار
                </div>
            </motion.div> */}
        </>
    );
};

export default Banner;
