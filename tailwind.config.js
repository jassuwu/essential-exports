/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': "#262626",
        'light': "#EFEAEA",
        'footer-dark': "#516566",
        'footer-light': "#E4D8D8",
        'primary-light': "#000000",
        'primary-dark': "#FFFFFF",
        'casper': "#9ABCBE",
        'grey': "#A3BABB"
      },
      fontFamily: {
        'anybody': ['Anybody', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      dropShadow: {
        'dark': "7px 8px 6px rgba(91,91,91)",
        'white': "0 0 0 rgba(255,255,255, 0.9)",
      }
    },
  },
  plugins: [],
}