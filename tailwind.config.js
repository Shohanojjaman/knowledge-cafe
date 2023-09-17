/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        exo2: "'Exo 2', sans-serif",
      },
      colors: {
        header: '#111111',
        body: '#11111199',
      },
    },
  },
  plugins: [],
};
