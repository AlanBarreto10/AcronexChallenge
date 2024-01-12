/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#a1a1aa',
        'secondary': '#4980cc',
        'background-info': '#e13e5b'
      }
    },
  },
  plugins: [],
}

