import { useState, useEffect } from "react";
import { Location, stopLocation } from "../lib/location";

// Custom hook that will return live location of the user
export function useLocation() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [location, setLocation] = useState<GeolocationCoordinates>();
  const [error, setError] = useState<GeolocationPositionError>();
  const [timestamp, setTimestamp] = useState<number>();

  useEffect(() => {
    const location = Location();
    location.promise
      .then((location) => {
        setLocation(location.coords);
        setTimestamp(location.timestamp);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
        stopLocation(location.id);
      });

    return () => {
      stopLocation(location.id);
    };
  }, []);

  return { location, isLoading, error, timestamp };
}
