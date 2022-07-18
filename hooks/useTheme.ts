const themes = {
  default: {
    //mainIcon: { day: faXmarkCircle, night: faXmarkCircle },
    bg: { from: "#B8DA82", to: "#1ECCC7" },
    fg: "text-black",
    tempTable: {
      bg: 'black',
      fg: 'white'
    } 
  },
  clear: {
    //mainIcon: { day: regular("fa-cloud"), night: faMoon },
    bg: { from: "#F2BE6F", to: "#F6C881" },
    fg: "text-black",
  },
  clouds: {
    //mainIcon: { day: faCloud, night: faCloudMoon },
    bg: { from: "#C0C9DA", to: "#8BF3F0" },
    fg: "text-black",
  },
  atmosphere: {
    //mainIcon: { day: faSmog, night: faSmog },
    bg: { from: "#A5DDEA", to: "#49A58F" },
    fg: "text-black",
  },
  snow: {
    //mainIcon: { day: faSnowflake, night: faSnowflake },
    bg: { from: "#CEE2FF", to: "#A8B4DE" },
    fg: "text-black",
  },
  rain: {
    //mainIcon: { day: faCloudSunRain, night: faCloudMoonRain },
    bg: { from: "#D4D8D9", to: "#858586" },
    fg: "text-black",
  },
  drizzle: {
    //mainIcon: { day: faCloudRain, night: faCloudRain },
    bg: { from: "#505555", to: "#3A3B40" },
    fg: "text-black",
  },
  thunderstorm: {
    //mainIcon: { day: faCloudBolt, night: faCloudBolt },
    bg: { from: "#151818", to: "#111113" },
    fg: "text-white",
  },
};

export function useTheme(weatherId: number | undefined) {
  if (typeof weatherId !== "undefined") {
    if (weatherId >= 200 && weatherId <= 232) {
      return themes.thunderstorm;
    } else if (weatherId >= 300 && weatherId <= 321) {
      return themes.drizzle;
    } else if (weatherId >= 500 && weatherId <= 531) {
      return themes.rain;
    } else if (weatherId >= 600 && weatherId <= 622) {
      return themes.snow;
    } else if (weatherId >= 701 && weatherId <= 781) {
      return themes.atmosphere;
    } else if (weatherId === 800) {
      return themes.clear;
    } else if (weatherId >= 801 && weatherId <= 804) {
      return themes.clouds;
    } else {
      return themes.default;
    }
  } else {
    return themes.default;
  }
}
