import { ReactNode, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Time } from "../interfaces/hooks";

interface LayoutProps {
  children: ReactNode;
  time: Time;
  isLocationLoading: boolean;
  locationError: GeolocationPositionError | undefined;
}

export default function Layout({
  children,
  time,
  isLocationLoading,
  locationError,
}: LayoutProps) {
  return (
    <div>
      <Navbar />
      <main id="main-content z-0">{children}</main>
      <Footer />
    </div>
  );
}
