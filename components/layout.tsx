import { ReactNode } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Time } from "../interfaces/hooks";

interface LayoutProps {
  children: ReactNode;
  time: Time;
}

export default function Layout({ children, time }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
