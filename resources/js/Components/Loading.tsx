import { useState } from "react";

const Loading = () => {
    const [logoLoaded, setLogoLoaded] = useState(false);

    return (
        <div className="fixed inset-0 w-full h-dvh flex justify-center items-center bg-stone-950 z-[100]">
            <div
                className={`flex flex-col items-center md:gap-5 gap-2 transition-opacity duration-200 ${
                    logoLoaded ? "opacity-100" : "opacity-0"
                }`}
            >
                <div className="md:w-48 w-28 overflow-hidden">
                    <img
                        src="/assets/images/logo.svg"
                        alt="SouperLopers"
                        className="object-cover w-full h-full"
                        onLoad={() => setLogoLoaded(true)}
                    />
                </div>
                <span className="loading loading-dots md:loading-xl loading-md"></span>
            </div>
        </div>
    );
};

export default Loading;
