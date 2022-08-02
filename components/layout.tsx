import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { LayoutProps } from "../interfaces/props";
import { useState } from "react";

export default function Layout({ children }: LayoutProps) {
  const [isDrawyerOpen, setDrawyerOpen] = useState<boolean>(false);
  return (
    <div className="grid grid-cols-1 w-full">
      <Navbar />
      <main
        id="main-content"
        className="z-0 bg-gradient-to-b from-[#AAD8DB] to-[#D3F2CB] pt-[170px]"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
