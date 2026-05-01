// you can define your types here

export interface Project{
    id: number | string;
    priority: number | string;
    title: string;
    url: string;
}

export interface ProjectsObject {
    data: Project[]
}

export interface User {
    id: number;
    name: string;
    priority: number | string;
    position: string;
    // email: string;
    // description: string;
    // github_url: string;
    // linkedin_url: string;
    // phone:string;
    // slug: string;
}

export interface UsersObject {
    data: User[];
}

// export type PageProps<
//     T extends Record<string, unknown> = Record<string, unknown>,
// > = T & {
//     auth: {
//         user: User;
//     };
//     prop: string;
// };
