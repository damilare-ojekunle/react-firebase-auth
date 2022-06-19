/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      lightBlue: "#608EC1",
      dashColor: "#E5E5E5",
      darkBlue: "#102F55",
      errorred: "#EA394B",
    },
    fontFamily: {
      "baloo ": ['Baloo 2', 'sans-serif'],
     
    },
    extend: {},
  },
  plugins: [],
}
