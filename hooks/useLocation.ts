import { useState, useEffect } from "react";

const second = 1000;
const minute = second * 60;

export function useLocation() {
  const [location, setLocation] = useState<GeolocationCoordinates>();
  const [isLocationLoading, setLocationLoading] = useState<boolean>(false);
  const [locationError, setLocationError] =
    useState<GeolocationPositionError>();
  const [noLocation, setNoLocation] = useState<boolean>(false);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      if ("geolocation" in navigator) {
        setLocationLoading(true);
        navigator.geolocation.watchPosition(
          (position) => {
            setLocation(position.coords);
            setLocationLoading(false);
          },
          (error) => {
            setLocationLoading(false);
            setLocationError(error);
          },
          { timeout: minute * 5, enableHighAccuracy: true, maximumAge: 0 }
        );
      } else {
        setLocationLoading(false);
        setLocation(undefined);
        setNoLocation(true);
      }
    }
  }, []);

  return {
    location,
    isLocationLoading,
    locationError,
    noLocation,
  };
}
