import { useEffect, useState } from "react";

interface Time {
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}

export default function Navbar() {
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

  return (
    <nav id="navbar">
      <div id="time-container">
        <time dateTime={"2002-10-11"}>Good evening</time>
        <p>
          {hours}: {minutes}: {seconds}
        </p>
      </div>
    </nav>
  );
}
