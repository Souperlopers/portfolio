const Banner = ({ fileName }: { fileName: string }) => {
    return (
        <div className="h-full w-full relative rounded bg-[#1a222c]">
            <div className="flex justify-end w-full h-full">
                <img
                    src={`/assets/images/${fileName}`}
                    alt="banner"
                    className="object-center rounded"
                />
            </div>
            <div className="absolute lg:bottom-0 bottom-1 lg:-left-1 -left-11 mx-11 lg:py-2 lg:w-[32.9%] flex justify-between gap-5 text-white font-bold bg-[#1a222c]">
                <button className="bg-gray-200 px-5 py-3 rounded font-semibold lg:text-lg text-xs text-[#1a222c] cursor-pointer">
                    دریافت رزومه
                </button>
                <button className="bg-cyan-600 lg:px-10 lg:py-3 px-2 py-1 rounded font-semibold lg:text-lg text-xs text-white cursor-pointer">
                    تماس با ما
                </button>
            </div>
        </div>
    );
};

export default Banner;
