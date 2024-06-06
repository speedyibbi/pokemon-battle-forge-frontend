/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				accent: 'var(--accent)',
				'secondary-accent': 'var(--secondary-accent)',
			},
			fontFamily: {
				'bebas-neue': ['Bebas Neue', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
