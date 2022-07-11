import { ReactNode } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar></Navbar>
      <main id="main-content">{children}</main>
      <Footer></Footer>
    </div>
  );
}
