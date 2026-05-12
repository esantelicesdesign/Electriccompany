import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppFloatingButton } from "./components/WhatsAppFloatingButton";

export function Root() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
