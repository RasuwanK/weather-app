import { useClock } from "../hooks/useClock";

export default function Navbar() {
  const { hours, minutes, seconds } = useClock();
  
  return (
    <nav id="navbar">
      <div id="time-container">
        <p>
          {hours}: {minutes}: {seconds}
        </p>
      </div>
    </nav>
  );
}
