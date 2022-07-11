import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface ForecastPageProps {
  location: GeolocationCoordinates;
  isLocationLoading: boolean;
  locationError: GeolocationPositionError;
  timestamp: number;
}
