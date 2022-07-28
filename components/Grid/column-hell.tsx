import { ReactNode } from "react";

interface ColumnHellProps {
  className?: string;
  children: ReactNode;
}

export function ColumnHell({ className, children }: ColumnHellProps) {
  return <div className={`grid grid-cols-1 ${className}`}>{children}</div>;
}
