"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll to toggle transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Methodology", href: "#methodology" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 w-full z-100 flex justify-center p-4 sm:p-6 pointer-events-none">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          relative w-full max-w-7xl flex items-center justify-between px-6 py-3 sm:py-4 rounded-full border transition-all duration-300 pointer-events-auto
          ${isScrolled 
            ? "bg-brandBg/80 backdrop-blur-xl border-brandCream/10 shadow-2xl" 
            : "bg-transparent border-transparent"}
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/logo.png" alt="ProcrastiNO Logo" width={32} height={32} className="rounded-full" />
          <span className="text-xl font-black text-brandCream tracking-tighter uppercase">
            Procrasti<span className="text-brandNeon">NO</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-brandCream/70 hover:text-brandNeon transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/dashboard"
            className="px-6 py-2 bg-brandYellow text-brandBg rounded-full text-sm font-extrabold hover:bg-brandRust hover:text-brandNeon transition-all hover:scale-105"
          >
            Start Now
          </Link>
        </div>

        {/* Mobile Hamburger - High Contrast */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-brandCream hover:text-brandNeon transition-colors z-110"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute top-0 left-0 w-full h-screen bg-brandBg flex flex-col items-center justify-center gap-8 md:hidden z-105"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-black text-brandCream uppercase tracking-tighter hover:text-brandNeon"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-10 py-4 bg-brandNeon text-brandBg rounded-full text-xl font-black uppercase"
              >
                Start Now
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}