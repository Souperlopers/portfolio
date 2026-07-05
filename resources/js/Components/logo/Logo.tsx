import { useState } from "react";
import { Link } from "@inertiajs/react";

// images src
const souperSrc = "/assets/images/logo-images/souper.svg";
const lopersSrc = "/assets/images/logo-images/lopers.svg";

// styles
const containerStyle =               "relative w-20 h-12 lg:mr-5 mr-2" ;
const commonStyle    =               "absolute lg:w-[55px] w-11 "      ;
const souperStyle    = commonStyle + "top-0 right-1"                   ;
const lopersStyle    = commonStyle + "top-5 right-5"                   ;

const TOTAL_IMAGES = 2;

const Logo = () => {
    const [imagesLoadedCount, setImagesLoadedCount] = useState(0);
    const onLoad = () => setImagesLoadedCount((prev) => prev + 1);
    const allLoaded = imagesLoadedCount >= TOTAL_IMAGES;

    return (
        <Link href="/" className={containerStyle}>
            <img
                src={souperSrc}
                alt="Souper"
                onLoad={onLoad}
                className={souperStyle}
                style={{ display: allLoaded ? "block" : "none" }}
            />
            <img
                src={lopersSrc}
                alt="Lopers"
                onLoad={onLoad}
                className={lopersStyle}
                style={{ display: allLoaded ? "block" : "none" }}
            />
        </Link>
    );
};

export default Logo;
