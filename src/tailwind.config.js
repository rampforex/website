/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1F3A93',
          orange: '#F7E14D',
        }
      }
    },
  },
  plugins: [],
};