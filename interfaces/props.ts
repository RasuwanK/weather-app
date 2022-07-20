import { ReactNode } from "react";
import { WeatherData } from "./weather-data";

interface ThemeData {
  bg: { day: string; night: string };
  fg: { day: string; night: string };
}

interface Theme {
  left: ThemeData;
  right: ThemeData;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface ForecastPageProps {
  location: GeolocationCoordinates;
  isLocationLoading: boolean;
  locationError: GeolocationPositionError;
  timestamp: number;
}

export interface MainForecastProps {
  data: WeatherData | undefined;
}

export interface MainContentProps {
  isLocationLoading: boolean;
  locationError: GeolocationPositionError;
  isWeatherLoading: boolean;
  data: WeatherData | undefined;
  weatherError: any;
}

export interface CurrentWeatherProps {
  main: string | undefined;
  description: string | undefined;
  temperature: number | undefined;
  weatherIcon?: undefined; // TODO: ADD ICONS
}

export interface DashboardProps {
  theme: Theme;
  data: WeatherData | undefined;
  cachedData: WeatherData | undefined;
}

export interface DashboardLeftProps {
  theme: Theme;
  weatherMain: string;
  weatherDescription: string;
}

export interface DashboardRightProps {
  theme: Theme;
}

export interface TabProps {
  icon: any;
  children: ReactNode;
}

export interface TabListProps {
  children: ReactNode;
}

export interface TabContentProps {
  theme: Theme;
}

export interface TabSwitcherProps {
  theme: Theme;
}
