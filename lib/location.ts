// Just returns a promise to handle location
// Attention must use this function inside the client

//const minute = 1000 * 60;

export function Location() {
  return new Promise<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, config);
  });
}

export const config = {
  maximumAge: 0,
  timeout: Infinity,
  enableHighAccuracy: true,
};
