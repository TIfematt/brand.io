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
        'line': "url('assets/Lines.png')",
        'ellipse': "url('assets/Ellipse.png')",
        'logo': "url('assets/logo.png')"
      },
      colors: {
        'primary': '#3E4581',
        'secondary': 'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)'
      }
    },
  },
  plugins: [],
}