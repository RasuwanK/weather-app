import { ReactNode } from "react";
import { WeatherData } from "./weather-data";

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
