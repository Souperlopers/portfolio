import { useState } from "react";
import { Link } from "@inertiajs/react";

export function Logo() {
    const [imagesLoadedCount, setImagesLoadedCount] = useState(0);
    const onLoad = () => setImagesLoadedCount((prev) => prev + 1);
    const allLoaded = imagesLoadedCount >= 2;

    return (
        <Link href="/" className={`relative w-20 h-12 lg:mr-5 mr-2`}>
            <img
                src={`/assets/images/logo-images/souper.svg`}
                alt="Souper"
                onLoad={onLoad}
                className={`absolute lg:w-[55px] w-11 top-0 right-1`}
                style={{ display: allLoaded ? "block" : "none" }}
            />
            <img
                src={'/assets/images/logo-images/lopers.svg'}
                alt="Lopers"
                onLoad={onLoad}
                className={`absolute lg:w-[55px] w-11 top-5 right-5`}
                style={{ display: allLoaded ? "block" : "none" }}
            />
        </Link>
    );
}
