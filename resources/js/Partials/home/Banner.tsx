const Banner = ({ fileName }: { fileName: string }) => {
    return (
        <div className="h-96 w-full relative rounded bg-[#1a222c]">
            <div className="flex justify-end w-full h-full">
                <img
                    src={`/assets/images/${fileName}`}
                    alt="banner"
                    className="object-center rounded"
                />
            </div>
        </div>
    );
};

export default Banner;
