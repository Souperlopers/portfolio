import clsx from "clsx/lite"
import { colorPalate, POINT_DIAMETER, RANGE_WIDTH } from "./Graph"
import {
	calc_cycle_length,
	calc_parent_timestamp_range,
	timestamp_to_pixle,
} from "./component-genaration-functions"

/*
----------------------------------------
			main graph
----------------------------------------
*/

export function generateCycleGraph(matrix: Matrix) {
	const min_max = calc_parent_timestamp_range(matrix)
	const height = timestamp_to_pixle(min_max.max - min_max.min)

	return (
		<div
			className={clsx(
				"graph",
				"w-full",
				"flex flex-row flex-nowrap justify-center gap-2",
			)}
			style={{ height }}
		>
			{matrix.map((column, index) =>
				generateCycleColumn(column, min_max, index),
			)}
		</div>
	)
}

/*
----------------------------------------
			column
----------------------------------------
*/

function generateCycleColumn(
	column: Column,
	min_max: MinMax,
	column_index: number,
) {
	return (
		<div
			key={column_index}
			className={clsx(
				"column",
				"relative",
				"h-full",
			)}
			style={{
				width: `${POINT_DIAMETER}px`,
			}}
		>
			{column.map((cycle, index) =>
				generateCycle(cycle, min_max, index),
			)}
		</div>
	)
}

/*
----------------------------------------
			cycle
----------------------------------------
*/

function generateCycle(
	cycle: Cycle,
	min_max: MinMax,
	key: number,
) {
	const height = calc_cycle_length(cycle, min_max)

	const topDistance = cycle.started_at
		? Date.parse(cycle.started_at)
		: min_max.min

	const top = timestamp_to_pixle(
		topDistance - min_max.min,
	)

	return (
		<div
			key={key}
			className={clsx(
				"cycle",
				"group",
				"absolute",
				"w-full",
			)}
			style={{
				top,
				height,
			}}
		>
			<div className="relative h-full w-full">
				{/* Start point */}
				{cycle.started_at &&
					generatePoint(cycle, "top")}

				{/* Cycle range */}
				<div
					className={clsx(
						"range",
						"absolute",
						"left-1/2",
						"-translate-x-1/2",
						"top-0",
					)}
					style={{
						background: colorPalate[cycle.name],
						height,
						width: RANGE_WIDTH,
					}}
				/>

				{/* End point */}
				{cycle.completed_at &&
					generatePoint(cycle, "bottom")}

				{/* Hover card */}
				{generateTooltip(cycle)}
			</div>
		</div>
	)
}

/*
----------------------------------------
			points
----------------------------------------
*/

function generatePoint(
	cycle: Cycle,
	pos: "top" | "bottom",
) {
	return (
		<div
			className={clsx(
				"point",
				"absolute",
				"rounded-full",
				"z-10",
				`${pos}-0`,
				"transition-all",
				"duration-200",
				"group-hover:scale-125",
			)}
			style={{
				background: colorPalate[cycle.name],
				width: POINT_DIAMETER,
				height: POINT_DIAMETER,
			}}
		/>
	)
}

/*
----------------------------------------
			tooltip
----------------------------------------
*/

function generateTooltip(cycle: Cycle) {
	const cycleColor = colorPalate[cycle.name]

	return (
		<div
			className={clsx(
				"tooltip",

				// position
				"absolute",
				"left-full",
				"top-1/2",
				"-translate-y-1/2",
				"ml-6",

				// size
				"w-75",

				// appearance
				"rounded-xl",
				"border",
				"bg-[#11151C]",
				"p-4",
				"shadow-2xl",

				// layering
				"z-50",

				// interaction
				"pointer-events-none",

				// hidden state
				"invisible",
				"opacity-0",
				"translate-x-2",

				// visible state
				"group-hover:visible",
				"group-hover:opacity-100",
				"group-hover:translate-x-0",

				// animation
				"transition-all",
				"duration-200",
			)}
			style={{
				borderColor: `${cycleColor}80`,
				boxShadow: `0 0 30px ${cycleColor}15`,
			}}
		>
			{/* Connector */}
			<div
				className="absolute right-full top-1/2 h-px w-6"
				style={{
					background: `${cycleColor}90`,
				}}
			/>

			{/* Connector dot */}
			<div
				className="absolute right-[calc(100%+20px)] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full"
				style={{
					background: cycleColor,
					boxShadow: `0 0 10px ${cycleColor}`,
				}}
			/>

			{/* Header */}
			<div className="flex items-center justify-between gap-3">
				<div className="flex items-center gap-2">
					<span
						className="h-3 w-3 rounded-full"
						style={{
							background: cycleColor,
							boxShadow: `0 0 10px ${cycleColor}80`,
						}}
					/>

					<span className="text-sm font-semibold capitalize text-white">
						{cycle.name}
					</span>
				</div>

				<span
					className="rounded-full border px-2 py-1 text-[10px]"
					style={{
						color: cycleColor,
						borderColor: `${cycleColor}40`,
						background: `${cycleColor}10`,
					}}
				>
					Cycle
				</span>
			</div>

			{/* Date */}
			<div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
				<CalendarIcon />

				<span>
					{formatCycleDate(cycle.started_at)}

					<span className="mx-1.5 text-gray-600">
						→
					</span>

					{formatCycleDate(cycle.completed_at)}
				</span>
			</div>

			{/* Divider */}
			<div className="my-4 h-px bg-white/8" />

			{/* Developer */}
			<div>
				<div className="mb-2 flex items-center gap-2">
					<UserIcon />

					<span className="text-xs font-medium text-gray-400">
						Developer
					</span>
				</div>

				<div className="flex items-center gap-3">
					{/* Avatar */}
					<div
						className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-white"
						style={{
							background: `${cycleColor}25`,
							border: `1px solid ${cycleColor}50`,
						}}
					>
						{getDeveloperInitial(
							cycle.developer,
						)}
					</div>

					<span className="text-sm text-gray-200">
						{cycle.developer ?? "—"}
					</span>
				</div>
			</div>

			{/* Technologies */}
			{cycle.technologies &&
				cycle.technologies.length > 0 && (
					<div className="mt-4">
						<div className="mb-2 flex items-center gap-2">
							<CodeIcon />

							<span className="text-xs font-medium text-gray-400">
								Technologies
							</span>
						</div>

						<div className="flex flex-wrap gap-1.5">
							{cycle.technologies.map(
								(technology) => (
									<span
										key={technology}
										className="rounded-md border px-2 py-1 text-[11px] text-gray-300"
										style={{
											borderColor: `${cycleColor}30`,
											background: `${cycleColor}0D`,
										}}
									>
										{technology}
									</span>
								),
							)}
						</div>
					</div>
				)}

			{/* Description */}
			{cycle.description && (
				<>
					<div className="my-4 h-px bg-white/8" />

					<p className="text-xs leading-5 text-gray-400">
						{cycle.description}
					</p>
				</>
			)}
		</div>
	)
}

/*
----------------------------------------
			helpers
----------------------------------------
*/

function formatCycleDate(
	date?: string,
) {
	if (!date) return "—"

	const parsedDate = new Date(date)

	return parsedDate.toLocaleDateString(
		"en-US",
		{
			month: "short",
			day: "numeric",
			year: "numeric",
		},
	)
}

function getDeveloperInitial(
	developer?: string,
) {
	if (!developer) return "?"

	return developer
		.trim()
		.charAt(0)
		.toUpperCase()
}

/*
----------------------------------------
			icons
----------------------------------------
*/

function CalendarIcon() {
	return (
		<svg
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.8"
		>
			<rect
				x="3"
				y="4"
				width="18"
				height="17"
				rx="2"
			/>

			<path d="M16 2v4M8 2v4M3 10h18" />
		</svg>
	)
}

function UserIcon() {
	return (
		<svg
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.8"
		>
			<path d="M20 21a8 8 0 0 0-16 0" />
			<circle
				cx="12"
				cy="7"
				r="4"
			/>
		</svg>
	)
}

function CodeIcon() {
	return (
		<svg
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.8"
		>
			<path d="m8 9-4 3 4 3" />
			<path d="m16 9 4 3-4 3" />
			<path d="m14 5-4 14" />
		</svg>
	)
}