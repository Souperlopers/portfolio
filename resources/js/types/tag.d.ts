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
	| "React Toastify" 
	| "Axios"
	| "CSS"
	| "Daisy UI"
	| "InertiaJS"
	| "ViteJS"
	| "React Router" // change backend types if modified

export type TagTypes =
	"os" | "lang" | "framework" | "lib" | "webserver" | "db" | "tool" // change backend types if modified

export type Tag = {
	id: string
	title: TagNames
	path: string
	type: TagTypes
	version?: string
}
