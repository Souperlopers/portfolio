import { useRef } from "react";
import { ProjectImage } from "@/types/project";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import "./ProjectImageStyle.css";
import type { ImageGalleryRef } from "react-image-gallery";

const ProjectImages = ({ images }: { images: ProjectImage[] }) => {
    const galleryRef = useRef<ImageGalleryRef>(null);

    const items = images.map((image) => ({
        original: image.url,
        thumbnail: image.url,
    }));

    if (!items.length) return null;

    return (
        <div
            dir="ltr"
            className="w-full lg:max-w-[800px] rounded-2xl border border-primary/10 bg-gradient-to-b from-base-200 to-[#0B1120] md:p-4 p-2 shadow-[0_10px_30px_rgba(0,0,0,.25)] transition-all duration-300 hover:border-primary/20 hover:shadow-[0_18px_45px_rgba(47,91,255,.12)]"
        >
            <ImageGallery
                ref={galleryRef}
                items={items}
                showPlayButton={false}
                showFullscreenButton={false}
                useTranslate3D={false}
            />
        </div>
    );
};

export default ProjectImages;