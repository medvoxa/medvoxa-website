"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV = [
  ["Services", "/services"], ["Solutions", "/solutions"], ["Specialties", "/specialties"],
  ["Pricing", "/pricing"], ["Company", "/company"], ["Careers", "/careers"],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const f=()=>setScrolled(window.scrollY>8); window.addEventListener("scroll",f,{passive:true}); return()=>window.removeEventListener("scroll",f); }, []);
  useEffect(() => { document.body.style.overflow=open?"hidden":""; return()=>{document.body.style.overflow=""}; },[open]);
  return <>
    <header className={`site-nav ${scrolled?"is-scrolled":""}`}>
      <div className="m-container nav-inner">
        <Link href="/" className="nav-logo"><Image src="/logo.svg" alt="MEDVOXA" width={160} height={38} priority /></Link>
        <nav className="nav-links">{NAV.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav>
        <div className="nav-actions"><Link href="/contact" className="nav-contact">Contact</Link><Link href="/contact" className="m-btn m-btn-red m-btn-sm">Request Demo</Link></div>
        <button className="nav-toggle" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}><span/><span/><span/></button>
      </div>
    </header>
    {open && <div className="mobile-menu"><div className="mobile-menu-inner">{NAV.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}<span>↗</span></Link>)}<div className="mobile-actions"><Link href="/contact" className="m-btn m-btn-red" onClick={()=>setOpen(false)}>Request Demo</Link><Link href="/founding" className="m-btn m-btn-outline" onClick={()=>setOpen(false)}>Founding Practice</Link></div></div></div>}
    <div className="nav-spacer" />
  </>;
}
