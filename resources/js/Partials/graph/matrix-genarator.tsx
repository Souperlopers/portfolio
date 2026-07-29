import { FINISH_FILLER, START_FILLER } from "./Graph"

export function sort_by_start_then_by_finish(cycles: Column): Column {
	return cycles.sort((a, b) => {
		const res =
			Date.parse(a.started_at || START_FILLER) -
			Date.parse(b.started_at || START_FILLER)

		// sort by finish if starts are equal
		if (res === 0) {
			return (
				Date.parse(a.completed_at || FINISH_FILLER) -
				Date.parse(b.completed_at || FINISH_FILLER)
			)
		}

		return res
	})
}

export function put_cycles_in_columns(cycles: Column): Matrix {
	let matrix: Matrix = [[]]

	for (let i = 0; i < cycles.length; i++) {
		matrix = put_cycle_in_columns(cycles[i], matrix)
	}

	return matrix
}

function put_cycle_in_columns(cycle: Cycle, matrix: Matrix): Matrix {
	for (let i = 0; i < matrix.length; i++) {
		if (is_range_empty_in_column(cycle, matrix[i])) {
			// append new cycle
			matrix[i].push(cycle)

			// sort the whole cycle
			matrix[i] = sort_by_start_then_by_finish(matrix[i])

			// return the result
			return matrix
		}

		// if this is last column, append new one
		if (i + 1 === matrix.length) {
			matrix.push([])
		}
	}

	return [[cycle]]
}

function is_range_empty_in_column(input_cycle: Cycle, column: Column): boolean {
	// return true if nothing is in column
	if (!column.length) return true

	for (let i = 0; i < column.length; i++) {
		const cycle = column[i]
		const input = {
			start: Date.parse(input_cycle.started_at || START_FILLER),
			finish: Date.parse(input_cycle.completed_at || FINISH_FILLER),
		}
		const this_cycle = {
			start: Date.parse(cycle.started_at || START_FILLER),
			finish: Date.parse(cycle.completed_at || FINISH_FILLER),
		}

		// check if overlaps with this this_cycle
		const input_start_overlap =
			input.finish > this_cycle.start && input.start < this_cycle.finish
		const input_finish_overlap =
			input.start < this_cycle.finish && input.finish > this_cycle.start

		if (input_start_overlap || input_finish_overlap) {
			return false
		}
	}

	// if doesnt overlap with any cycle of this column
	return true
}
