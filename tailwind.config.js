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
        "ratio-1-2": "1fr 2fr",
        "ratio-2-1": "2fr 1fr",
        "ratio-2-1-1": "2fr 1fr 1fr",
        "200px-5": "repeat(5, 200px)",
        "150px-5": "repeat(5,150px)"
      },
      gridTemplateRows: {
        "tab-layout": "2fr 1fr",
        "right-row": "1fr 2fr",
        "ratio-2-1-1": "250px 120px 120px",
        "ratio-1-2": "1fr 2fr",
        "ratio-1-3":"1fr 3fr"
      },
      screens: {
        "sx":"370px"
      }
    },
  },
  plugins: [],
};
