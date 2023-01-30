/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#0081C9',
          accent: '#FF7B54',
        },
        'background-dark': '#111729',
        textColor: {
          primary: '#1B2430',
          accent: '#474E68',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
