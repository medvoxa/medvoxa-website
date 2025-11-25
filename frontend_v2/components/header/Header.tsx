"use client";

import DesktopNav from "./DesktopNav";
import MobileDrawer from "./MobileDrawer";
import Container from "../shared/Container";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200">
      <Container className="h-16 flex items-center justify-between">

        <a href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="MEDVOXA" className="h-14 w-100" />
        </a>

        <nav className="hidden md:flex">
          <DesktopNav />
        </nav>

        <div className="md:hidden">
          <MobileDrawer />
        </div>

      </Container>
    </header>
  );
}
