import { Tag } from "@/types/tag";
import { ProjectBrief } from "@/types/project";

export type MemberBrief = {
    id: number;
    name: string;
    position: string;
    thumbnail: string;
    url: string;
    priority: number;
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
