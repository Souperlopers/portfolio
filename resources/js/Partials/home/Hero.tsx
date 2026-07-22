import { useState } from "react";

export default function Hero() {
    const [imagesLoadedCount, setImagesLoadedCount] = useState(0);
    const allLoaded = imagesLoadedCount >= 6;
    const onLoad = () => setImagesLoadedCount((prev) => prev + 1);

    return (
        <div className="h-[55vh] w-full relative overflow-hidden">
            {/* white section */}
            <img
                className={`absolute aspect-[3042/510] max-w-[350vw] translate-x-[50vw]`}
                src="/assets/images/banner-images/Subtract2.svg"
                alt="banner white section"
                onLoad={onLoad}
            />

            {/* logo */}
            <div id="hero-logo" className={`z-50 absolute w-3/4 sm: aspect-[313/90] top-[15%] left-1/2 -translate-x-1/2`}></div>

            {/* describtion */}
            <p className="absolute z-50 text-2xl xs:text-3xl text-balance w-3/4 bottom-0 pb-4 left-1/2 -translate-x-1/2">
                تولیدکننده انواع نرم‌افزارهای اداری و تجاری
            </p>

            <div className="hidden sm:visible absolute h-[40vh] aspect-[1086/684] left-1/2 -translate-x-1/2 top-1/2">
                <div className="relative w-full h-full">
                    <img // blue section
                        src="/assets/images/banner-images/Subtract.svg"
                        alt="blue section of banner"
                        onLoad={onLoad}
                        className={`absolute z-10 w-full h-full`}
                    />

                    <img // plant
                        src="/assets/images/banner-images/plant.svg"
                        alt="banner plant"
                        onLoad={onLoad}
                        className={`absolute z-40 w-[6%] left-[17%] top-[40%] opacity-50`}
                    />
                    <img // girl
                        src="/assets/images/banner-images/Girl.svg"
                        alt="banner girl"
                        onLoad={onLoad}
                        className={`absolute z-40 w-[14%] bottom-[8%] left-[35%]`}
                    />
                    <img // boy
                        src="/assets/images/banner-images/MAAAN.svg"
                        alt="banner man"
                        onLoad={onLoad}
                        className={`absolute z-40 w-[28%] right-[20%] bottom-[15%]`}
                    />
                    <img // monitor
                        src="/assets/images/banner-images/monitor.svg"
                        alt="banner monitor"
                        onLoad={onLoad}
                        className={`-translate-x-1/2 -translate-y-1/2 absolute z-40 w-[20%] left-[55%] top-[45%]`}
                    />
                </div>
            </div>

        </div>
    );
}
