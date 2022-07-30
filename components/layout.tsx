import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { LayoutProps } from "../interfaces/props";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid grid-cols-1 w-full">
      <Navbar />
      <main id="main-content" className="mt-[90px] z-0 bg-gradient-to-b from-[#D7F9D0] to-[#EEF9ED]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
