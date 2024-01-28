/** @type {import('tailwindcss').Config} */
export default {
	important:true,
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
