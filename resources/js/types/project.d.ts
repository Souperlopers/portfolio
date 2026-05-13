import { Tag } from "@/types/tag";
import { MemberBrief } from "@/types/member";

export type ProjectImage = {
    id: number;
    url: string;
};

export type ProjectBrief = {
    id: number;
    title: string;
    thumbnail: string;
    url: string;
    technologies: Tag[];
};

export type Project = {
    title: string;
    description: string;
    thumbnail: string;
    contributors: MemberBrief[];
    technologies: Tag[];
    images: ProjectImage[];
    links: ProjectLinks;
};

export type ProjectLinks = {
    preview: string;
    github: string;
    figma: string;
};
