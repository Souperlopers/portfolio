import { render, screen } from "@testing-library/react";
import Home from "@/Pages/Home";
import type { HomePageProps } from "@/types";

vi.mock("@/index", () => ({
    Banner: () => <div>Banner Component</div>,
    Projects: ({ projects }: { projects: HomePageProps["projects"]["data"] }) => (
        <div>Projects Count: {projects.length}</div>
    ),
    Members: ({ members }: { members: HomePageProps["members"]["data"] }) => (
        <div>Members Count: {members.length}</div>
    ),
}));

describe("Home page", () => {
    it("renders banner, projects and members", () => {
        const props: HomePageProps = {
            projects: {
                data: [
                    { id: 1, title: "zahraPro", url: "/projects/zahra-pro" },
                    { id: 2, title: "Portfolio", url: "/projects/portfolio" },
                ],
            },
            members: {
                data: [
                    { id: 1, name: "Zahra", position: "Frontend", url: "/members/zahra" },
                ],
            },
        };

        render(<Home {...props} />);

        expect(screen.getByText("Banner Component")).toBeInTheDocument();
        expect(screen.getByText("Projects Count: 2")).toBeInTheDocument();
        expect(screen.getByText("Members Count: 1")).toBeInTheDocument();
    });
});