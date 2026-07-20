import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MainLogo } from "@/index";

const TOTAL_IMAGES = 6;

export default function Banner(){
    const [imagesLoadedCount, setImagesLoadedCount] = useState(0);
    const allLoaded = imagesLoadedCount >= TOTAL_IMAGES;
    const onLoad = () => setImagesLoadedCount((prev) => prev + 1);
    const { scrollY } = useScroll();

    const bannerOpacity = useTransform(scrollY, [0, 400], [1, 0.1]);

    return (
        <>
            <div className="h-[500px] w-full flex justify-center align-middle">
                <div className="relative overflow-visible w-full h-full max-w-7xl max-h-[460px]">
                    {/* logo */}
                    {allLoaded && <MainLogo />}
            
                    {/* white section */}
                    <img
                        src="/assets/images/banner-images/Subtract2.svg"
                        alt="banner white section"
                        onLoad={onLoad}
                        className={`absolute z-5 ${allLoaded ? "block" : "none"} left-1/2 min-w-[190%] -translate-x-[53%] -translate-y-[15%]`}
                    />

                    <div className="absolute w-[66%] -left-[7%] -translate-y-[7vh]">
                        <div className="relative w-full h-full">
                            {/* blue section */}
                            <img
                                src="/assets/images/banner-images/Subtract.svg"
                                alt="blue section of banner"
                                onLoad={onLoad}
                                className={`absolute z-10 ${allLoaded ? "block" : "none"}`}
                            />

                            {/* developers section */}
                            <img
                                src="/assets/images/banner-images/plant.svg"
                                alt="banner plant"
                                onLoad={onLoad}
                                className={`absolute z-50 ${allLoaded ? "block" : "none"} w-[6%] translate-x-[-950%] translate-y-[304%]`}
                            />
                            <img
                            src="/assets/images/banner-images/Girl.svg"
                            alt="banner girl"
                            onLoad={onLoad}
                            className={`absolute z-50 ${allLoaded ? "block" : "none"} w-[18%] translate-x-[-200%] translate-y-[120%]`}
                            />
                            <img
                            src="/assets/images/banner-images/MAAAN.svg"
                            alt="banner man"
                            onLoad={onLoad}
                            className={`absolute z-50 ${allLoaded ? "block" : "none"} w-[28%] translate-x-[-25%] translate-y-[100%]`}
                        />
                            <img
                            src="/assets/images/banner-images/monitor.svg"
                            alt="banner monitor"
                            onLoad={onLoad}
                            className={`absolute z-50 ${allLoaded ? "block" : "none"} w-[18%] translate-x-[-146%] translate-y-[150%]`}
                        />
                        </div>
                    </div>
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

