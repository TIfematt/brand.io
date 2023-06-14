/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'line': "url('/public/assets/Lines.png')",
        'ellipse': "url('/public/assets/Ellipse.png')",
        'logo': "url('/public/assets/logo.png')"
      },
      colors: {
        'primary': '#3E4581',
        'secondary': 'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%), linear-gradient(106.23deg, #4EF0F0 0%, #05C580 100%)',
        'tertiary': '#ECEEFF'

      }
    },
  },
  plugins: [],
}