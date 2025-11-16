import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MEDVOXA",
  description: "Autonomous RCM Engine",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " min-h-screen bg-gradient-to-b from-[#EFE7E2] to-[#D9CCC4] text-[#3D2B24]"
        }
      >
        {/* Global Navigation */}
        <NavBar />

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
