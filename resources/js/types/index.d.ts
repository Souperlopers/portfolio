// you can define your types here

export interface Project{
    id: number | string;
    priority: number | string;
    name: string;
    slug: string;
    url: string;
    description: string;
}

// export interface User {
//     id: number;
//     name: string;
//     email: string;
//     email_verified_at: string;
// }

// export type PageProps<
//     T extends Record<string, unknown> = Record<string, unknown>,
// > = T & {
//     auth: {
//         user: User;
//     };
//     prop: string;
// };
