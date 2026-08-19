export type TagNames =
	| "Framer"
	| "Javascript"
	| "Laravel"
	| "NextJS"
	| "PHP"
	| "ReactJS"
	| "React Query"
	| "TailwindCSS"
	| "Tanstack"
	| "Typescript"
	| "Redux"
	| "REST API"
	| "React Toastify"// change backend types if modified

export type TagTypes =
	"os" | "lang" | "framework" | "lib" | "webserver" | "db" | "tool" // change backend types if modified

export type Tag = {
	id: string
	title: TagNames
	type: TagTypes
	version?: string
}
