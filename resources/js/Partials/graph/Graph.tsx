import { generateCycleGraph } from "./component-generator"
import {
	put_cycles_in_columns,
	sort_by_start_then_by_finish,
} from "./matrix-genarator"

/*
----------------------------------------
		const data and types
----------------------------------------
*/

export const PIXEL_PER_DAY  = 1
export const RANGE_WIDTH    = 7
export const POINT_DIAMETER = 14

export const colorPalate = {
	planning: "#3B82F6",
	develop: "#8B5CF6",
	complete: "#10B981",
	maintenance: "#F59E0B",
	upgrade: "#F97316",
}

const fake_data: Column = [
	{
		id: "s",
		name: "develop",
		description:
			"Core feature development, API implementation, and database design",
		started_at: "2024-02-01 08:00:00",
		// No completed_at - still in progress
	},
	{
		id: "y",
		name: "maintenance",
		description:
			"Post-launch monitoring, hotfixes, and performance optimization",
		// No started_at - not yet started
		completed_at: "2024-05-15 18:00:00",
	},
	{
		id: "k",
		name: "develop",
		description: "Mobile app development with React Native",
		started_at: "2024-07-21 08:00:00",
		completed_at: "2024-08-30 18:00:00",
	},
	{
		id: "g",
		name: "planning",
		started_at: "2024-01-10 09:00:00",
		completed_at: "2024-02-20 17:00:00",
	},
	{
		id: "a",
		name: "complete",
		description:
			"Final testing, bug fixes, QA validation, and deployment preparation",
		// No started_at - not yet started
		completed_at: "2024-04-05 17:00:00",
	},
	{
		id: "z",
		name: "upgrade",
		description: "Database migration to PostgreSQL 16",
		started_at: "2024-09-01 10:00:00",
		// No completed_at - still in progress
	},
	{
		id: "q",
		name: "complete",
		description: "Final QA, performance testing, and production deployment",
		started_at: "2024-09-20 09:00:00",
		completed_at: "2024-10-15 17:00:00",
	},
	{
		id: "c",
		name: "planning",
		description: "Q3 roadmap planning and feature prioritization",
		started_at: "2024-06-15 10:00:00",
		completed_at: "2024-07-20 16:00:00",
	},
	{
		id: "b",
		name: "upgrade",
		description:
			"Major version upgrade with new features and security patches",
		// No started_at - not yet started
		completed_at: "2024-06-10 17:00:00",
	},
	{
		id: "p",
		name: "maintenance",
		description: "Security updates and dependency upgrades",
		started_at: "2024-08-15 09:00:00",
		completed_at: "2024-09-10 17:00:00",
	},
]

/*
----------------------------------------
			main component
----------------------------------------
*/

export default function Graph({ cycles = fake_data }: { cycles?: Column }) {
	cycles = sort_by_start_then_by_finish(cycles) // sort first
	const matrix = put_cycles_in_columns(cycles) // second: turn into matrix
	return generateCycleGraph(matrix) // third: generate graph
}
