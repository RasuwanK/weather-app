/** @type {import('tailwindcss').Config} */

const backgroundImages = {
  clearSkyDay:
    "https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  clearSkyNight:
    "https://images.pexels.com/photos/6510358/pexels-photo-6510358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  cloudySkyDay:
    "https://images.pexels.com/photos/5341778/pexels-photo-5341778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  cloudySkyNight:
    "https://images.pexels.com/photos/4715753/pexels-photo-4715753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  rainDay:
    "https://images.pexels.com/photos/913807/pexels-photo-913807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  rainNight:
    "https://images.pexels.com/photos/5331875/pexels-photo-5331875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  thunderDay:
    "https://images.pexels.com/photos/2418664/pexels-photo-2418664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  thunderNight:
    "https://images.pexels.com/photos/2531709/pexels-photo-2531709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  snowDay:
    "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  snowNight:
    "https://images.pexels.com/photos/1417647/pexels-photo-1417647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  mistNight:
    "https://images.pexels.com/photos/358235/pexels-photo-358235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  mistDay:
    "https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "clear-sky-day": `url('${backgroundImages.clearSkyDay}')`,
        "clear-sky-night": `url(${backgroundImages.clearSkyNight})`,
        "cloudy-sky-day": `url(${backgroundImages.cloudySkyDay})`,
        "cloudy-sky-night": `url(${backgroundImages.cloudySkyNight})`,
        "rain-day": `url(${backgroundImages.rainDay})`,
        "rain-night": `url(${backgroundImages.rainNight})`,
        "thunder-day": `url(${backgroundImages.thunderDay})`,
        "thunder-night": `url(${backgroundImages.thunderNight})`,
        "snow-day": `url(${backgroundImages.snowDay})`,
        "snow-night": `url(${backgroundImages.snowNight})`,
        "mist-night": `url(${backgroundImages.mistNight})`,
        "mist-day": `url(${backgroundImages.mistDay})`,
      },
    },
  },
  plugins: [],
};
