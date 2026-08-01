import { useState, useEffect } from "react"
import { ReactNode } from "react"
import { Header, Loading } from "@/index"
import { NavigationItem } from "@/types/navigation"
import { router } from "@inertiajs/react"
import clsx from "clsx/lite"
import Providers from "@/lib/Provider"

export default function MainLayout({
	children,
	navigationList,
	hasHero = false,
}: {
	children: ReactNode
	navigationList: NavigationItem[]
	hasHero?: boolean
}) {
	const [isloading, setIsloading] = useState(false)

	useEffect(() => {
		const removeStart = router.on("start", () => setIsloading(true))
		const removeFinish = router.on("finish", () => setIsloading(false))

		return () => {
			removeStart()
			removeFinish()
		}
	}, [navigationList])

	return (
		<>
			<Providers>
				{isloading && <Loading />}
				<Header navigationList={navigationList} hasHero={hasHero} />
				<main
					className={clsx(
						"flex flex-col items-center justify-start gap-10 md:gap-16", // flex
						"px-5 py-10 md:px-20 md:py-16", // paddings
					)}
				>
					{children}
				</main>
			</Providers>
		</>
	)
}
