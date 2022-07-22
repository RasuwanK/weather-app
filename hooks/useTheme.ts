const themes = {
  default: {
    left: {
      bg: {
        day: "url('https://images.unsplash.com/photo-1558418294-9da149757efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80')",
        night:
          "url('https://images.unsplash.com/photo-1531828051742-b644a99e319d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80')",
      },
      fg: {
        day: "#75a9d0",
        night: "#75a9d0",
      },
    },
    right: {
      bg: { day: "#75a9d0", night: "#071c2e" },
      fg: { day: "black", night: "white" },
    },
  },
  clear: {
    //mainIcon: { day: regular("fa-cloud"), night: faMoon },
    left: {
      bg: {
        day: "url('https://images.unsplash.com/photo-1558418294-9da149757efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80')",
        night:
          "url('https://images.unsplash.com/photo-1531828051742-b644a99e319d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80')",
      },
      fg: {
        day: "#03615D",
        night: "#89A3C8",
      },
    },
    right: {
      bg: { day: "#75a9d0", night: "#071c2e" },
      fg: { day: "black", night: "white" },
    },
  },
  clouds: {
    //mainIcon: { day: faCloud, night: faCloudMoon },
    left: {
      bg: {
        day: "url('https://images.unsplash.com/photo-1563004597-7bcef0f8a842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80')",
        night:
          "url('https://images.unsplash.com/photo-1607481416366-c8daccb8f3e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80')",
      },
      fg: {
        day: "black",
        night: "#D5DEEB",
      },
    },
    right: {
      fg: { day: "white", night: "white" },
      bg: { day: "#1c708a", night: "#01132a" },
    },
  },
  atmosphere: {
    //mainIcon: { day: faSmog, night: faSmog },
    left: {
      bg: {
        day: "url('https://images.unsplash.com/photo-1575214997383-a3592741c334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80')",
        night:
          "url('https://images.unsplash.com/photo-1504941214544-9c1c44559ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80')",
      },
      fg: {
        day: "#583A09",
        night: "#AFA89C",
      },
    },
    right: {
      bg: { day: "#898172", night: "#6498a2" },
      fg: { day: "white", night: "white" },
    },
  },
  snow: {
    //mainIcon: { day: faSnowflake, night: faSnowflake },
    left: {
      bg: {
        day: "url('https://images.unsplash.com/photo-1544235653-a313b8a430d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80')",
        night:
          "url('https://images.unsplash.com/photo-1518467946652-b194dd6dd321?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80')",
      },
      fg: {
        day: "#192B09",
        night: "white",
      },
    },
    right: {
      bg: { day: "#bac5cf", night: "#101b1f" },
      fg: { day: "black", night: "white" },
    },
  },
  rain: {
    //mainIcon: { day: faCloudSunRain, night: faCloudMoonRain },
    left: {
      bg: {
        day: "url('https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80')",
        night:
          "url('https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80')",
      },
      fg: {
        day: "#E2E6DF",
        night: "#E8ECE6",
      },
    },
    right: {
      fg: { day: "white", night: "white" },
      bg: { day: "#253941", night: "#04090a" },
    },
  },
  drizzle: {
    //mainIcon: { day: faCloudRain, night: faCloudRain },
    left: {
      bg: {
        day: "url('https://images.unsplash.com/photo-1525087740718-9e0f2c58c7ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80')",
        night:
          "url('https://images.unsplash.com/photo-1525087740718-9e0f2c58c7ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80')",
      },
      fg: {
        day: "#D8F6F4",
        night: "#D8F6F4",
      },
    },
    right: {
      bg: { day: "#025f79", night: "#025f79" },
      fg: { day: "white", night: "white" },
    },
  },
  thunderstorm: {
    //mainIcon: { day: faCloudBolt, night: faCloudBolt },
    left: {
      bg: {
        night:
          "url('https://images.unsplash.com/photo-1514856841774-b927b221d7c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80')",
        day: "url('https://images.unsplash.com/photo-1510300101842-d7a2ed0bde3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80s')",
      },
      fg: {
        day: "#0D0A12",
        night: "#170333",
      },
    },
    right: {
      fg: { day: "black", night: "white" },
      bg: { day: "#bbc4ed", night: "#292735" },
    },
  },
};

export function useTheme(weatherId: number | undefined) {
  let theme;
  if (typeof weatherId !== "undefined") {
    if (weatherId <= 805 && weatherId >= 801) {
      theme = themes.clouds;
    } else if (weatherId === 800) {
      theme = themes.clear;
    } else if (weatherId <= 781 && weatherId >= 701) {
      theme = themes.atmosphere;
    } else if (weatherId <= 622 && weatherId >= 600) {
      theme = themes.snow;
    } else if (weatherId <= 531 && weatherId >= 500) {
      theme = themes.rain;
    } else if (weatherId <= 321 && weatherId >= 300) {
      theme = themes.drizzle;
    } else if (weatherId <= 232 && weatherId >= 200) {
      theme = themes.thunderstorm;
    } else {
      theme = themes.default;
    }
  } else {
    theme = themes.default;
  }

  return theme;
}
