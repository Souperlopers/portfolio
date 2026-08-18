import { useRef, useState } from "react"
import { ProjectImage } from "@/types/project"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/image-gallery.css"
import "./ProjectImageStyle.css"
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery"
import clsx from "clsx/lite"
import { CiImageOn } from "react-icons/ci"

export default function ProjectImages({ images }: { images: ProjectImage[] }) {
	const galleryRef = useRef<ImageGalleryRef>(null)
	const indexSeparator = "###"
	const image = []
	const hasImages = images.length ? true : false

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
	const renderImage = (item: GalleryItem, type: "thumbnail" | "main") => {
		const isThumbnail = type === "thumbnail"

		// separate index from description
		const separated = item.description?.split(indexSeparator) || []
		const index = Number(separated[0])
		const description = separated.slice(1).join("")

		// check if image is loaded or not
		const isLoaded = isImageLoaded(index)

		return (
			<>
				<div
					className={clsx(
						!isLoaded && "skeleton aspect-video", // skeleton
						"flex flex-col items-stretch justify-center", // flex
						"h-full w-full", // dimension
					)}
				>
					<img
						onLoad={(e) => markAsLoaded(index)}
						alt={isThumbnail ? item.thumbnailAlt : item.originalAlt}
						src={isThumbnail ? item.thumbnail : item.original}
						className={clsx(
							"max-h-full object-contain", // dimesnion
							isThumbnail
								? clsx(
										"image-gallery-thumbnail-image", // default library for thumbnail
										"rounded-md", // border
									)
								: clsx(
										"image-gallery-image", // default library
										"rounded-2xl", // border
									),
						)}
					/>
				</div>
				{!isThumbnail && description && (
					<span dir="rtl" className="image-gallery-description">
						{description}
					</span>
				)}
			</>
		)
	}

	return (
		<div dir="ltr" className="w-full lg:max-w-162.5">
			{hasImages ? (
				<ImageGallery
					ref={galleryRef}
					items={items}
					showPlayButton={false}
					useTranslate3D={false}
					infinite
					additionalClass={clsx(
						"rounded-2xl border border-primary/10", // border
						"p-2 md:p-4", // margin and padding
						"hover:border-primary/20 hover:shadow-[0_18px_45px_rgba(47,91,255,.12)]", // hover
						"bg-base-200 shadow-[0_10px_30px_rgba(0,0,0,.25)]", // background
					)}
					renderThumbInner={(item: GalleryItem) =>
						renderImage(item, "thumbnail")
					}
					renderItem={(item: GalleryItem) =>
						renderImage(item, "main")
					}
				/>
			) : (
				<div
					className={clsx(
						"min-h-80 w-full", // dimension
						"rounded-xl", // container
						"flex flex-col items-center justify-center gap-10", // flex
						"border-neutral/20 border-2", // border
					)}
				>
					<CiImageOn
						className={clsx(
							"rotate-[-20deg] opacity-25", // display
						)}
						size={90}
					/>
					<span
						dir="rtl"
						className={clsx(
							"text-neutral dark:text-neutral/60 text-base", // text
						)}
					>
						تصویری برای پروژه موجود نیست.
					</span>
				</div>
			)}
		</div>
	)
}
