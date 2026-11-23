import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png"

const Navbar = () => {
  return (
    <nav className="w-full bg-[#0B0B0D] border-b border-[#1E1E22]">
      <div className="max-w-[1280px] mx-auto px-6 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="FitLog Logo" width={36} height={36} />
            <span className="text-white text-lg font-bold tracking-wide">
              FITLOG
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-2">
          <Link
            href="/#workouts"
            className="bg-[#202719] text-[#C6FF00] px-4 py-2 rounded-full text-sm font-medium"
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="text-gray-400 hover:text-white px-4 py-2 text-sm transition-colors"
          >
            My Plan
          </Link>
        </div>

        {/* Plan & Saved Counter */}
        <div className="flex items-center gap-6 text-sm">
          <Link href="/my-plan" className="flex items-center gap-2">
            <span className="text-gray-300">Plan</span>
            <span className="bg-[#C6FF00] text-black w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold">
              0
            </span>
          </Link>

          <Link href="/my-plan" className="flex items-center gap-2">
            <span className="text-gray-400">Saved</span>
            <span className="border border-[#454545] text-gray-300 w-4 h-4 rounded-full flex items-center justify-center text-[10px]">
              0
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
