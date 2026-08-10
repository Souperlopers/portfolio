import { ProjectLinks } from "@/types/project"
import { Link } from "@inertiajs/react"

export default function DetailButtons({ links }: { links: ProjectLinks }) {
	const linkLoop = Object.entries(links).filter(
		(link: string[]) => link[1] !== null,
	)

	return (
		<>
			{linkLoop.map((link) => (
				<Link key={link[0]} href={link[1]}>
					<button
						className={`bg-btn-primary hover:bg-btn-hover w-24 rounded-lg px-3 py-2 text-[15px] duration-300 md:w-32`}
					>
						<span>{link[0]}</span>
					</button>
				</Link>
			))}
		</>
	)
}
