import banner from "../../../../public/assets/banner.jpg";
const Banner = () => {
    return (
        <div className="h-full w-full relative rounded bg-[#1a222c]">
            <div className="flex justify-end w-full h-full">
                <img src={banner} alt="banner" className="object-center rounded" />
            </div>
            <div className="absolute bottom-0 -left-1 mx-11 py-2 w-[32.9%] flex justify-between text-white font-bold bg-[#1a222c]">
                <button className="bg-gray-200 px-5 py-3 rounded font-semibold text-lg text-[#1a222c] cursor-pointer">
                    دریافت رزومه
                </button>
                <button className="bg-cyan-600 px-10 py-3 rounded font-semibold text-lg text-white cursor-pointer">
                    تماس با ما
                </button>
            </div>
        </div>
    );
};

export default Banner;
