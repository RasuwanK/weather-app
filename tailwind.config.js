/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["'Open sans'"],
      },
      gridTemplateColumns: {
        "dashboard-lg": "1fr 2fr",
      },
    },
  },
  plugins: [],
};
