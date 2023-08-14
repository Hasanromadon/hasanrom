/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      fontWeight: {
        'normal': 400,
        'bold': 700,
      },
    },
  },
  plugins: [],
}

