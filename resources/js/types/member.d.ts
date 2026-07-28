import { Tag } from "@/types/tag"
import { ProjectBrief } from "@/types/project"

export type MemberBrief = {
	id: number | string
	name: string
	position: string
	url: string
	thumbnail?: string
	skills?: Tag[]
}

export type Member = {
	name: string
	position: string
	api: string
	banner?: string
	description?: string
	contact?: {
		"شماره تماس"?: string
		ایمیل?: string
		لینکدین?: string
		گیت‌هاب?: string
	}
	preview?: string
	thumbnail?: string
	contributions?: ProjectBrief[]
	skills?: Tag[]
}
