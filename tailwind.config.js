/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			animation: {
				flicker: "text-flicker-in-glow 	2s linear both",
			},
			fontFamily: {
				V3: ["VT323", "monospace"],

				Motonotn: ["Monoton", " cursive"],
				bit: ["Press Start 2P", "cursive"],
				jet: ["JetBrains Mono"],
			},
			screens: {
				mobile: "300px",
				tablet: "450px",
				pc: "1200px",
			},
		},
	},
	plugins: [],
};
