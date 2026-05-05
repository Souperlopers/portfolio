import { useState } from "react";
import { Member } from "@/types/member";

const Profile = ({ info }: { info: Member }) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    return (
        <div className="flex justify-between gap-3 w-full rounded">
            <div className="w-1/6">
                {!imgLoaded && (
                    <div className="lg:w-48 lg:h-48 md:w-full md:h-42 sm:w-24 sm:h-32 w-20 h-28 bg-neutral-500" />
                )}
                <img
                    src={info.thumbnail}
                    alt={`${info.name} cover`}
                    className="rounded-full w-48 h-48 bg-cover"
                    onLoad={() => setImgLoaded(true)}
                    style={{ display: imgLoaded ? "block" : "none" }}
                />
            </div>
            <div className="flex flex-col gap-5 w-5/6 py-3 bg-pink-200">
                <span>{info.name}</span>
                <span>{info.position}</span>
            </div>
        </div>
    );
};

export default Profile;
