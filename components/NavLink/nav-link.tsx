import Link from "next/link";
import { Fragment, MouseEventHandler, ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  icon: JSX.Element;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export function NavLink({ href, children, icon, onClick }: NavLinkProps) {
  return (
    <li className="nav-link-container">
      <Link href={href}>
        <a
          href=""
          className="text-black/[0.80] font-bold hover:bg-[#b8bdc0] hover:cursor-pointer grid grid-cols-ratio-1-2 items-center justify-items-center w-[300px] h-[60px] lg:w-auto lg:text-[15px]  p-3 rounded-[13px]"
          onClick={onClick}
        >
          <Fragment>{icon}</Fragment>
          {children}
        </a>
      </Link>
    </li>
  );
}
