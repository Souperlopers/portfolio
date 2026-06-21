import { useState } from "react";

const BannerImage = () => {
    const [imagesLoadedCount, setImagesLoadedCount] = useState(0);

    return (
        <>
            {imagesLoadedCount < 6 && (
                <div className="bg-[#333333] h-[490px] rounded skeleton"></div>
            )}
            <div className="relative w-full h-full">
                <img
                    src="/assets/images/banner-images/Subtract.svg"
                    alt="banner bg"
                    className="absolute -left-28 -top-0 z-10 w-[1200px] h-[500px]"
                    style={{
                        display: imagesLoadedCount === 6 ? "block" : "none",
                    }}
                    onLoad={() => setImagesLoadedCount((prev) => prev + 1)}
                />
                <img
                    src="/assets/images/banner-images/Subtract2.svg"
                    alt="banner bg2"
                    className="absolute z-0 w-[3000px] h-[300px]"
                    onLoad={() => setImagesLoadedCount((prev) => prev + 1)}
                    style={{
                        display: imagesLoadedCount === 6 ? "block" : "none",
                    }}
                />
                <div className="absolute bottom-32 right-28 z-50 text-2xl lg:text-3xl font-vazir text-white drop-shadow-2xl">
                    تیم توسعه‌ نرم افزار
                </div>
                <img
                    src="/assets/images/banner-images/Girl.svg"
                    alt="girl"
                    className="absolute left-[18%] bottom-16 z-50"
                    onLoad={() => setImagesLoadedCount((prev) => prev + 1)}
                    style={{
                        display: imagesLoadedCount === 6 ? "block" : "none",
                    }}
                />

                <img
                    src="/assets/images/banner-images/MAAAN.svg"
                    alt="man"
                    className="absolute left-[38%] bottom-16 z-50"
                    onLoad={() => setImagesLoadedCount((prev) => prev + 1)}
                    style={{
                        display: imagesLoadedCount === 6 ? "block" : "none",
                    }}
                />

                <img
                    src="/assets/images/banner-images/monitor.svg"
                    alt="monitor"
                    className="absolute left-[28%] top-24 z-50 w-52"
                    onLoad={() => setImagesLoadedCount((prev) => prev + 1)}
                    style={{
                        display: imagesLoadedCount === 6 ? "block" : "none",
                    }}
                />

                <img
                    src="/assets/images/banner-images/plant.svg"
                    alt="plant"
                    className="absolute left-[13%] bottom-20 z-50"
                    onLoad={() => setImagesLoadedCount((prev) => prev + 1)}
                    style={{
                        display: imagesLoadedCount === 6 ? "block" : "none",
                    }}
                />
            </div>
        </>
    );
};

export default BannerImage;
