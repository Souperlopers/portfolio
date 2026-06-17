import { useState } from "react";
import { Link } from "@inertiajs/react";
import { AiFillHome } from "react-icons/ai";

const Header = () => {
    const [imgLoaded, setImgLoaded] = useState(false);
    return (
        <div className="px-5 py-2 w-full h-[75px] bg-secondary text-text-primary flex justify-between items-center">
            <Link href="/" className="flex gap-10">
                {!imgLoaded && (
                    <div className="bg-stone-400 h-16 w-24 rounded"></div>
                )}
                <img
                    src={`/assets/images/logo.svg`}
                    alt="SouperLopers"
                    className="object-cover w-full h-full"
                    onLoad={() => setImgLoaded(true)}
                    style={{ display: imgLoaded ? "block" : "none" }}
                />
            </Link>
            <div className="hover:scale-105 hover:text-sky-300 duration-300 transition-all">
                <Link href="/">
                    <AiFillHome size={32} />
                </Link>
            </div>
        </div>
    );
};

export default Header;
