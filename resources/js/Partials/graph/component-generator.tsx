import clsx from "clsx/lite"
import { colorPalate, POINT_RADIUS, RANGE_WIDTH } from "./Graph"
import {
	calc_cycle_length,
	calc_parent_timestamp_range,
	timestamp_to_pixle,
} from "./component-genaration-functions"

export function generateCycleGraph(matrix: Matrix) {
	const min_max = calc_parent_timestamp_range(matrix)
	const height = timestamp_to_pixle(min_max.max - min_max.min)

	return (
		<div
			className={clsx(
				"graph", // name
				"w-full", // dimension
				"flex flex-row flex-nowrap justify-start gap-2", // flex
			)}
			style={{ height }}
		>
			{matrix.map((column, index) =>
				generateCycleColumn(column, min_max, index),
			)}
		</div>
	)
}

function generateCycleColumn(
	column: Column,
	min_max: MinMax,
	column_index: number,
) {
	return (
		<div
			key={column_index}
			className={clsx(
				"column", // name
				"relative", // base
				"h-full", // dimension
			)}
			style={{
				width: `${POINT_RADIUS * 2}px`,
			}}
		>
			{column.map((cycle, index) => generateCycle(cycle, min_max, index))}
		</div>
	)
}

function generateCycle(cycle: Cycle, min_max: MinMax, key: number) {
	const height = calc_cycle_length(cycle, min_max)

	const topDistance = cycle.started_at
		? Date.parse(cycle.started_at)
		: min_max.min
	const top = timestamp_to_pixle(topDistance - min_max.min)

	return (
		<div
			key={key}
			className={clsx(
				"cycle", // name
				"absolute", // base
				"w-full", // dimension
			)}
			style={{ top, height }}
		>
			<div className="relative h-full w-full">
				{cycle.started_at && generatePoint(cycle, "top")}

				<div
					className={clsx(
						"range", // name
						"absolute", // base
						"left-1/2 -translate-x-1/2", // move to center of column
						"top-0", // position
					)}
					style={{
						background: colorPalate[cycle.name],
						height,
						width: RANGE_WIDTH,
					}}
				/>

				{cycle.completed_at && generatePoint(cycle, "bottom")}
			</div>
		</div>
	)
}

function generatePoint(cycle: Cycle, pos: "top" | "bottom") {
	return (
		<div
			className={clsx(
				"point", // name
				"absolute", // base
				"rounded-full", // style
				`${pos}-0`, // stick to top (or bottom)
			)}
			style={{
				background: colorPalate[cycle.name],
				width: POINT_RADIUS * 2,
				height: POINT_RADIUS * 2,
			}}
		/>
	)
}
