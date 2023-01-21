/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html", "./static/css/**/*.css"],
  theme: {
    extend: {
      fontFamily: {
        'page-head': ['"Bree Serif"', 'serif'],
      },
      textColor: {
        'ichthus-blue': '#1e2258'
      }
    },
  },
  plugins: [],
}
