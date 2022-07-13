import { useState, useEffect } from "react";
import { Location } from "../lib/location";

// Custom hook that will return live location of the user
export function useLocation() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [location, setLocation] = useState<GeolocationCoordinates>();
  const [error, setError] = useState<GeolocationPositionError>();
  //const [timestamp, setTimestamp] = useState<number>();

  useEffect(() => {
    Location()
      .then((location) => {
        setLocation(location.coords);
        setIsLoading(false);
        //setTimestamp(timestamp);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return {
    location,
    isLocationLoading: isLoading,
    locationError: error,
  };
}
