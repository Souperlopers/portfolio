import { useState } from "react";

const Banner = ({ fileName }: { fileName: string }) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    return (
        <div className="h-96 w-full relative rounded">
            <div className="flex justify-end w-full h-full">
                {!imgLoaded && (
                    <div className="lg:w-full lg:h-96 md:w-full md:h-42 sm:w-24 sm:h-32 w-20 h-28 bg-neutral-500" />
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
