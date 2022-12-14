/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
		colors: {
      'beige': '#FEF8EC',
      'catGreen': '#77d751',
			'green': '#439622',
      'purple': '#81288f',
      'orange': '#F97068',
      'darkBrown': '#161314',
    },
		fontFamily: {
      sans: ['Josefin Sans', 'sans-serif'],
      dog: ['Bungee Shade', 'sans-serif'],
			cat: ['Berkshire Swash', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
