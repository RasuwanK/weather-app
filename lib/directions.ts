export function getDirection(direction: number | undefined) {
  if (typeof direction == "undefined") {
    return "N/A";
  } else {
    if (direction == 0 || direction == 360) {
      return "North";
    } else if (direction > 0 && direction < 45) {
      return `${direction} from North`;
    } else if (direction == 45) {
      return "North East";
    } else if (direction > 45 && direction < 90) {
      return `${direction} from North towards East`;
    } else if (direction == 90) {
      return "East";
    } else if (direction > 90 && direction < 135) {
      return `${direction - 90} from East towards South`;
    } else if (direction == 135) {
      return `South East`;
    } else if (direction > 135 && direction < 180) {
      return `${direction - 90} from East towards South`;
    } else if (direction == 180) {
      return `South`;
    } else if (direction > 180 && direction < 225) {
      return `${direction - 180} from South towards West`;
    } else if (direction == 225) {
      return `South West`;
    } else if (direction > 225 && direction < 270) {
      return `${direction - 180} from South towards West`;
    } else if (direction == 270) {
      return `West`;
    } else if (direction > 270 && direction < 315) {
      return `${direction - 270} from West towards North`;
    } else if (direction == 315) {
      return `North West`;
    } else if (direction > 315 && direction < 360) {
      return `${direction - 270} from West towards North`;
    } else {
      return `Invalid value`;
    }
  }
}
