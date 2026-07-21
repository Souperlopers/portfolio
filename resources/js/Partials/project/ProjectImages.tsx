import { useRef } from "react";
import { ProjectImage } from "@/types/project";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import "./ProjectImageStyle.css"
import type { ImageGalleryRef } from "react-image-gallery";

const ProjectImages = ({ images }: { images: ProjectImage[] }) => {
    const items = images.map((image) => ({
        original: image.url,
        thumbnail: image.url,
    }));

    const galleryRef = useRef<ImageGalleryRef>(null);

    if (items.length === 0) return null;

    return (
        <div className="w-full lg:max-w-[900px] overflow-hidden" dir="ltr">
            <div>
                <ImageGallery
                    ref={galleryRef}
                    items={items}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    useTranslate3D={false}
                    onSlide={(index) => console.log("Slid to", index)}
                />
            </div>
        </div>
    );
};

export default ProjectImages;
