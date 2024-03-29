import { ReactNode } from "react";

interface BoldMediumTextProps {
  children: ReactNode;
  isCenter?: boolean;
}

export function BoldMediumText({ children, isCenter }: BoldMediumTextProps) {
  return (
    <p className={`font-bold text-[30px] sx:text-[42px] ${isCenter ? "text-center" : ""}`}>
      {children}
    </p>
  );
}
