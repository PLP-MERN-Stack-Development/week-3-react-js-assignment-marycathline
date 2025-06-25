/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode via .dark class
  theme: {
    extend: {
      colors: {
        maroon: '#800000', 
      },
    },
  },
  plugins: [],
};
