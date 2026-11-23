import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0B0B0D] border-t border-[#1E1E22]">
      <div className="max-w-[1280px] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="FitLog Icon"
            width={20}
            height={20}
            className="object-contain"
          />
          <span className="font-display text-white text-sm font-bold tracking-wide">
            FITLOG
          </span>
        </div>

        {/* Copyright */}
        <p className="text-[#777D8A] text-xs">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
