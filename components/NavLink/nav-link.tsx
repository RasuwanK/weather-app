import Link from "next/link";
import { Fragment, ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  icon: JSX.Element;
}

export function NavLink({ href, children, icon }: NavLinkProps) {
  return (
    <li className="nav-link-container">
      <Link href={href} prefetch={true}>
        <a
          href=""
          className="text-black/[0.80] font-bold hover:bg-[#EAF7FB] hover:cursor-pointer flex flex-row gap-2 items-center  p-3 rounded-[13px]"
        >
          <Fragment>{icon}</Fragment>
          {children}
        </a>
      </Link>
    </li>
  );
}
