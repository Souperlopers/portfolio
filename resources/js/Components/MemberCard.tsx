import { Link } from "@inertiajs/react"
import { MemberBrief } from "@/types/member"
import TagsComponent from "@/Components/TagsComponent"
import { MemberAvatar } from "@/Partials/member/Avatar"
import clsx from "clsx"

export default function MemberCard({
	memberData,
}: {
	memberData: MemberBrief
}) {
	const {
		name = "بدون نام",
		position = "بدون سمت",
		thumbnail,
		url,
		skills = [],
	} = memberData

	return (
		<div
			className={clsx(
				"w-full max-w-65 sm:max-w-87.5", // dimension
				"rounded-2xl", // container
				"bg-base-200", // background color
				"border-primary/10 border", // border
				"px-4 py-5 md:px-4 md:py-7", // padding
				"flex flex-col items-center gap-3 md:gap-4", // flex
				"shadow-[0_10px_30px_rgba(0,0,0,.25)]", // shadow
				"group hover:border-primary/25 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(47,91,255,.14)]", // hover
				"transition-all duration-300", // animation
			)}
		>
			{/* image */}
			<div
				className={clsx(
					"flex shrink-0 items-center justify-center", // flex
					"relative", // position
				)}
			>
				{/* Glow */}
				<div
					className={clsx(
						"absolute inset-0", // position
						"rounded-full", // container
						"bg-primary/15 blur-xl", // background color
						"group-hover:bg-primary/25 group-hover:scale-125", // hover
					)}
				/>

				{/* thumbnail */}
				<MemberAvatar
					name={name}
					thumbnail={thumbnail}
					className={clsx(
						"h-20 w-20", // dimension
					)}
				/>
			</div>

			{/* info */}
			<div
				className={clsx(
					"w-full", // dimension
					"flex flex-col items-center gap-1", // flex
				)}
			>
				<h3
					className={clsx(
						"text-base-content font-semibold", // text
						"text-base md:text-lg lg:text-xl", // text responsive
						"max-w-55 truncate md:max-w-65", // truncate
					)}
				>
					{name}
				</h3>
				<p
					className={clsx(
						"text-base-content/70", // text
						"text-xs md:text-sm", // text responsive
						"max-w-55 truncate md:max-w-65", // truncate
					)}
				>
					{position}
				</p>
			</div>

			{/* tags */}
			<div className="min-h-10 w-full grow-0 md:grow">
				<TagsComponent tags={skills} center />
			</div>

			{/* button */}
			<Link
				href={url}
				className={clsx(
					"w-full", // dimension
					"rounded-lg", // container
					"py-1.5 md:py-2", // padding
					"border-primary border", // border
					"text-primary text-center font-medium", // text
					"text-sm md:text-base", // text responsive
					"hover:border-primary/30 hover:bg-primary/10", // hover
				)}
			>
				مشاهده پروفایل
			</Link>
		</div>
	)
}
