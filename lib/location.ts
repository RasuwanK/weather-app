// This function helps to give you the current postion of the client

export function getLocation() {
  if ("geolocation" in navigator) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        maximumAge: 0,
        timeout: 10000,
        enableHighAccuracy: true,
      });
    });
  } else {
    alert("Error !");
  }
}
