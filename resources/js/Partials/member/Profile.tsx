import { useState } from "react";
import { Member } from "@/types/member";

const Profile = ({ info }: { info: Member }) => {
    console.log(info);
    
    const [imgLoaded, setImgLoaded] = useState(false);
    return (
        <div className="flex flex-col justify-between md:gap-32 gap-20 w-full rounded">
            {/* banner, image */}
            <div className="w-full h-56 bg-stone-400 rounded relative avatar">
                <div className="md:w-48 md:h-48 w-32 h-32 flex justify-center absolute md:top-32 top-40 md:right-5 right-2 rounded-full border-4 border-b-sky-600 overflow-hidden">
                    {!imgLoaded && (
                        <div className="lg:w-48 lg:h-48 md:w-full md:h-42 sm:w-24 sm:h-32 w-20 h-28 bg-neutral-500 rounded-full" />
                    )}
                    <img
                        src={info.thumbnail}
                        alt={`${info.name} cover`}
                        className="w-full h-full object-cover"
                        onLoad={() => setImgLoaded(true)}
                        style={{ display: imgLoaded ? "block" : "none" }}
                    />
                </div>
            </div>
            <div className="flex flex-col justify-between gap-5 w-full px-5">
                <div className="flex flex-col gap-3">
                    {/* name */}
                    <span className="text-text-primary md:text-4xl text-2xl font-semibold truncate md:max-w-[800px] overflow-hidden">
                    {info.name}
                    </span>
                    {/* position */}
                    <span className="text-stone-400 md:text-base text-sm font-semibold truncate md:max-w-[800px] overflow-hidden">
                        {info.position}
                    </span>
                </div>
                {/* description */}
                <span className="text-white/80 md:text-lg text-base font-semibold">
                    {info.description}
                </span>
            </div>
        </div>
    );
};

export default Profile;
