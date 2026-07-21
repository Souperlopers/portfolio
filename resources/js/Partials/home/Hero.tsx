import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function Hero() {
    const [imagesLoadedCount, setImagesLoadedCount] = useState(0);
    const allLoaded = imagesLoadedCount >= 6;
    const onLoad = () => setImagesLoadedCount((prev) => prev + 1);

    return (
        <div className="h-[80vh] w-full flex justify-center align-middle">
            <div className="relative overflow-visible w-full h-full max-w-7xl max-h-[460px]">
                {/* logo */}
                <Link href="/" id="hero-logo" className={`absolute aspect-[313/90] w-[45%]`}></Link>

                {/* describtion */}
                <p className="absolute z-50 md:text-3xl text-xl md:top-[370px] md:right-[10%] left-20 top-[30%]">
                    تیم توسعه‌ نرم‌افزار
                </p>

                {/* white section */}
                <img
                    src="/assets/images/banner-images/Subtract2.svg"
                    alt="banner white section"
                    onLoad={onLoad}
                    className={`absolute z-5 ${allLoaded ? "block" : "none"} left-1/2 min-w-[250%] md:min-w-[190%] -translate-x-[70%] md:-translate-x-[53%] -translate-y-[15%]`}
                />

                <div className="absolute w-[150%] md:w-[66%] md:top-5 left-[-45%] md:-left-[7%] top-28">
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
                            className={`absolute z-40 ${allLoaded ? "block" : "none"} w-[6%] translate-x-[-950%] translate-y-[304%]`}
                        />
                        <img
                            src="/assets/images/banner-images/Girl.svg"
                            alt="banner girl"
                            onLoad={onLoad}
                            className={`absolute z-40 ${allLoaded ? "block" : "none"} w-[18%] translate-x-[-200%] translate-y-[120%]`}
                        />
                        <img
                            src="/assets/images/banner-images/MAAAN.svg"
                            alt="banner man"
                            onLoad={onLoad}
                            className={`absolute z-40 ${allLoaded ? "block" : "none"} w-[28%] translate-x-[-25%] translate-y-[100%]`}
                        />
                        <img
                            src="/assets/images/banner-images/monitor.svg"
                            alt="banner monitor"
                            onLoad={onLoad}
                            className={`absolute z-40 ${allLoaded ? "block" : "none"} w-[18%] translate-x-[-146%] translate-y-[150%]`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
