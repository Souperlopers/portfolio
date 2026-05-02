import { Tag } from "@/types/tag";
import { ProjectBrief } from "@/types/project";

export type MemberBrief = {
    id: number;
    name: string;
    position: string;
    thumbnail: string;
    url: string;
    priority: number;
    // TODO_S add top tags
};

export type Member = {
    name: string;
    position: string;
    description: string;
    thumbnail: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    contributions: ProjectBrief[];
    skills: Tag[];
};
