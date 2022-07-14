import { useState, useEffect } from "react";

export function useLocation() {
  const [location, setLocation] = useState<GeolocationCoordinates>();
  const [isLocationLoading, setLocationLoading] = useState<boolean>(true);
  const [locationError, setLocationError] =
    useState<GeolocationPositionError>();
  const [noLocation, setNoLocation] = useState<boolean>(false);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      if ("geolocation" in navigator) {
        setLocationLoading(true);
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation(position.coords);
            setLocationLoading(false);
          },
          (error) => {
            setLocationLoading(false);
            setLocationError(error);
          }
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
