import banner from "../../../../../public/assets/banner.jpg";
const Banner = () => {
    return (
        <div className="h-full relative rounded bg-black">
            <div className="flex w-full h-full">
                <img src={banner} alt="banner" className="object-center rounded" />
            </div>
            <div className="absolute bottom-5 -left-0.5 mx-11 py-2 w-[35.9%] flex justify-between text-white font-bold bg-[#1a222c]">
                <button className="bg-gray-200 px-10 py-3 rounded font-semibold text-lg text-[#1a222c] cursor-pointer">
                    دریافت رزومه
                </button>
                <button className="bg-cyan-600 px-16 py-3 rounded font-semibold text-lg text-white cursor-pointer">
                    تماس با ما
                </button>
            </div>
        </div>
    );
};

export default Banner;
