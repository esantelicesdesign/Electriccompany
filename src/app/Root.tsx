import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppFloatingButton } from "./components/WhatsAppFloatingButton";
import { RouteSeo } from "./components/RouteSeo";

export function Root() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <RouteSeo />
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
