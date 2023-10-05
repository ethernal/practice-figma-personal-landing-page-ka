import { nextui } from '@nextui-org/react';

const colors = require('tailwindcss/colors');

import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./content/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}', // for nextui
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'theme-primary': {
					100: '#F2FCCC',
					200: '#E3F99C',
					300: '#CAED68',
					400: '#ADDB41',
					500: '#87C40D',
					600: '#6EA809',
					700: '#578D06',
					800: '#417104',
					900: '#335E02',
				},
				'theme-success': {
					100: '#E6FBCE',
					200: '#C7F8A0',
					300: '#9CEA6D',
					400: '#72D647',
					500: '#3bbc15',
					600: '#26A10F',
					700: '#14870A',
					800: '#076D06',
					900: '#045A09',
				},
				'theme-info': {
					100: '#D7E2FB',
					200: '#B1C4F8',
					300: '#869FEA',
					400: '#637ED6',
					500: '#3652bc',
					600: '#273EA1',
					700: '#1B2D87',
					800: '#111E6D',
					900: '#0A145A',
				},
				'theme-warning': {
					100: '#FDFBD9',
					200: '#FCF7B3',
					300: '#F6EF8C',
					400: '#EDE36D',
					500: '#e2d440',
					600: '#C2B42E',
					700: '#A29520',
					800: '#837614',
					900: '#6C600C',
				},
				'theme-danger': {
					100: '#FFE6D5',
					200: '#FFC7AC',
					300: '#FFA182',
					400: '#FF7D63',
					500: '#FF4130',
					600: '#DB2323',
					700: '#B71825',
					800: '#930F25',
					900: '#7A0925',
				},
				'theme-white': '#eee',
				'theme-black': '#111',
				'theme-accent': '#EE6C4D',
				'theme-bg-dark': '#293241',
				'theme-bg-gray-dark': '#2F3746',
			},
			spacing: {
				'viewport-padding': 'var(--page-wrapper-padding)',
				'content-width': 'var(--content-width)',
			},
			theme: {
				aspectRatio: {
					cinema: 21 / 9,
					ultraWide: 21 / 9,
					dualScreen: 32 / 9,
					superUltraWide: 32 / 9,
				},
			},
			screens: {
				xxs: '240px',
				xs: '480px',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
		animation: {
			'spin-3s': 'spin 3s linear infinite',
			'spin-2s': 'spin 2s linear infinite',
		},
	},

	plugins: [
		nextui({
			themes: {
				light: {
					colors: {
						primary: {
							DEFAULT: '#bef264',
							foreground: '#000000',
						},
						focus: '#bef264',
						secondary: {
							DEFAULT: '#ee6c4d',
						},
						background: {
							DEFAULT: '#3D5A80',
							// DEFAULT: '#293241',
						},
					},
				},
				dark: {
					colors: {
						primary: {
							DEFAULT: '#bef264',
							foreground: '#000000',
						},
						focus: '#bef264',
						secondary: {
							DEFAULT: '#ee6c4d',
						},
						background: {
							DEFAULT: '#293241',
						},
					},
				},
			},
		}),
	],
};
export default config;
