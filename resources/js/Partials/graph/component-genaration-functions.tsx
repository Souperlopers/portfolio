import { PIXEL_PER_DAY } from "./Graph"

export function calc_parent_timestamp_range(matrix: Matrix): MinMax {
	let min = 0
	let max = 0

	matrix.forEach((column) =>
		column.forEach((cycle) => {
			if (cycle.started_at)
				min = Math.min(min, Date.parse(cycle.started_at))
			if (cycle.completed_at)
				max = Math.max(max, Date.parse(cycle.completed_at))
		}),
	)

	return { min, max }
}

export function calc_cycle_length(cycle: Cycle, min_max: MinMax) {
	cycle.
	
	calc_length_in_pixel(
		Date.parse(cycle.started_at || START_FILLER),
		Date.parse(cycle.completed_at || FINISH_FILLER),
	)
}

function calc_length_in_pixel(start: number, finish: number): number {
	const timeMs = finish - start
	const timeSec = timeMs / 1000
	const timeMin = timeSec / 60
	const timeHour = timeMin / 60
	const timeDay = timeHour / 24
	return PIXEL_PER_DAY * timeDay
}
