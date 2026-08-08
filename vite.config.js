import { defineConfig } from "vite"
import laravel from "laravel-vite-plugin"
import inertia from "@inertiajs/vite"
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [
		laravel({
			input: ["resources/js/app.tsx"],
			ssr: ["resources/js/ssr.tsx"],
			refresh: true,
		}),
		inertia({
			// ssr: {
			//     entry: "resources/js/ssr.js",
			//     port: 13714,
			//     host: "127.0.0.1",
			//     cluster: true,
			// },
		}),
		tailwindcss(),
	],
})
