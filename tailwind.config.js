/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'payra': {
          'pink': '#f7c1e3',
          'purple': '#5e3370', 
          'lavender': '#c6b0e5',
          'offwhite': '#fdf8fc',
          'text': '#2c2c2c'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif']
      }
    },
  },
  plugins: [],
} 