import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import MemberCard from "@/Components/MemberCard"
import { vi } from "vitest"

vi.mock("@inertiajs/react", () => ({
	Link: ({
		href,
		children,
		...props
	}: {
		href: string
		children: React.ReactNode
	}) => (
		<a href={href} {...props}>
			{children}
		</a>
	),
}))

vi.mock("@/Components/TagsComponent", () => ({
	default: ({ tags }: { tags: { id: number; title: string }[] }) => (
		<div>Tags Count: {tags.length}</div>
	),
}))

describe("MemberCard", () => {
	it("renders name, position and link", () => {
		render(
			<MemberCard
				memberData={{
					id: 1,
					name: "Sara",
					position: "Frontend Developer",
					url: "/members/sara",
					thumbnail: "/img/sara.png",
					skills: [{ id: 1, title: "React", type: "tech" }],
				}}
			/>,
		)

		expect(screen.getByText("Sara")).toBeInTheDocument()
		expect(screen.getByText("Frontend Developer")).toBeInTheDocument()
		expect(screen.getByText("Tags Count: 1")).toBeInTheDocument()
		expect(
			screen.getByRole("link", { name: "مشاهده پروفایل" }),
		).toHaveAttribute("href", "/members/sara")
	})

	it("shows fallback initial when thumbnail is missing", () => {
		render(
			<MemberCard
				memberData={{
					id: 2,
					name: "Sara",
					position: "Frontend Developer",
					url: "/members/sara",
					skills: [],
				}}
			/>,
		)

		expect(screen.getByText("S")).toBeInTheDocument()
	})
})
