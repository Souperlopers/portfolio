import { ProjectLinks } from "@/types/project"
import clsx from "clsx"

export default function DetailButtons({ links }: { links: ProjectLinks }) {
	const linkLoop = Object.entries(links).filter(
		(link: string[]) => link[1] !== null,
	)

	return (
		<>
			{linkLoop.map((link) => (
				<a key={link[0]} href={link[1]} target="_blank">
					<button
						className={clsx(
							"w-24 md:w-32", // dimension
							"px-3 py-2", // padding
							"bg-btn-primary rounded-lg text-[15px]", // base
							"hover:bg-btn-hover hover:cursor-pointer", // hover
							"duration-300", // animation
						)}
					>
						<span>{link[0]}</span>
					</button>
				</a>
			))}
		</>
	)
}
