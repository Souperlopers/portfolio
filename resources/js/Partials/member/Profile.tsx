import { useState } from "react";
import { Member } from "@/types/member";

const Profile = ({ info }: { info: Member }) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    return (
        <div className="flex flex-col justify-between gap-3 w-full rounded">
            <div className="w-full h-48 bg-stone-400 rounded relative">
                <div className="lg:w-1/6 w-full flex justify-center absolute top-20">
                    {!imgLoaded && (
                        <div className="lg:w-48 lg:h-48 md:w-full md:h-42 sm:w-24 sm:h-32 w-20 h-28 bg-neutral-500 rounded-full" />
                    )}
                    <img
                        src={info.thumbnail}
                        alt={`${info.name} cover`}
                        className="rounded-full w-48 h-48 object-cover"
                        onLoad={() => setImgLoaded(true)}
                        style={{ display: imgLoaded ? "block" : "none" }}
                    />
                </div>
            </div>
            <div className="flex flex-col justify-between lg:w-5/6 w-full border border-white/40 rounded-xl p-5 shadow-lg shadow-primary/10 mt-24">
                <div className="flex flex-col gap-1">
                    <span className="text-text-primary text-3xl font-bold">
                        {info.name}
                    </span>
                    <span className="text-accent text-base font-semibold">
                        {info.position}
                    </span>
                </div>
                <span className="text-white/80 text-lg font-semibold">
                    {info.description}
                </span>
            </div>
        </div>
    );
};

export default Profile;
