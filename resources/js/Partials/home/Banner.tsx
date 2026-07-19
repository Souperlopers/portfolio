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
                <div className="relative overflow-x-visible bg-blue-300 w-full h-full max-w-7xl">
                    {/* white section */}
                    <img
                        src="/assets/images/banner-images/Subtract2.svg"
                        alt="banner white section"
                        onLoad={onLoad}
                        className={`absolute z-5 ${allLoaded ? "block" : "none"} left-1/2 min-w-[170%] -translate-x-1/2`}
                    />

                    {/* blue section */}
                    {/* <img
                        src="/assets/images/banner-images/Subtract.svg"
                        alt="blue section of banner"
                        onLoad={onLoad}
                        className={`absolute z-10 ${allLoaded ? "block" : "none"}  w-[75%] -translate-x-[50%] -translate-y-[20px] top-[10px]`}
                        style={{left: "calc(50%)"}}
                    /> */}

                    {/* developers section */}
                    {/* <div className="">
                        <div className="relative w-full h-full">
                            <img
                                src="/assets/images/banner-images/plant.svg"
                                alt="banner plant"
                                onLoad={onLoad}
                                className={`absolute z-50 ${allLoaded ? "block" : "none"}`}
                                style={{
                                    left: "18%",
                                    bottom: "10.5%",
                                    height: "28%",
                                    width: "auto",
                                }}
                            />
                            <img
                                src="/assets/images/banner-images/Girl.svg"
                                alt="banner girl"
                                onLoad={onLoad}
                                className={`absolute z-50 ${allLoaded ? "block" : "none"}`}
                                style={{
                                    left: "21%",
                                    bottom: "10%",
                                    height: "51%",
                                    width: "auto",
                                }}
                            />
                            <img
                                src="/assets/images/banner-images/MAAAN.svg"
                                alt="banner man"
                                onLoad={onLoad}
                                className={`absolute z-50 ${allLoaded ? "block" : "none"}`}
                                style={{
                                    left: "38%",
                                    bottom: "18%",
                                    height: "50%",
                                    width: "auto",
                                }}
                            />
                            <img
                                src="/assets/images/banner-images/monitor.svg"
                                alt="banner monitor"
                                onLoad={onLoad}
                                className={`absolute z-50 ${allLoaded ? "block" : "none"}`}
                                style={{
                                    left: "30%",
                                    top: "19%",
                                    width: "13%",
                                    height: "auto",
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
