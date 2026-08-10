import { defineConfig } from "vite"
import laravel from "laravel-vite-plugin"
import inertia from "@inertiajs/vite"
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [
		tailwindcss(),
		laravel({
			input: ["resources/js/app.tsx"],
			refresh: true,
		}),
		inertia({
			ssr: false
		}),
	],
})
