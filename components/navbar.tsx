import { NavLink } from "./NavLink/nav-link";
import { CloudSun } from "./SVGs/cloud-sun";
import { HomeIcon } from "./SVGs/home-icon";
import { QuestionIcon } from "./SVGs/question-icon";

export function Navbar() {
  return (
    <nav className="navbar fixed top-0 z-10 h-[90px] p-[10px] w-full flex flex-row items-center bg-[white]/[0.61] backdrop-blur-lg">
      <ul className="navlinks list-none flex flex-row gap-6 items-center">
        <NavLink
          href="/"
          icon={<HomeIcon dimensions={{ width: 30, height: 30 }} />}
        >
          Home
        </NavLink>
        <NavLink
          href="/forecast"
          icon={<CloudSun dimensions={{ width: 30, height: 30 }} />}
        >
          Forecast
        </NavLink>
        <NavLink
          href="/about"
          icon={<QuestionIcon dimensions={{ width: 30, height: 30 }} />}
        >
          About
        </NavLink>
      </ul>
    </nav>
  );
}
