/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Montserrat', 'serif'], //? title
        paragrhap: ['Kanit', 'sans-serif'] //? text
      },
      colors: {
        primary: {
          100: '#FEEDE2',
          200: '#FDDAC5',
          300: '#FCC8A8',
          400: '#FBB58B',
          500: '#FAA36D',
          600: '#F99150',
          700: '#F87E33',
          800: '#F76C16',
          900: '#F95F01'
        }
      }
    }
  },
  plugins: []
}
