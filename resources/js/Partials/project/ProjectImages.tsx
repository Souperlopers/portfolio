import { useState } from "react";
import { ProjectImage } from "@/types/project";

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
        <div className="lg:w-1/2 h-72 border border-neutral-700 rounded relative overflow-hidden">
            <img
                src={images[currentIndex].url}
                alt={`Project image ${currentIndex}`}
                className="w-full h-full object-cover rounded"
            />

            {imagesCount > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-5">
                    <span
                        className="w-28 py-1.5 text-center bg-pink-300 hover:bg-pink-400 cursor-pointer rounded transition-colors"
                        onClick={handlePrevBtn}
                    >
                        PREVIOUS
                    </span>
                    <span
                        className="w-28 py-1.5 text-center bg-pink-300 hover:bg-pink-400 cursor-pointer rounded transition-colors"
                        onClick={handleNextBtn}
                    >
                        NEXT
                    </span>
                </div>
            )}
        </div>
    );
};

export default ProjectImages;
