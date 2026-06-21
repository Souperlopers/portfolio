const BannerImage = () => {
    return (
        <div className="relative w-full h-full">
            <img
                src="/assets/images/banner-images/Subtract.svg"
                alt="banner bg"
                className="absolute -left-28 -top-0 z-10 w-[1200px] h-[500px]"
            />
            <img
                src="/assets/images/banner-images/Subtract2.svg"
                alt="banner bg2"
                className="absolute z-0 w-[3000px] h-[300px]"
            />
            <div className="absolute bottom-32 right-28 z-50 text-2xl lg:text-3xl font-vazir text-white drop-shadow-2xl">
                تیم توسعه‌ نرم افزار
            </div>
            <img
                src="/assets/images/banner-images/Girl.svg"
                alt="girl"
                className="absolute left-[18%] bottom-16 z-50"
            />

            <img
                src="/assets/images/banner-images/MAAAN.svg"
                alt="man"
                className="absolute left-[38%] bottom-16 z-50"
            />

            <img
                src="/assets/images/banner-images/monitor.svg"
                alt="monitor"
                className="absolute left-[28%] top-24 z-50 w-52"
            />

            <img
                src="/assets/images/banner-images/plant.svg"
                alt="plant"
                className="absolute left-[13%] bottom-20 z-50"
            />
        </div>
    );
};

export default BannerImage;
