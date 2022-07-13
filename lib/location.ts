// Just returns a promise to handle location
// Attention must use this function inside the client

//const minute = 1000 * 60;

export function Location() {
  return new Promise<GeolocationPosition>((resolve, reject) => {
    if (typeof navigator !== "undefined") {
      // I have not written any code to stop watchPosition();
      navigator.geolocation.watchPosition(resolve, reject, config);
    }
  });
}

export const config = {
  maximumAge: 0,
  timeout: Infinity,
  enableHighAccuracy: true,
};
