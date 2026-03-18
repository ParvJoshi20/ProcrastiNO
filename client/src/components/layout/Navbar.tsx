"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-center z-50">
      <nav
        className={`flex items-center w-[92%] max-w-7xl px-10 py-5
        transition-all duration-300 rounded-b-[40px]

        ${
          scrolled
            ? "bg-[#717871]/30 backdrop-blur-2xl border border-[#717871]/20 shadow-xl"
            : "bg-[#717871]/20 backdrop-blur-xl"
        }`}
      >
        {/* LOGO */}
        <div className="flex items-center flex-1">
          <Link href="/" className="group">
            <Image
              src="/logo.png"
              alt="ProcrastiNO"
              width={65}
              height={65}
              className="-rotate-12 group-hover:rotate-0 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center justify-center gap-10 flex-1 text-xl font-semibold">
          <Link href="/" className="text-[#E9E6DD] opacity-60 hover:text-cream hover:opacity-100 transition">
            Home
          </Link>

          <Link href="#about" className="text-[#E9E6DD] opacity-60 hover:text-cream hover:opacity-100 transition">
            About
          </Link>

          <Link href="#features" className="text-[#E9E6DD] opacity-60 hover:text-cream hover:opacity-100 transition">
            Services
          </Link>

          <Link href="#contact" className="text-[#E9E6DD] opacity-60 hover:text-cream hover:opacity-100 transition">
            Contact
          </Link>
        </div>

        {/* CTA + MOBILE MENU BUTTON */}
        <div className="flex items-center justify-end flex-1 gap-4">

          <button
            className="bg-[#FBD954] border-4 text-xl border-[#8F391C] text-[#062325] px-6 py-2 rounded-full font-semibold hover:scale-95 transition hidden md:block cursor-pointer"
          >
            <Link href="">Get Started</Link>
          </button>

          {/* Hamburger */}
          <button
            aria-label="Toggle Navigation Menu"
            className="md:hidden text-cream"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className={`absolute top-full mt-4 w-[92%] max-w-7xl rounded-3xl
          bg-[#717871]/30 backdrop-blur-2xl border border-[#717871]/20
          flex flex-col items-center gap-6 py-8 text-lg font-semibold md:hidden
          transition-all duration-300
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}
        `}
        >

          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link href="#about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link href="#features" onClick={() => setMenuOpen(false)}>
            Services
          </Link>

          <Link href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          <button className="bg-[#FBD954] border-2 border-[#8F391C] text-[#062325] px-6 py-2 rounded-full font-semibold hover:scale-105 transition cursor-pointer">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}