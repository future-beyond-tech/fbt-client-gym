"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Dumbbell } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Results", href: "#transformations" },
  { name: "BMI Check", href: "#bmi" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-lg border-b border-[#39ff14]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <Dumbbell className="w-7 h-7 text-[#39ff14] group-hover:rotate-12 transition-transform" />
            <span className="text-xl md:text-2xl font-black tracking-tight">
              FIT<span className="text-[#39ff14]">WITH</span>NIKHIL
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-[#39ff14] transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#39ff14] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="https://wa.me/919700780595?text=Hi%20Nikhil!%20I'm%20interested%20in%20personal%20training."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2 bg-[#39ff14] text-black font-bold text-sm rounded-full hover:shadow-[0_0_20px_rgba(57,255,20,0.5)] transition-all"
            >
              Book Free Trial
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-[#39ff14]/10"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block px-4 py-3 text-lg font-medium text-gray-300 hover:text-[#39ff14] hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="https://wa.me/919700780595?text=Hi%20Nikhil!%20I'm%20interested%20in%20personal%20training."
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-center px-5 py-3 bg-[#39ff14] text-black font-bold rounded-full"
              >
                Book Free Trial
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
