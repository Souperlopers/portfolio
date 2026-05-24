import { useState } from "react";
import { Member } from "@/types/member";

const Profile = ({ info }: { info: Member }) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    return (
        <div className="flex justify-between gap-3 w-full rounded">
            <div className="lg:w-1/6 w-1/3">
                {!imgLoaded && (
                    <div className="lg:w-48 lg:h-48 md:w-full md:h-42 sm:w-24 sm:h-32 w-20 h-28 bg-neutral-500 rounded-full" />
                )}
                <img
                    src={info.thumbnail}
                    alt={`${info.name} cover`}
                    className="rounded-full lg:w-48 lg:h-48 w-28 h-28 bg-cover"
                    onLoad={() => setImgLoaded(true)}
                    style={{ display: imgLoaded ? "block" : "none" }}
                />
            </div>
            <div className="flex flex-col gap-5 lg:w-5/6 w-2/3 py-3 bg-pink-200">
                <span>{info.name}</span>
                <span>{info.position}</span>
            </div>
        </div>
    );
};

export default Profile;
