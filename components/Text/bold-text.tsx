import { ReactNode } from "react";

interface BoldTextProps {
  children: ReactNode;
  isCenter?: boolean;
}

export function BoldText({ children, isCenter }: BoldTextProps) {
  return (
    <p className={`font-bold text-[20px] ${isCenter ? "text-center" : ""}`}>
      {children}
    </p>
  );
}
