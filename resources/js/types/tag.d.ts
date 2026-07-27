export type TagNames =
    | "framer"
    | "javascript"
    | "laravel"
    | "next"
    | "php"
    | "react"
    | "reactquery"
    | "tailwind"
    | "tanstack"
    | "typescript" // change backend types if modified

export type TagTypes =
    "os" | "lang" | "framework" | "lib" | "webserver" | "db" | "tool" // change backend types if modified

export type Tag = {
    id: string
    title: TagNames
    type: TagTypes
    version?: string
}
