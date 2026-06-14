import { useState } from "react";
import { Link } from "@inertiajs/react";

const Header = () => {
    const [imgLoaded, setImgLoaded] = useState(false);
    return (
        <div className="px-5 py-2 w-full h-[75px] bg-secondary text-text-primary flex justify-between items-center">
            <Link href="/" className="flex gap-10">
                {!imgLoaded && <div className="bg-stone-400 h-16 w-24 rounded"></div>}
                <img
                    src={`/assets/images/logo.svg`}
                    alt="SouperLopers"
                    className="object-cover w-full h-full"
                    onLoad={() => setImgLoaded(true)}
                    style={{ display: imgLoaded ? "block" : "none" }}
                />
            </Link>
            <div>
                <ul className="flex gap-5 flex-row-reverse">
                    <Link href="/">Home</Link>
                    <li>Projects</li>
                    <li>Members</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
