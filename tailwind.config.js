/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html", "./static/css/**/*.css", "./config.yml"],
  theme: {
    extend: {
      fontFamily: {
        'page-head': ['"Bree Serif"', 'serif'],
      },
      colors: {
        'ichthus-blue': '#1e2258',
        'ichthus-red': '#980449'
      },
      textColor: {
        'ichthus-blue': '#1e2258',
        'ichthus-red': '#980449'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
