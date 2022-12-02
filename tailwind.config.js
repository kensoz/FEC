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
    },
  },
  plugins: [],
}
