import { render, screen } from "@testing-library/react"
import Project from "@/Pages/Project"
import type { ProjectPageProps } from "@/types"

vi.mock("@inertiajs/react", () => ({
	Head: () => null,
}))

vi.mock("@/index", () => ({
	Info: ({ info }: { info: ProjectPageProps["project"]["data"] }) => (
		<div>Info: {info.title}</div>
	),
	Images: ({
		images,
	}: {
		images: NonNullable<ProjectPageProps["project"]["data"]["images"]>
	}) => <div>Images Count: {images.length}</div>,
	Contributors: ({
		contributors,
	}: {
		contributors: ProjectPageProps["project"]["data"]["contributors"]
	}) => <div>Contributors Count: {contributors.length}</div>,
}))

describe("Project page", () => {
	it("renders project info, images and contributors", () => {
		const props: ProjectPageProps = {
			project: {
				data: {
					title: "Zahra Pro",
					api: "project-api",
					images: [
						{ id: 1, url: "/img/1.png" },
						{ id: 2, url: "/img/2.png" },
					],
					contributors: [
						{
							id: 1,
							name: "Zahra",
							position: "Frontend Developer",
							url: "/members/zahra",
						},
					],
				},
			},
		}

		render(<Project {...props} />)

		expect(screen.getByText("Images Count: 2")).toBeInTheDocument()
		expect(screen.getByText("Contributors Count: 1")).toBeInTheDocument()
		expect(screen.getByText("توسعه‌دهندگان")).toBeInTheDocument()
	})

	it("does not crash when images and contributors are empty", () => {
		const props: ProjectPageProps = {
			project: {
				data: {
					title: "Zahra Pro",
					api: "project-api",
					images: [],
					contributors: [],
				},
			},
		}

		render(<Project {...props} />)

		expect(screen.getByText("Images Count: 0")).toBeInTheDocument()
		expect(screen.getByText("Contributors Count: 0")).toBeInTheDocument()
	})
})
