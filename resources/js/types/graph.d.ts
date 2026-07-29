
type CycleName = "planning" | "develop" | "complete" | "maintenance" | "upgrade"

type BaseCycle = {
	id: string
	name: CycleName
	description?: string
}

// Three specific types of a cycle
type ActiveCycle = BaseCycle & {
	started_at: string
	completed_at?: never // Can't have completed_at
}
type CompletedCycle = BaseCycle & {
	started_at?: never // Can't have started_at
	completed_at: string
}
type FullCycle = BaseCycle & {
	started_at: string
	completed_at: string
}

type NotActiveCycle = CompletedCycle | FullCycle
type NotCompletedCycle = ActiveCycle | FullCycle

type Cycle = ActiveCycle | CompletedCycle | FullCycle

type Column = Cycle[]

type Matrix = Column[]

type MinMax = {
	min: number
	max: number
}