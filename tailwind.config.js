/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#007AFF",
				secondary: "#6B7280",
				dark: "#1A1A1A",
			},
			backgroundColor: {
				"dark-primary": "#121212",
				"dark-secondary": "#1E1E1E",
			},
		},
	},
	plugins: [],
};
