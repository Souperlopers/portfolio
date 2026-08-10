import "../css/app.css"

import { createInertiaApp } from "@inertiajs/react"
import createServer from "@inertiajs/react/server"
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers"
import { ComponentType, Suspense } from "react"
import ReactDOMServer from "react-dom/server"
import { title } from "@/app"
import Loading from "./Components/Loading"

createServer((page) =>
	createInertiaApp({
		title,
		page,
		render: ReactDOMServer.renderToString,
		resolve: (name) =>
			resolvePageComponent(
				`./Pages/${name}.tsx`,
				import.meta.glob("./Pages/**/*.tsx"),
			) as Promise<ComponentType>,
		setup: ({ App, props }) => (
			<Suspense fallback={<Loading />}>
				<App {...props} />
			</Suspense>
		),
	}),
)
