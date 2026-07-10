import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Projects from "@/Partials/home/Projects";
import { vi } from "vitest";

vi.mock("@/Components/ProjectItem", () => ({
    default: ({ projectData }: { projectData: { id: number; title: string } }) => (
        <div>Project: {projectData.title}</div>
    ),
}));

vi.mock("@/Components/EmptyProjects", () => ({
    default: () => <div>No projects</div>,
}));

describe("Projects", () => {
    it("shows empty state when no projects exist", () => {
        render(<Projects projects={[]} />);

        expect(screen.getByText("No projects")).toBeInTheDocument();
    });

    it("renders first 3 projects by default", () => {
        render(
            <Projects
                projects={[
                    { id: 1, title: "P1", url: "/p1" },
                    { id: 2, title: "P2", url: "/p2" },
                    { id: 3, title: "P3", url: "/p3" },
                    { id: 4, title: "P4", url: "/p4" },
                ]}
            />
        );

        expect(screen.getByText("Project: P1")).toBeInTheDocument();
        expect(screen.getByText("Project: P2")).toBeInTheDocument();
        expect(screen.getByText("Project: P3")).toBeInTheDocument();
        expect(screen.queryByText("Project: P4")).not.toBeInTheDocument();
        expect(screen.getByRole("button", { name: /پروژه‌های بیشتر/i })).toBeInTheDocument();
    });

    it("shows more projects after clicking load more", async () => {
        const user = userEvent.setup();

        render(
            <Projects
                projects={[
                    { id: 1, title: "P1", url: "/p1" },
                    { id: 2, title: "P2", url: "/p2" },
                    { id: 3, title: "P3", url: "/p3" },
                    { id: 4, title: "P4", url: "/p4" },
                ]}
            />
        );

        await user.click(screen.getByRole("button", { name: /پروژه‌های بیشتر/i }));

        expect(screen.getByText("Project: P4")).toBeInTheDocument();
    });
});