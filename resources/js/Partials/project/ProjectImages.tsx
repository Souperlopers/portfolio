import { ReactNode, useRef, useState } from "react"
import { ProjectImage } from "@/types/project"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/image-gallery.css"
import "./ProjectImageStyle.css"
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery"
import clsx from "clsx/lite"

const ProjectImages = ({ images }: { images: ProjectImage[] }) => {
    const galleryRef = useRef<ImageGalleryRef>(null)

    const items: GalleryItem[] = images.map((image) => ({
        original: image.url,
        thumbnail: image.url,
    }))

    if (!items.length) return null

    // skeleton states and rendered nodes
    const [loadedCount, setLoadedCount] = useState(0)
    const allLoaded = loadedCount >= items.length

    const renderImage = (item: GalleryItem, isThumbnail: boolean) => (
        <div
            className={clsx(
                allLoaded ? "block" : "skeleton", // skeleton
                "flex items-center justify-center", // flex
                "aspect-[16/9] h-full w-full", // dimesnion
            )}
        >
            <img
                onLoad={(e) => setLoadedCount((prev) => prev + 1)}
                className={clsx(
                    !allLoaded && "hidden", // loading
                    !isThumbnail && "image-gallery-image", // main image class
                    isThumbnail && "image-gallery-thumbnail-image", // thumbnail class
                )}
                alt={item.originalAlt}
                src={isThumbnail ? item.thumbnail : item.original}
            />
        </div>
    )

    return (
        <div dir="ltr" className="w-full lg:max-w-[800px]">
            <ImageGallery
                ref={galleryRef}
                items={items}
                showPlayButton={false}
                useTranslate3D={false}
                infinite
                lazyLoad
                showThumbnails
                additionalClass={clsx(
                    "rounded-2xl border border-primary/10", // border
                    "p-2 md:p-4", // margin and padding
                    "transition-all duration-300", // animation
                    "hover:border-primary/20 hover:shadow-[0_18px_45px_rgba(47,91,255,.12)]", // hover
                    "bg-gradient-to-b from-base-200 to-[#0B1120] shadow-[0_10px_30px_rgba(0,0,0,.25)]", // background
                )}
                renderThumbInner={(item: GalleryItem) =>
                    renderImage(item, true)
                }
                renderItem={(item: GalleryItem) => renderImage(item, false)}
            />
        </div>
    )
}

export default ProjectImages
