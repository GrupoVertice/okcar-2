/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				lighter: "#F04546",
				slate: "#D6D6D6",
			},
		},
	},
	daisyui: {
		themes: [
		  {
			mytheme: {
				primary: "#C7030B",
				secondary: "#444444",
				accent: "#7A7A7A",
				neutral: "#363C42",

			  
			},
		  },
		],
	  },
	plugins: [require("daisyui")],

}
