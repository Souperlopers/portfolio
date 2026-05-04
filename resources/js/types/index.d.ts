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
    project:{
        data: Project;
    };
};

export type ProjectImagesProps = {
    id: number;
    url: string;
}

export type ProjectContributorsProps = {
    id: number;
    name: string;
    position: string;
    priority: number;
    thumbnail: string;
    url: string;
}