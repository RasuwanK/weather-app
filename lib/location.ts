// Just returns a promise to handle location
// Attention must use this function inside the client

//const minute = 1000 * 60;

export function Location() {
  let id: number = -1;

  return {
    id,
    promise: new Promise<GeolocationPosition>((resolve, reject) => {
      id = navigator.geolocation.watchPosition(resolve, reject, config);
    }),
  };
}

export function stopLocation(id: number) {
  navigator.geolocation.clearWatch(id);
}

export const config = {
  maximumAge: 0,
  timeout: Infinity,
  enableHighAccuracy: true,
};
