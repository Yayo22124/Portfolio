/** @type {import('tailwindcss').Config} */
export default {
	important: true,
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			"animation": {
				"background-shine": "background-shine 2s linear infinite"
			},
			"keyframes": {
				"background-shine": {
					"from": {
						"backgroundPosition": "0 0"
					},
					"to": {
						"backgroundPosition": "-200% 0"
					}
				}
			}

		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
