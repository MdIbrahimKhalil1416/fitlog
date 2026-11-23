"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import logo from "@/assets/logo.png";
import { FitLogContext } from "@/context/FitlogContext";

const Navbar = () => {
  const pathname = usePathname();
  const { todayPlan, saved } = useContext(FitLogContext);

  const links = [
    { name: "Workouts", href: "/" },
    { name: "My Plan", href: "/my-plan" },
  ];

  return (
    <nav className="w-full bg-[#0B0B0D] border-b border-[#1E1E22]">
      <div className="max-w-[1280px] mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-y-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="FitLog Logo" width={36} height={36} />
          <span className="font-display text-white text-lg font-bold tracking-wide">
            FITLOG
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="order-last w-full flex items-center justify-center gap-2 md:order-none md:w-auto">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-[#252C16] text-[#C6FF00]"
                  : "text-[#9296A1] hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Plan & Saved Counter */}
        <div className="flex items-center gap-4 text-sm">
          <Link href="/my-plan" className="flex items-center gap-2">
            <span className="text-gray-300">Plan</span>
            <span className="bg-[#C6FF00] text-black min-w-5 h-5 px-1.5 rounded-full flex items-center justify-center text-[11px] font-bold">
              {todayPlan.length}
            </span>
          </Link>

          <Link href="/my-plan" className="flex items-center gap-2">
            <span className="text-[#9296A1]">Saved</span>
            <span className="border border-[#454545] text-gray-300 min-w-5 h-5 px-1.5 rounded-full flex items-center justify-center text-[11px]">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
