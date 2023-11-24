/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		fontFamily: {
			sans: ['LINE Seed', 'sans-serif'],
			serif: ['Merriweather', 'serif']
		},
		extend: {
			colors: {
				primary: '#f97316'
			},
			spacing: {
				'8xl': '96rem',
				'9xl': '128rem'
			},
			borderRadius: {
				'4xl': '2rem'
			}
		}
	},
	plugins: [require('@tailwindcss/forms'), require('tailwindcss-animation-delay')]
};
