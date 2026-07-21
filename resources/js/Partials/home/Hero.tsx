import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function Hero() {
    const [imagesLoadedCount, setImagesLoadedCount] = useState(0);
    const allLoaded = imagesLoadedCount >= 6;
    const onLoad = () => setImagesLoadedCount((prev) => prev + 1);

    return (
        <div className="h-[600px] w-full relative overflow-x-hidden bg-base-300">
            {/* white section */}
            <img
                className={`absolute top-0 max-w-[2096px] left-[calc(50%-100px)] -translate-x-1/2`}
                src="/assets/images/banner-images/Subtract2.svg"
                alt="banner white section"
                onLoad={onLoad}
            />

            {/* logo */}
            <div id="hero-logo" className={`z-50 absolute aspect-[313/90] w-[500px] top-20 left-[calc(50vw+150px)]`}></div>

            {/* describtion */}
            <p className="absolute z-50 text-2xl text-center w-[400px] top-[400px] left-[calc(50vw+150px)]">
                تولیدکننده نرم‌افزارهای اداری و تجاری 
            </p>


            <div className="absolute w-[900px] aspect-[1086/684] left-[calc(50vw-800px)] -top-12">
                <div className="relative w-full h-full">
                    {/* blue section */}
                    <img
                        src="/assets/images/banner-images/Subtract.svg"
                        alt="blue section of banner"
                        onLoad={onLoad}
                        className={`absolute z-10 w-full h-full`}
                    >

                    </img>

                        {/* developers section */}
                        <img
                            src="/assets/images/banner-images/plant.svg"
                            alt="banner plant"
                            onLoad={onLoad}
                            className={`absolute z-40 w-[6%] translate-x-[-950%] translate-y-[304%]`}
                        />
                        <img
                            src="/assets/images/banner-images/Girl.svg"
                            alt="banner girl"
                            onLoad={onLoad}
                            className={`absolute z-40 w-[18%] translate-x-[-200%] translate-y-[120%]`}
                        />
                        <img
                            src="/assets/images/banner-images/MAAAN.svg"
                            alt="banner man"
                            onLoad={onLoad}
                            className={`absolute z-40 w-[28%] translate-x-[-25%] translate-y-[100%]`}
                        />
                        <img
                            src="/assets/images/banner-images/monitor.svg"
                            alt="banner monitor"
                            onLoad={onLoad}
                            className={`absolute z-40 w-[18%] translate-x-[-146%] translate-y-[150%]`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
