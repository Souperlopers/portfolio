import MemberCard from "@/Components/MemberCard"
import { MemberBrief } from "@/types/member"
import clsx from "clsx"

export default function Members({ members }: { members: MemberBrief[] }) {
	return (
		<section
			id="members"
			className={clsx(
				"scroll-mt-24", // base
				"w-full max-w-337.5", // dimension
				"flex flex-col justify-center gap-10", // flex
				"px-5 md:px-20", // padding
			)}
		>
			<h2
				className={clsx(
					"border-primary border-r-4", // border
					"text-xl font-medium md:text-2xl lg:text-3xl", // text division
					"text-base-content", // text color
					"pr-5 md:pr-10", // padding
					"-mr-2 md:-mr-5", // margin
				)}
			>
				اعضا
			</h2>
			<div
				className={clsx(
					"grid grid-cols-[repeat(auto-fit,300px)] gap-5", // grid,
					"justify-items-center", // justify items
					"justify-around max-[650px]:justify-center", // justify content
					"min-[650px]:px-20", // padding
				)}
			>
				{members.map((member) => (
					<MemberCard key={member.id} memberData={member} />
				))}
			</div>
		</section>
	)
}
