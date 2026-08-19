import { useState } from "react"
import { clsx } from "clsx/lite"

const HERO_DESCRIPTION = "سوپرلوپرز؛ تولیدکننده انواع نرم‌افزارهای اداری و تجاری"

export default function Hero() {
	const [imagesLoadedCount, setImagesLoadedCount] = useState(0)
	const allLoaded = imagesLoadedCount >= 6
	const onLoad = () => setImagesLoadedCount((prev) => prev + 1)

	return (
		<div //
			className={clsx(
				!allLoaded && "skeleton", // skeleton
				"relative overflow-x-hidden", // basic
				"h-[450px]", // dimensions
			)}
		>
			{/* white section */}
			<img
				src="/assets/images/banner/white-section.svg"
				alt="banner white section"
				onLoad={onLoad}
				className={clsx(
					allLoaded ? "block" : "hidden", // loading
					"absolute -translate-x-1/2", // basic
					"aspect-[3042/510] h-[calc(100%-10px)] max-w-none", // dimension
					"left-[calc(50%-500px)] lg:left-[calc(50%-150px)] 2xl:left-1/2", // position
					"brightness-150 dark:brightness-[0.4] dark:contrast-[2] dark:saturate-0", // switch colors
					"drop-shadow-[5px_0px_6px] dark:drop-shadow-[5px_0px_6px_rgba(0,0,0,0.3)]", // shadow
				)}
			/>

			{/* logo */}
			<div
				id="hero-logo"
				className={clsx(
					allLoaded ? "block" : "hidden", // loading
					"absolute z-50 -translate-x-1/2", // basic
					"aspect-[313/90] max-w-[450px]", // dimension basic
					"w-3/4 lg:w-[350px] xl:w-[600px]", // dimension responsive
					"top-14 left-1/2 lg:left-[calc(50%+290px)] xl:left-[calc(50%+350px)] 2xl:left-[calc(50%+500px)]", // position responsive,
				)}
			></div>

			{/* describtion */}
			<p
				className={clsx(
					"absolute z-50 -translate-x-1/2", // base
					"text-base-content text-center text-2xl text-balance sm:text-3xl", // text
					"w-3/4 lg:w-[400px] xl:w-[500px]", // dimension
					"bottom-36 lg:bottom-40", // vertical position
					"left-1/2 lg:left-[calc(50%+280px)] xl:left-[calc(50%+350px)] 2xl:left-[calc(50%+490px)]", // horizontal position
				)}
			>
				{HERO_DESCRIPTION}
			</p>

			{/* blue section */}
			<div
				className={clsx(
					"absolute", // basic
					"right-[calc(50%-90px)] bottom-4", // position
					"aspect-[1086/684] h-[480px] xl:h-[500px]", // dimension
					"hidden lg:block", // visibility
				)}
			>
				<div className="relative h-full w-full">
					<img
						src="/assets/images/banner/blue-section.svg"
						alt="blue section of banner"
						onLoad={onLoad}
						className={clsx(
							"absolute z-10", // basic
							"h-full w-full", // dimension
							"brightness-150 saturate-[.7] dark:brightness-[0.4] dark:saturate-[1.2]", // color switch
							allLoaded ? "block" : "hidden", // loading
							"drop-shadow-[5px_0px_6px] dark:drop-shadow-[5px_0px_6px_rgba(0,0,0,0.3)]", // outer shadow
						)}
					/>

					<img // plant
						src="/assets/images/banner/plant.svg"
						alt="banner plant"
						onLoad={onLoad}
						className={clsx(
							"absolute z-40 dark:opacity-50", // basic
							"w-[6%]", //dimensions
							allLoaded ? "block" : "hidden", // loading
							"top-[65%] left-[29%]", // position
							"invert dark:invert-0", // color switch
						)}
					/>
					<img // girl
						src="/assets/images/banner/girl.svg"
						alt="banner girl"
						onLoad={onLoad}
						className={clsx(
							"absolute z-40", // basic
							"w-[17%]", // dimension
							"bottom-[12%] left-[35%]", // position
							allLoaded ? "block" : "hidden", // loading
							"invert dark:invert-0", // color switch
						)}
					/>
					<img // boy
						src="/assets/images/banner/boy.svg"
						alt="banner man"
						onLoad={onLoad}
						className={clsx(
							"absolute z-40 w-[32%]", // basic
							"right-[15%] bottom-[12%]", // position
							allLoaded ? "block" : "hidden", // loading
							"invert dark:invert-0", // color switch
						)}
					/>
					<img // monitor
						src="/assets/images/banner/monitor.svg"
						alt="banner monitor"
						onLoad={onLoad}
						className={clsx(
							"absolute z-40 w-[20%]", // basic
							"top-[45%] left-[61%] -translate-x-1/2 -translate-y-1/2", // position
							allLoaded ? "block" : "hidden", // loading
						)}
					/>
				</div>
			</div>
		</div>
	)
}
