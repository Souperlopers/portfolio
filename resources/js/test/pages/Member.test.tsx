import { render, screen } from "@testing-library/react";
import Member from "@/Pages/Member";
import type { MemberPageProps } from "@/types";

vi.mock("@inertiajs/react", () => ({
    Head: () => null,
}));

vi.mock("@/index", () => ({
    Profile: ({ info }: { info: MemberPageProps["member"]["data"] }) => (
        <div>Profile: {info.name}</div>
    ),
    MemberProjects: ({ projects }: { projects: NonNullable<MemberPageProps["member"]["data"]["contributions"]> }) => (
        <div>Projects Count: {projects.length}</div>
    ),
    Contact: ({ info }: { info: MemberPageProps["member"]["data"] }) => (
        <div>Contact: {info.email}</div>
    ),
}));

describe("Member page", () => {
    it("renders profile, projects and contact", () => {
        const props: MemberPageProps = {
            member: {
                data: {
                    name: "Zahra",
                    position: "Frontend Developer",
                    api: "member-api",
                    email: "zahra@test.com",
                    contributions: [
                        { id: 1, title: "zahra-pro", url: "/projects/zahra-pro" },
                        { id: 2, title: "Portfolio", url: "/projects/portfolio" },
                    ],
                },
            },
        };

        render(<Member {...props} />);

        expect(screen.getByText("Profile: Zahra")).toBeInTheDocument();
        expect(screen.getByText("Projects Count: 2")).toBeInTheDocument();
        expect(screen.getByText("Contact: zahra@test.com")).toBeInTheDocument();
    });

    it("does not crash when contributions is empty", () => {
        const props: MemberPageProps = {
            member: {
                data: {
                    name: "Zahra",
                    position: "Frontend Developer",
                    api: "member-api",
                    email: "zahra@test.com",
                    contributions: [],
                },
            },
        };

        render(<Member {...props} />);

        expect(screen.getByText("Projects Count: 0")).toBeInTheDocument();
    });
});