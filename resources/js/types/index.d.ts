import { Project, ProjectBrief } from "@/types/project";
import { Member, MemberBrief } from "@/types/member";

type ResponseData<Data> = {
    data: Data;
};

type PaginatedData<Data> = ResponseData<Data[]>;

export type HomePageProps = {
    projects: PaginatedData<ProjectBrief>;
    members: PaginatedData<MemberBrief>;
};

export type MemberPageProps = {
    member: ResponseData<Member>;
};

export type ProjectPageProps = {
    project: ResponseData<Project>;
};
