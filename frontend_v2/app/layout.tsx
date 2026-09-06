import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
const SITE_URL=process.env.NEXT_PUBLIC_SITE_URL||"https://medvoxa.com";
export const metadata: Metadata={metadataBase:new URL(SITE_URL),title:{default:"MEDVOXA — Revenue Cycle Management for Healthcare Providers",template:"%s | MEDVOXA"},description:"MEDVOXA combines structured claim governance, revenue-cycle operations, and intelligent automation for independent practices and specialty groups.",robots:{index:true,follow:true},icons:{icon:"/favicon.ico",apple:"/apple-touch-icon.png"},alternates:{canonical:SITE_URL}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Navbar/><main>{children}</main><Footer/></body></html>}
