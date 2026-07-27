import { ReactNode, useRef, useState } from "react"
import { ProjectImage } from "@/types/project"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/image-gallery.css"
import "./ProjectImageStyle.css"
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery"
import clsx from "clsx/lite"

export default function ProjectImages({ images }: { images: ProjectImage[] }) {
    const galleryRef = useRef<ImageGalleryRef>(null)
    const indexSeparator = "###"

    // dont show gallery if there are no images
    if (!images.length) return null

    // make project images compatible to gallery library
    const items: GalleryItem[] = images.map((image, index) => ({
        original: image.url,
        thumbnail: image.url,
        description: index.toString().concat(indexSeparator, image.description),
    }))

    // track loading state per image index
    const [loadedStates, setLoadedStates] = useState<boolean[]>(
        items.map(() => false),
    )

    // set loaded function
    const markAsLoaded = (index: number) => {
        setLoadedStates((prev) => {
            const newState = [...prev]
            newState[index] = true
            return newState
        })
    }

    // get loaded function
    const isImageLoaded = (index: number) => loadedStates[index]

    // image renderer funciton
    const renderImage = (item: GalleryItem, isThumbnail: boolean) => {
        // separate index from description
        const separated = item.description?.split(indexSeparator) || []
        const index = Number(separated[0])
        const description = separated.slice(1).join("")

        // check if image is loaded or not
        const isLoaded = isImageLoaded(index)

        return (
            <>
                <img
                    onLoad={(e) => markAsLoaded(index)}
                    className={clsx(
                        !isLoaded && "skeleton", // loading
                        "aspect-[16/9]", // dimesnion
                        isThumbnail // default library classes
                            ? "image-gallery-thumbnail-image"
                            : "image-gallery-image",
                    )}
                    alt={isThumbnail ? item.thumbnailAlt : item.originalAlt}
                    src={isThumbnail ? item.thumbnail : item.original}
                />
                {!isThumbnail && description && (
                    <span dir="rtl" className="image-gallery-description">
                        {description}
                    </span>
                )}
            </>
        )
    }

    return (
        <div dir="ltr" className="w-full lg:max-w-[800px]">
            <ImageGallery
                ref={galleryRef}
                items={items}
                showPlayButton={false}
                useTranslate3D={false}
                infinite
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
