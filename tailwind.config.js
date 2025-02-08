export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure correct paths
	theme: {
	  extend: {},
	},
	safelist: [
		"bg-red-500", "text-red-500", "p-4",  // Add common classes you use
	   ],
	plugins: [],
   };