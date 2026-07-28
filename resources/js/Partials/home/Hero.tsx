import { useState } from "react"
import { clsx } from "clsx/lite"

export default function Hero() {
    const [imagesLoadedCount, setImagesLoadedCount] = useState(0)
    const allLoaded = imagesLoadedCount >= 6
    const onLoad = () => setImagesLoadedCount((prev) => prev + 1)

    return (
        <div //
            className={clsx(
                !allLoaded && "skeleton", // loading
                "relative overflow-x-hidden", // basic
                "h-[450px]", // dimensions
            )}
        >
            {/* white section */}
            <img
                src="/assets/images/banner/white-section.svg"
                alt="banner white section"
                onLoad={onLoad}
                className={clsx(
                    allLoaded ? "block" : "hidden", // loading
                    "absolute -translate-x-1/2", // basic
                    "aspect-[3042/510] h-full max-w-none", // dimension
                    "left-[calc(50%-500px)] lg:left-[calc(50%-150px)] 2xl:left-1/2", // position
                )}
            />

            {/* logo */}
            <div
                id="hero-logo"
                className={clsx(
                    allLoaded ? "block" : "hidden", // loading
                    "absolute z-50 -translate-x-1/2", // basic
                    "aspect-[313/90] max-w-[450px]", // dimension basic
                    "w-3/4 lg:w-[350px] xl:w-[600px]", // dimension responsive
                    "left-1/2 top-14 lg:left-[calc(50%+290px)] xl:left-[calc(50%+350px)] 2xl:left-[calc(50%+500px)]", // position responsive,
                )}
            ></div>

            {/* describtion */}
            <p
                className={clsx(
                    "absolute z-50 w-3/4 -translate-x-1/2", // base
                    "text-balance text-center text-2xl sm:text-3xl", // text
                    "lg:w-[300px] xl:w-full", // dimension
                    "bottom-36 lg:bottom-40", // vertical position
                    "left-1/2 lg:left-[calc(50%+280px)] xl:left-[calc(50%+350px)] 2xl:left-[calc(50%+490px)]", // horizontal position
                )}
            >
                تولیدکننده انواع نرم‌افزارهای اداری و تجاری
            </p>

            {/* blue section */}
            <div
                className={clsx(
                    "absolute", // basic
                    "bottom-0 right-[calc(50%-90px)]", // position
                    "aspect-[1086/684] h-[480px] xl:h-[500px]", // dimension
                    "hidden lg:block", // visibility
                )}
            >
                <div className="relative h-full w-full">
                    <img
                        src="/assets/images/banner/blue-section.svg"
                        alt="blue section of banner"
                        onLoad={onLoad}
                        className={clsx(
                            "absolute z-10", // basic
                            "h-full w-full", // dimension
                            allLoaded ? "block" : "hidden", // loading
                        )}
                    />

                    <img // plant
                        src="/assets/images/banner/plant.svg"
                        alt="banner plant"
                        onLoad={onLoad}
                        className={clsx(
                            "absolute z-40 opacity-50", // basic
                            "w-[6%]", //dimensions
                            allLoaded ? "block" : "hidden", // loading
                            "left-[29%] top-[65%]", // position
                        )}
                    />
                    <img // girl
                        src="/assets/images/banner/girl.svg"
                        alt="banner girl"
                        onLoad={onLoad}
                        className={clsx(
                            "absolute z-40", // basic
                            "w-[17%]", // dimension
                            "bottom-[12%] left-[35%]", // position
                            allLoaded ? "block" : "hidden", // loading
                        )}
                    />
                    <img // boy
                        src="/assets/images/banner/boy.svg"
                        alt="banner man"
                        onLoad={onLoad}
                        className={clsx(
                            "absolute z-40 w-[32%]", // basic
                            "bottom-[12%] right-[15%]", // position
                            allLoaded ? "block" : "hidden", // loading
                        )}
                    />
                    <img // monitor
                        src="/assets/images/banner/monitor.svg"
                        alt="banner monitor"
                        onLoad={onLoad}
                        className={clsx(
                            "absolute z-40 w-[20%]", // basic
                            "left-[61%] top-[45%] -translate-x-1/2 -translate-y-1/2", // position
                            allLoaded ? "block" : "hidden", // loading
                        )}
                    />
                </div>
            </div>
        </div>
    )
}
