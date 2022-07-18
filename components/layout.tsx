import { ReactNode, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Time } from "../interfaces/hooks";
import { LayoutProps } from "../interfaces/props";

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
