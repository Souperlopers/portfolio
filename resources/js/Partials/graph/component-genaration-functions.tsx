import { PIXEL_PER_DAY } from "./Graph"

export function calc_parent_timestamp_range(matrix: Matrix): MinMax {
	let min: number = Number.POSITIVE_INFINITY
	let max: number = Number.NEGATIVE_INFINITY

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
	// if full
	const s = cycle.started_at ? Date.parse(cycle.started_at) : min_max.min
	const f = cycle.completed_at ? Date.parse(cycle.completed_at) : min_max.max
	return timestamp_to_pixle(f - s)
}

export function timestamp_to_pixle(timestampMs: number): number {
	const sec = timestampMs / 1000
	const min = sec / 60
	const hour = min / 60
	const day = hour / 24
	return PIXEL_PER_DAY * day
}
