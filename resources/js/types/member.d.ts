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

type ContactLink = {
		key: string
		value: string
	}

export type Member = {
	name: string
	position: string
	api: string
	banner?: string
	description?: string
	contact?: ContactLink[]
	preview?: string
	thumbnail?: string
	contributions?: ProjectBrief[]
	skills?: Tag[]
}
