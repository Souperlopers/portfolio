import { useState } from "react"
import { clsx } from "clsx/lite"

export default function Hero() {
    const [imagesLoadedCount, setImagesLoadedCount] = useState(0)
    const allLoaded = imagesLoadedCount >= 6
    const onLoad = () => setImagesLoadedCount((prev) => prev + 1)

    return (
        <>
            {!allLoaded && <div className="skeleton h-[55vh] w-full"></div>}
            <div
                className={clsx(
                    "relative overflow-hidden", // basic
                    "h-[55vh] w-full", // dimensions
                )}
            >
                {/* white section */}
                <img
                    src="/assets/images/banner-images/Subtract2.svg"
                    alt="banner white section"
                    onLoad={onLoad}
                    className={clsx(
						allLoaded ? "block" : "hidden", // loading
                        "absolute", // basic
                        "aspect-[3042/510] max-w-[350vw]", // dimension
                        "translate-x-[50vw]", // position
                    )}
                />

                {/* logo */}
                <div
                    id="hero-logo"
                    className={clsx(
						allLoaded ? "block" : "hidden", // loading
                        "absolute z-50", // basic
                        "aspect-[313/90] w-3/4", // dimension
                        "left-1/2 top-[15%] -translate-x-1/2", // position,
                    )}
                ></div>

                {/* describtion */}
                <p
                    className={clsx(
                        "absolute z-50 w-3/4 pb-4", // base
                        "text-balance text-2xl xs:text-3xl", // text
                        "top-[calc()] sm-h:bottom-0", // vertical position
                        "left-1/2 -translate-x-1/2", // horizontal position
                    )}
                >
                    تولیدکننده انواع نرم‌افزارهای اداری و تجاری
                </p>

                <div className="absolute left-1/2 top-1/2 hidden aspect-[1086/684] h-[40vh] -translate-x-1/2 sm:visible">
                    <div className="relative h-full w-full">
                        <img // blue section
                            src="/assets/images/banner-images/Subtract.svg"
                            alt="blue section of banner"
                            onLoad={onLoad}
                            className={clsx(
                                "absolute z-10", // basic
                                "h-full w-full", // dimension
                                allLoaded ? "block" : "hidden", // loading
                            )}
                        />

                        <img // plant
                            src="/assets/images/banner-images/plant.svg"
                            alt="banner plant"
                            onLoad={onLoad}
                            className={clsx(
                                "absolute z-40 opacity-50", // basic
                                "w-[6%]", //dimensions
                                allLoaded ? "block" : "hidden", // loading
                                "left-[17%] top-[40%]", // position
                            )}
                        />
                        <img // girl
                            src="/assets/images/banner-images/Girl.svg"
                            alt="banner girl"
                            onLoad={onLoad}
                            className={clsx(
                                "absolute z-40", // basic
                                "w-[14%]", // dimension
                                "bottom-[8%] left-[35%]", // position
                                allLoaded ? "block" : "hidden", // loading
                            )}
                        />
                        <img // boy
                            src="/assets/images/banner-images/MAAAN.svg"
                            alt="banner man"
                            onLoad={onLoad}
                            className={clsx(
                                "absolute z-40 w-[28%]", // basic
                                "bottom-[15%] right-[20%]", // position
                                allLoaded ? "block" : "hidden", // loading
                            )}
                        />
                        <img // monitor
                            src="/assets/images/banner-images/monitor.svg"
                            alt="banner monitor"
                            onLoad={onLoad}
                            className={clsx(
                                "absolute z-40 w-[20%]", // basic
                                "left-[55%] top-[45%] -translate-x-1/2 -translate-y-1/2", // position
                                allLoaded ? "block" : "hidden", // loading
                            )}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
