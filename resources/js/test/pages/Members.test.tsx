import { render, screen } from "@testing-library/react";
import Members from "@/Partials/home/Members";
import { vi } from "vitest";

vi.mock("@/Components/MemberCard", () => ({
    default: ({ memberData }: { memberData: { name: string } }) => (
        <div>Member: {memberData.name}</div>
    ),
}));

describe("Members", () => {
    it("renders all members", () => {
        render(
            <Members
                members={[
                    { id: 1, name: "Sara", position: "Frontend", url: "/sara" },
                    { id: 2, name: "Ali", position: "Backend", url: "/ali" },
                ]}
            />
        );

        expect(screen.getByText("Member: Sara")).toBeInTheDocument();
        expect(screen.getByText("Member: Ali")).toBeInTheDocument();
    });

    it("renders nothing inside container when members are empty", () => {
        render(<Members members={[]} />);

        expect(screen.getByText("توسعه‌دهندگان")).toBeInTheDocument();
    });
});