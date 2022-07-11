import { useState, useEffect } from "react";
import { Time } from "../interfaces/hooks";

// can be used a live clock
export function useClock() {
  const [{ hours, minutes, seconds }, setTime] = useState<Time>({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timerId = setInterval(() => {
      const date = new Date();
      setTime({
        hours: date.getHours().toString().padStart(2, "0"),
        minutes: date.getMinutes().toString().padStart(2, "0"),
        seconds: date.getSeconds().toString().padStart(2, "0"),
      });
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return { hours, minutes, seconds };
}
