"use client";

import DesktopNav from "./DesktopNav";
import MobileDrawer from "./MobileDrawer";
import Container from "../shared/Container";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0A0F1F]/70">

      <Container className="h-16 flex items-center justify-between">

        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="MEDVOXA"
            className="h-9 object-contain"
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex">
          <DesktopNav />
        </nav>

        {/* MOBILE */}
        <div className="md:hidden">
          <MobileDrawer />
        </div>

      </Container>

    </header>
  );
}