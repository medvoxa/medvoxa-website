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
      <body className={inter.className + " bg-gradient-to-b from-white to-slate-50 text-slate-900"}>
        
        {/* Global Navigation */}
        <NavBar />

        {children}

      </body>
    </html>
  );
}
