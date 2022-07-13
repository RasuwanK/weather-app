import React, { ReactNode } from "react";
import { WeatherData } from "./weather-data";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

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
  main: string;
  description: string;
  temperature: number;
  weatherIcon: IconProp;
}
