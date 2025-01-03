/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": "Poppins"
      },
      colors: {
        "primary": "#1cb8a0",
        "primary2": "#16DB65",
        "primary3": "#0D2818",
      }
    },
  },
  plugins: [],
}

