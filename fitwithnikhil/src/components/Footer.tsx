"use client";
import { Dumbbell, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 bg-[#030303]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-5 h-5 text-[#39ff14]" />
            <span className="font-bold text-sm">
              FIT<span className="text-[#39ff14]">WITH</span>NIKHIL
            </span>
          </div>
          <p className="text-gray-600 text-sm text-center">
            &copy; {new Date().getFullYear()} Fit With Nikhil. All rights reserved.
            Built with <Heart className="w-3 h-3 inline text-[#ff3131]" /> in Hyderabad.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#services" className="hover:text-[#39ff14] transition-colors">Services</a>
            <a href="#transformations" className="hover:text-[#39ff14] transition-colors">Results</a>
            <a href="#contact" className="hover:text-[#39ff14] transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
