import { useState } from "react";

interface Theme {
  bg: string;
  fg: string;
}

const themes = {
  default: {
    bg: "bg-gradient-to-r from-[#B8DA82] to-[#1ECCC7]",
    fg: "text-black",
  },
  clear: {
    bg: "bg-gradient-to-r from-[#F2BE6F] to-[#F6C881]",
    fg: "text-black",
  },
  clouds: {
    bg: "bg-gradient-to-r from-[#C0C9DA] to-[#8BF3F0]",
    fg: "text-black",
  },
  atmosphere: {
    bg: "bg-gradient-to-r from-[#A5DDEA] to-[#49A58F]",
    fg: "text-black",
  },
  snow: {
    bg: "bg-gradient-to-r from-[#CEE2FF] to-[#A8B4DE]",
    fg: "text-black",
  },
  rain: {
    bg: "bg-gradient-to-r from-[#D4D8D9] to-[#858586]",
    fg: "text-black",
  },
  drizzle: {
    bg: "bg-gradient-to-r from-[#505555] to-[#3A3B40]",
    fg: "text-black",
  },
  thunderstorm: {
    bg: "bg-gradient-to-r from-[#151818] to-[#111113]",
    fg: "text-white",
  },
};

export function useTheme(weatherId: number | undefined): Theme {
  if (typeof weatherId === "undefined") {
    return themes.default;
  } else {
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
  }
}
