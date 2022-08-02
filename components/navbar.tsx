import { useState } from "react";
import { NavLink } from "./NavLink/nav-link";
import AirIcon from "./SVGs/air-icon";
import { CloudSun } from "./SVGs/cloud-sun";
import { HamburgerIcon } from "./SVGs/hamburger-icon";
import { HomeIcon } from "./SVGs/home-icon";
import { QuestionIcon } from "./SVGs/question-icon";
import { SunClock } from "./SVGs/sun-clock-icon";
import { CrossIcon } from "./SVGs/cross-icon";

export function Navbar() {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <nav className="navbar fixed top-0 z-10 p-[10px] w-full flex flex-row items-center bg-[white]/[0.61] backdrop-blur-lg">
      <section className="normal hidden lg:flex lg:flex-col w-full">
        <ul className="navlinks list-none flex flex-row gap-6 items-center">
          <NavLink
            href="/"
            icon={<HomeIcon dimensions={{ width: 30, height: 30 }} />}
          >
            Home
          </NavLink>
          <NavLink
            href="/current"
            icon={<CloudSun dimensions={{ width: 30, height: 30 }} />}
          >
            Current
          </NavLink>
          <NavLink
            href="/air-pollution"
            icon={<AirIcon dimensions={{ width: 30, height: 30 }} />}
          >
            Air pollution
          </NavLink>
          <NavLink
            href="/"
            icon={<QuestionIcon dimensions={{ width: 30, height: 30 }} />}
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
      </section>
      <section className="mobile flex flex-col lg:hidden w-full">
        <div className="main-content-navbar w-full">
          <button onClick={() => setOpen((prevState) => !prevState)}>
            {isOpen ? (
              <CrossIcon dimensions={{ width: 30, height: 30 }} />
            ) : (
              <HamburgerIcon dimensions={{ width: 30, height: 30 }} />
            )}
          </button>
        </div>
        {isOpen && (
          <ul className="navlinks list-none flex flex-col content-center items-center gap-6 w-full">
            <NavLink
              href="/"
              onClick={() => setOpen((prevState) => !prevState)}
              icon={<HomeIcon dimensions={{ width: 30, height: 30 }} />}
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setOpen((prevState) => !prevState)}
              href="/current"
              icon={<CloudSun dimensions={{ width: 30, height: 30 }} />}
            >
              Current
            </NavLink>
            <NavLink
              onClick={() => setOpen((prevState) => !prevState)}
              href="/air-pollution"
              icon={<AirIcon dimensions={{ width: 30, height: 30 }} />}
            >
              Air pollution
            </NavLink>
            <NavLink
              onClick={() => setOpen((prevState) => !prevState)}
              href="/"
              icon={<SunClock dimensions={{ width: 40, height: 40 }} />}
            >
              Forecast
            </NavLink>
            <NavLink
              onClick={() => setOpen((prevState) => !prevState)}
              href="/about"
              icon={<QuestionIcon dimensions={{ width: 30, height: 30 }} />}
            >
              About
            </NavLink>
          </ul>
        )}
      </section>
    </nav>
  );
}
