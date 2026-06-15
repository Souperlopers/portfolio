import { useState } from "react";

const Banner = ({ fileName }: { fileName: string }) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    return (
        <div className="w-full h-36 sm:h-48 md:h-64 lg:h-96 relative rounded">
            <div className="flex justify-end lg:w-full lg:h-full md:w-full md:h-42 w-full overflow-hidden">
                {!imgLoaded && (
                    <div className="w-full h-full bg-neutral-300 animate-pulse absolute inset-0" />
                )}
                <img
                    src={`/assets/images/${fileName}`}
                    alt="banner"
                    className="object-cover w-full h-full"
                    onLoad={() => setImgLoaded(true)}
                    style={{ display: imgLoaded ? "block" : "none" }}
                />
            </div>
        </div>
    );
};

export default Banner;
