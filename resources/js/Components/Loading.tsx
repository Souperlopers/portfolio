export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex h-dvh w-full items-center justify-center bg-stone-950">
            <span className="md:loading-xl loading loading-dots loading-md"></span>
        </div>
    )
}
