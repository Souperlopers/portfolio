import MemberCard from "@/Components/MemberCard"
import { MemberBrief } from "@/types/member"
import styles from "../home/style/MembersStyle.module.css"

export default function ProjectMembers({
	contributors,
}: {
	contributors: MemberBrief[]
}) {
	return (
		<div className={styles.container}>
			{contributors.map((contributor) => (
				<MemberCard key={contributor.id} memberData={contributor} />
			))}
		</div>
	)
}
