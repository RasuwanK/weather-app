import Link from "next/link";
import { ReactNode } from "react";

interface LinkButtonProps {
  href: string;
  children: ReactNode;
}

export function LinkButton({ href, children }: LinkButtonProps) {
  return (
    <Link href={href}>
      <a
        href=""
        className="text-center p-3 font-bold rounded-[10px] bg-gradient-to-r from-[#78E4F2] to-[#A6F3E5] hover:bg-gradient-to-r hover:from-[#40DDC1] hover:to-[#7BC7FE]"
      >
        {children}
      </a>
    </Link>
  );
}
