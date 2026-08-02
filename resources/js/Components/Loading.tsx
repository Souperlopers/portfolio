import clsx from "clsx/lite";

export default function Loading() {
    return (
        <div className={clsx(
			"fixed inset-0 z-[100]", // base
			"flex items-center justify-center", // flex
			"h-dvh w-full", // dimension
			"bg-base-300 dark:bg-stone-950", // background
		)}>
            <span className={
				clsx(
					"md:loading-xl loading loading-dots loading-md", // daisyui loading
				)
			} />
        </div>
    )
}
