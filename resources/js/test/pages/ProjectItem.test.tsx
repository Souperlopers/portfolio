import { render, screen } from "@testing-library/react"
import ProjectItem from "@/Components/ProjectItem"
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

describe("ProjectItem", () => {
	it("renders project title, description and link", () => {
		render(
			<ProjectItem
				index={0}
				projectData={{
					id: 1,
					title: "Portfolio",
					url: "/projects/portfolio",
					description: "My portfolio project",
					thumbnail: "/img/project.png",
					technologies: [{ id: 1, title: "React", type: "tech" }],
				}}
			/>,
		)

		expect(screen.getByText("Portfolio")).toBeInTheDocument()
		expect(screen.getByText("My portfolio project")).toBeInTheDocument()
		expect(screen.getByText("Tags Count: 1")).toBeInTheDocument()
		expect(screen.getByRole("link", { name: "جزئیات" })).toHaveAttribute(
			"href",
			"/projects/portfolio",
		)
	})

	it("renders without crashing when description is empty", () => {
		render(
			<ProjectItem
				index={0}
				projectData={{
					id: 2,
					title: "Portfolio",
					url: "/projects/portfolio",
					thumbnail: "/img/project.png",
					technologies: [],
				}}
			/>,
		)

		expect(screen.getByText("Portfolio")).toBeInTheDocument()
	})
})
