/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // フォント
      fontFamily: {
        fec: ['"M PLUS 1p"', 'メイリオ', '游ゴシック', 'Microsoft YaHei', '微软雅黑', 'Helvetica', 'sans-serif'],
      },
      // フェード
      animation: {
        fadeIn: 'fadeIn 300ms ease-in-out',
        fadeOut: 'fadeOut 300ms ease-in-out',
      },
      keyframes: () => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      }),
    },
  },
  plugins: [],
}
