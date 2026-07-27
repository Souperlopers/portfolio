import { Tag } from "@/types/tag";
import { MemberBrief } from "@/types/member";

export type ProjectImage = {
    id: number;
    url: string;
    description: string;
};

export type ProjectBrief = {
    id: number|string;
    title: string;
    url: string;
    description?: string;
    thumbnail?: string;
    technologies?: Tag[];
};

export type Project = {
    title: string;
    api: string;
    description?: string;
    thumbnail?: string;
    technologies?: Tag[];
    images?: ProjectImage[];
    contributors: MemberBrief[];
    links?: ProjectLinks;
};

export type ProjectItemProps = {
    projectData: ProjectBrief;
    index: number;
}

export type ProjectLinks = {
    preview?: string;
    github?: string;
    figma?: string;
};
