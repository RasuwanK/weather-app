export function getDirection(direction: number | undefined): {
  dir: number | string;
  from: string | "";
  to: string | "";
} {
  if (typeof direction !== "undefined") {
    if (direction == 0 || direction == 360) {
      return { dir: "North", from: "", to: "" };
    } else if (direction > 0 && direction < 45) {
      return { dir: direction, from: "North", to: "East" };
    } else if (direction == 45) {
      return { dir: "North East", from: "", to: "" };
    } else if (direction > 45 && direction < 90) {
      return { dir: direction, from: "North", to: "East" };
    } else if (direction == 90) {
      return { dir: "East", from: "", to: "" };
    } else if (direction > 90 && direction < 135) {
      return { dir: direction - 90, from: "East", to: "South" };
    } else if (direction == 135) {
      return { dir: "South East", from: "", to: "" };
    } else if (direction > 135 && direction < 180) {
      return { dir: direction - 90, from: "East", to: "South" };
    } else if (direction == 180) {
      return { dir: "South", from: "", to: "" };
    } else if (direction > 180 && direction < 225) {
      return { dir: direction - 180, from: "South", to: "West" };
    } else if (direction == 225) {
      return { dir: "South West", from: "", to: "" };
    } else if (direction > 225 && direction < 270) {
      return { dir: direction - 180, from: "South", to: "West" };
    } else if (direction == 270) {
      return { dir: "West", from: "", to: "" };
    } else if (direction > 270 && direction < 315) {
      return { dir: direction - 270, from: "West", to: "North" };
    } else if (direction == 315) {
      return { dir: "North West", from: "", to: "" };
    } else if (direction > 315 && direction < 360) {
      return { dir: direction - 270, from: "West", to: "North" };
    } else {
      return { dir: 0, from: "", to: "" };
    }
  } else {
    return { dir: 0, from: "", to: "" };
  }
}
