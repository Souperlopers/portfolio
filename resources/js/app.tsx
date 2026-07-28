import "./bootstrap"
import "../css/app.css"

import { createRoot, hydrateRoot } from "react-dom/client"
import { createInertiaApp } from "@inertiajs/react"
import { Suspense } from "react"
import Loading from "./Components/Loading"

const appName = import.meta.env.VITE_APP_NAME || "Laravel"
export const title = (title: string) => `${title} - ${appName}`

createInertiaApp({
    title,

    setup({ el, App, props }) {
        const app = (
            <Suspense fallback={<Loading />}>
                <App {...props} />
            </Suspense>
        )
		
		if (!el) return <p>Root element not found!</p>

        import.meta.env.SSR //
            ? hydrateRoot(el, app)
            : createRoot(el).render(app)
    },

    progress: {
        color: "#4B5563",
    },
})
