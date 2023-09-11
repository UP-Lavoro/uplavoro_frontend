/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',  
        'xl': '1440px',
        '2xl': '1920px',
      },
      colors: {
        'hero': '#500e9e',
        'white': '#ffffff',
        'black': '#111111',
        'footer-bar': '#f6f6f6',
        'paragraph' : '#696969',
        'green': '#008E10',
        'orange': '#F89533',
        'gray' : {
          '50' : '#e5e7eb',
          '100': '#C6C4C4',
          '200' : '#f3f3f3',
          '300': '#707070',
        },
        'button-full': '#b433f8',
        'delete' : '#82183C'
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
