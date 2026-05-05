import { Tag } from "@/types/tag";
import { MemberBrief } from '@/types/member';

export type ProjectImage = {
    id: number;
    url: string;
};

export type ProjectBrief = {
    id: number;
    title: string;
    thumbnail: string;
    url: string;
    priority: number;
    technologies: Tag[];
};

export type Project = {
    title: string;
    description: string;
    thumbnail: string;
    preview_url: string;
    contributors: MemberBrief[];
    technologies: Tag[];
    images: ProjectImage[];
};

export type ProjectDetailsButton = {
    name: string;
    url: string;
    color: string;
}