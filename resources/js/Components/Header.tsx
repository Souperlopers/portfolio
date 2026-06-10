import React, { useState } from "react";
import { Link } from "@inertiajs/react";

const Header = () => {
    const [imgLoaded, setImgLoaded] = useState(false);
    return (
        <div className="px-5 py-2 w-full bg-secondary text-text-primary flex justify-between items-center">
            <Link href="/" className="flex gap-10">
                {!imgLoaded && <div className="bg-neutral-200" />}
                <img
                    src={`/assets/images/logo.svg`}
                    alt="logo"
                    className="object-center"
                    onLoad={() => setImgLoaded(true)}
                    style={{ display: imgLoaded ? "block" : "none" }}
                />
            </Link>
            <div>
                <ul className="flex gap-5 flex-row-reverse">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Members</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
