import { ProjectLinks } from "@/types/project"
import { FaGithub } from "react-icons/fa"
import { SiFigma } from "react-icons/si"
import clsx from "clsx"

export default function DetailButtons({
	links = {},
}: {
	links?: ProjectLinks
}) {
	return (
		<>
			{Object.entries(links).map(([key, value]) => (
				<a key={key} href={value} target="_blank">
					<button
						className={clsx(
							"h-full w-fit", // dimension
							"px-3 py-2", // padding
							"bg-btn-primary rounded-lg text-[15px]", // base
							"hover:bg-btn-hover hover:cursor-pointer", // hover
						)}
					>
						<span
							className={clsx(
								"flex flex-row-reverse items-center gap-2", // flex
								"text-2xl", // text
							)}
						>
							{keyMap[key as keyof ProjectLinks]}
						</span>
					</button>
				</a>
			))}
		</>
	)
}

const keyMap: Record<keyof ProjectLinks, JSX.Element> = {
	preview: (
		<>
			<p>پیش‌نمایش</p>
		</>
	),
	github: (
		<>
			<p className="pt-1">Github</p> <FaGithub size={25} />
		</>
	),
	figma: (
		<>
			<p className="pt-1">Figma</p> <SiFigma size={25} />
		</>
	),
}
