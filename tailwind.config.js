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
        "ratio-2-1-1": "2fr 1fr 1fr"
      },
      gridTemplateRows: {
        "tab-layout": "2fr 1fr",
        "right-row": "1fr 2fr",
      },
    },
  },
  plugins: [],
};
