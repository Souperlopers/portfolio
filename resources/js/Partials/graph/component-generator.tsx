import clsx from "clsx/lite"
import { useEffect, useState } from "react"
import {
	colorPalate,
	FINISH_FILLER,
	PIXEL_PER_DAY,
	POINT_RADIUS,
	RANGE_WIDTH,
	START_FILLER,
} from "./Graph"
import { calc_cycle_length, calc_parent_range } from "./component-genaration-functions"

export function generateCycleGraph(matrix: Matrix) {
	const min_max = calc_parent_range(matrix)

	return (
		<div
			className={clsx(
				"graph", // name
				"h-min w-full", // dimension
				"flex flex-row flex-nowrap justify-start gap-2", // flex
			)}
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
				"h-max", // dimension
				"flex flex-col", // flex
			)}
			style={{
				width: `${POINT_RADIUS * 2}px`,
			}}
		>
			{column.map((cycle, index) => (
				<>
					{index !== 0 &&
						generateEmptyArea(
							column[index - 1] as NotActiveCycle,
							cycle as NotCompletedCycle,
							index,
						)}
					{generateCycle(cycle, min_max, index)}
				</>
			))}
		</div>
	)
}

function generateCycle(cycle: Cycle, min_max: MinMax, key: number) {
	const isActive = cycle.completed_at && cycle.completed_at
	const length = calc_cycle_length(cycle, min_max)

	return (
		<div
			key={key}
			className={clsx(
				"cycle", // name
				"flex flex-col items-center", // flex
				!isActive && "shrink",
			)}
		>
			{cycle.started_at && generatePoint(cycle, "top")}

			<div
				className={clsx(
					"range", // name
					!isActive && "shrink", // shrink
				)}
				style={{
					background: colorPalate[cycle.name],
					width: RANGE_WIDTH,
					height: isActive && `${length}px`,
				}}
			/>

			{cycle.completed_at && generatePoint(cycle, "bottom")}
		</div>
	)
}

function generateEmptyArea(
	prev: NotActiveCycle,
	after: NotCompletedCycle,
	key: number,
) {
	const length = calc_length_in_pixel(
		Date.parse(prev.completed_at),
		Date.parse(after.started_at),
	)

	return (
		<div
			key={`e-${key}`}
			className={clsx(
				"empty", // name
			)}
			style={{
				height: length,
			}}
		/>
	)
}

function generatePoint(cycle: Cycle, pos: "top" | "bottom") {
	return (
		<div
			className={clsx(
				"point", // name
				"rounded-full", // style
				"shrink-0", // shrink
			)}
			style={{
				background: colorPalate[cycle.name],
				width: POINT_RADIUS * 2,
				height: POINT_RADIUS * 2,
				transform: `translateY(${pos === "bottom" ? "-" : "+"}${POINT_RADIUS / 2}px)`,
			}}
		/>
	)
}
