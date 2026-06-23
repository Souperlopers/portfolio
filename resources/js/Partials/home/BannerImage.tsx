import { useState } from "react";

const TOTAL_IMAGES = 6;

const BannerImage = () => {
    const [imagesLoadedCount, setImagesLoadedCount] = useState(0);
    const allLoaded = imagesLoadedCount >= TOTAL_IMAGES;
    const onLoad = () => setImagesLoadedCount((prev) => prev + 1);

    return (
        <div className="relative w-full" style={{ aspectRatio: "1350 / 510" }}>
            {!allLoaded && (
                <div className="absolute inset-0 bg-[#333333] rounded skeleton" />
            )}
            <img
                src="/assets/images/banner-images/Subtract.svg"
                alt="banner bg"
                onLoad={onLoad}
                style={{
                    position: "absolute",
                    left: "-9%",
                    top: "0%",
                    width: "89%",
                    height: "103%",
                    zIndex: 10,
                    display: allLoaded ? "block" : "none",
                }}
            />
            <img
                src="/assets/images/banner-images/Subtract2.svg"
                alt="banner bg2"
                onLoad={onLoad}
                style={{
                    position: "absolute",
                    left: "0%",
                    bottom: "40%",
                    width: "100%",
                    height: "61%",
                    zIndex: 0,
                    display: allLoaded ? "block" : "none",
                }}
            />
            <img
                src="/assets/images/banner-images/plant.svg"
                alt="plant"
                onLoad={onLoad}
                style={{
                    position: "absolute",
                    left: "15%",
                    bottom: "11%",
                    height: "30%",
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
                    left: "20%",
                    bottom: "7%",
                    height: "55%",
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
                    left: "29%",
                    top: "19%",
                    width: "15%",
                    height: "auto",
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
                    left: "37%",
                    bottom: "8%",
                    height: "56%",
                    width: "auto",
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
                className="absolute lg:bottom-[26%] lg:right-[8%] right-[5%] bottom-[15%]"
            >
                تیم توسعه‌ نرم افزار
            </div>
        </div>
    );
};

export default BannerImage;
