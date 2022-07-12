/** @type {import('tailwindcss').Config} */

const backgroundImages = {
  clearSkyDay:
    "https://images.wallpaperscraft.com/image/single/mountains_sky_top_114977_1280x720.jpg",
  clearSkyNight:
    "https://images.wallpaperscraft.com/image/single/night_moon_sky_138549_1280x720.jpg",
  cloudySkyDay:
    "https://images.wallpaperscraft.com/image/single/clouds_sky_cloudy_178719_1280x720.jpg",
  cloudySkyNight:
    "https://images.wallpaperscraft.com/image/single/clouds_sky_night_114899_1280x720.jpg",
  rainDay:
    "https://images.wallpaperscraft.com/image/single/leaf_rain_sad_163466_1280x720.jpg",
  rainNight:
    "https://images.wallpaperscraft.com/image/single/rain_drops_spray_130959_1280x720.jpg",
  thunderDay:
    "https://images.wallpaperscraft.com/image/single/lightning_thunderstorm_cloudy_126444_1280x720.jpg",
  thunderNight:
    "https://images.wallpaperscraft.com/image/single/lightning_thunderstorm_cloudy_126444_1280x720.jpg",
  snowDay:
    "https://images.wallpaperscraft.com/image/single/hill_snow_winter_92514_1280x720.jpg",
  snowNight:
    "https://images.wallpaperscraft.com/image/single/snow_trees_northern_lights_199451_1280x720.jpg",
  mistNight:
    "https://images.wallpaperscraft.com/image/single/fog_trees_hills_147477_1280x720.jpg",
  mistDay:
    "https://images.wallpaperscraft.com/image/single/forest_fog_darkness_195631_1280x720.jpg",
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
