import { Project, ProjectBrief } from "@/types/project";
import { Member, MemberBrief } from "@/types/member";

type PaginatedData<Data> = {
    data: Data[];
};

export type HomePageProps = {
    projects: PaginatedData<ProjectBrief>;
    members: PaginatedData<MemberBrief>;
};

export type MemberPageProps = {
     member: {
        data: Member;
    };
}

export type ProjectPageProps = {
    project: Project;
};
