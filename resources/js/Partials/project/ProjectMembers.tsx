import MemberCard from "@/Components/MemberCard"
import { MemberBrief } from "@/types/member"
import clsx from "clsx"

export default function ProjectMembers({
	contributors,
}: {
	contributors: MemberBrief[]
}) {
	return (
		<div
			className={clsx(
				"grid grid-cols-[repeat(auto-fit,300px)] gap-5", // grid,
				"justify-items-center", // justify items
				"justify-around max-[650px]:justify-center", // justify content
				"min-[650px]:px-20", // padding
			)}
		>
			{contributors.map((contributor) => (
				<MemberCard key={contributor.id} memberData={contributor} />
			))}
		</div>
	)
}
