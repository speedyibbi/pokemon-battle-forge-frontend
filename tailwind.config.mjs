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
			dropShadow: {
				normal: [
					'0.16vw 0.16vw 1.3vw #9A9DA180',
					'0.16vw 0.16vw 1.3vw #00000080',
				],
				fire: [
					'0.16vw 0.16vw 1.3vw #F8A54F80',
					'0.16vw 0.16vw 1.3vw #00000080',
				],
				water: [
					'0.16vw 0.16vw 1.3vw #559EDF80',
					'0.16vw 0.16vw 1.3vw #00000080',
				],
				electric: [
					'0.16vw 0.16vw 1.3vw #EDD53F80',
					'0.16vw 0.16vw 1.3vw #00000080',
				],
				grass: [
					'0.16vw 0.16vw 1.3vw #5DBE6280',
					'0.16vw 0.16vw 1.3vw #00000080',
				],
				ice: ['0.16vw 0.16vw 1.3vw #7ED4C980', '0.16vw 0.16vw 1.3vw #00000080'],
				fighting: [
					'0.16vw 0.16vw 1.3vw #D9425680',
					'0.16vw 0.16vw 1.3vw #00000080',
				],
				poison: [
					'0.16vw 0.16vw 1.3vw #B563CE80',
					'0.16vw 0.16vw 1.3vw #00000080',
				],
				ground: [
					'0.16vw 0.16vw 1.3vw #D7855580',
					'0.16vw 0.16vw 1.3vw #00000080',
				],
				flying: [
					'0.16vw 0.16vw 1.3vw #9BB4E880',
					'0.16vw 0.16vw 1.3vw #00000080',
				],
				psychic: [
					'0.16vw 0.16vw 1.3vw #F87C7A80',
					'0.16vw 0.16vw 1.3vw #00000080',
				],
				bug: ['0.16vw 0.16vw 1.3vw #9DC13080', '0.16vw 0.16vw 1.3vw #00000080'],
				rock: [
					'0.16vw 0.16vw 1.3vw #CEC18C80',
					'0.16vw 0.16vw 1.3vw #00000080',
				],
				ghost: [
					'0.16vw 0.16vw 1.3vw #6970C580',
					'0.16vw 0.16vw 1.3vw #00000080',
				],
				dragon: [
					'0.16vw 0.16vw 1.3vw #0773C780',
					'0.16vw 0.16vw 1.3vw #00000080',
				],
				dark: [
					'0.16vw 0.16vw 1.3vw #5F606D80',
					'0.16vw 0.16vw 1.3vw #00000080',
				],
				steel: [
					'0.16vw 0.16vw 1.3vw #5596A480',
					'0.16vw 0.16vw 1.3vw #00000080',
				],
				fairy: [
					'0.16vw 0.16vw 1.3vw #EF97E680',
					'0.16vw 0.16vw 1.3vw #00000080',
				],
			},
		},
	},
	plugins: [],
};
