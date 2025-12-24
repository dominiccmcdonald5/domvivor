/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        domvivor: {
          blue: {
            light: '#87CEEB',
            DEFAULT: '#4A90E2',
            dark: '#2C5F8D',
          },
          ice: '#E6F3FF',
          snow: '#FFFFFF',
          mountain: '#6B8BA8',
          taiga: '#2D5016',
          ural: '#4FB4D8',
        }
      },
      backgroundImage: {
        'frozen-gradient': 'linear-gradient(135deg, #87CEEB 0%, #4A90E2 50%, #2C5F8D 100%)',
        'taiga-gradient': 'linear-gradient(135deg, #2D5016 0%, #4A7023 100%)',
        'ural-gradient': 'linear-gradient(135deg, #4FB4D8 0%, #87CEEB 100%)',
      }
    },
  },
  plugins: [],
}
