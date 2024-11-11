/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector'],
  content: [
    "./projects/**/*.{html,ts, css, scss}",
  ],
  safelist: [
    'translate-x-0',
    '-translate-x-full'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
