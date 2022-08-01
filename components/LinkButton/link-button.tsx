import Link from "next/link";
import { ReactNode } from "react";

interface LinkButtonProps {
  href: string;
  children: ReactNode;
}

export function LinkButton({ href, children }: LinkButtonProps) {
  return (
    <Link href={href}>
      <a href="" className="text-center p-2">{children}</a>
    </Link>
  );
}
