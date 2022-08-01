import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { LayoutProps } from "../interfaces/props";

export default function Layout({ children }: LayoutProps) {
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
