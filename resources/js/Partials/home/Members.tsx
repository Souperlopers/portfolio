import MemberCard from "@/Components/MemberCard"
import { MemberBrief } from "@/types/member"
import styles from "./style/MembersStyle.module.css"
import clsx from "clsx"

export default function Members({ members }: { members: MemberBrief[] }) {
	return (
		<section
			id="members"
			className="mx-auto flex w-full max-w-[1350px] scroll-mt-24 flex-col gap-10"
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
			<div className={styles.container}>
				{members.map((member) => (
                    <MemberCard key={member.id} memberData={member} />
                ))}
			</div>
		</section>
	)
}
