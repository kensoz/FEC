/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mPlusRound: ['"M PLUS Rounded 1c"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
