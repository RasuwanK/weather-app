import { Navbar } from "./navbar";
import { Footer } from "./footer";
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
