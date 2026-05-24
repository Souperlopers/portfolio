import { useState } from "react";
import { ProjectImage } from "@/types/project";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const ProjectImages = ({ images }: { images: ProjectImage[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imagesCount = images.length;

    const handlePrevBtn = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imagesCount - 1 : prevIndex - 1,
        );
    };

    const handleNextBtn = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === imagesCount - 1 ? 0 : prevIndex + 1,
        );
    };

    if (imagesCount === 0) return null;

    return (
        <div className="lg:w-1/2 h-72 border border-neutral-700 rounded-xl relative overflow-hidden">
            <img
                src={images[currentIndex].url}
                alt={`Project image ${currentIndex}`}
                className="w-full h-full object-cover rounded"
            />

            {imagesCount > 1 && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-5 text-neutral-800">
                    <span
                        className="py-1.5 px-1.5 rounded-full text-center hover:text-sky-500 bg-white/40 hover:bg-white/70 cursor-pointer transition-colors"
                        onClick={handlePrevBtn}
                    >
                        <FaChevronRight size={24} />
                    </span>
                    <span
                        className="py-1.5 px-1.5 rounded-full text-center hover:text-sky-500 bg-white/40 hover:bg-white/70 cursor-pointer transition-colors"
                        onClick={handleNextBtn}
                    >
                        <FaChevronLeft size={24} />
                    </span>
                </div>
            )}
        </div>
    );
};

export default ProjectImages;
