import { render, screen } from "@testing-library/react"
import ProjectImages from "@/Partials/project/ProjectImages"
import { vi } from "vitest"

vi.mock("react-image-gallery", () => ({
	default: ({
		items,
	}: {
		items: { original: string; thumbnail: string }[]
	}) => <div>Gallery Items: {items.length}</div>,
}))

describe("ProjectImages", () => {
	it("returns null when images array is empty", () => {
		const { container } = render(<ProjectImages images={[]} />)
		expect(container.firstChild).toBeNull()
	})

	it("renders gallery when images exist", () => {
		render(
			<ProjectImages
				images={[
					{ id: 1, url: "/img/1.png" },
					{ id: 2, url: "/img/2.png" },
				]}
			/>,
		)

		expect(screen.getByText("Gallery Items: 2")).toBeInTheDocument()
	})
})
