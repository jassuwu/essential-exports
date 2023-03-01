/** @type {import('tailwindcss').Config} */
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
      }
    },
  },
  plugins: [],
}