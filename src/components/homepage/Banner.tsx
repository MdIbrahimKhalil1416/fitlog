import Image from "next/image";
import Link from "next/link";
import React from "react";
import banner from "@/assets/banner.png"

const Banner = () => {
  return (
    <section className="w-full px-6 pt-9">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-[#15161B] border border-[#1E1E22] rounded-xl min-h-[350px] flex flex-col md:flex-row items-center justify-between px-8 md:px-11 py-10 md:py-8">
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <p className="text-[#C6FF00] text-[10px] font-bold tracking-widest mb-5">
              WORKOUT LIBRARY
            </p>

            <h1 className="text-white text-4xl md:text-5xl font-extrabold uppercase leading-[0.95] tracking-tight max-w-[550px]">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            <p className="text-[#9296A1] text-sm leading-relaxed mt-5 max-w-[400px]">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>

            <Link
              href="/#workouts"
              className="inline-block bg-[#C6FF00] text-black text-[11px] font-bold px-5 py-3 rounded-md mt-6 hover:bg-[#b5eb00] transition-colors"
            >
              BROWSE WORKOUTS
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative w-[260px] h-[260px] md:w-[300px] md:h-[300px]">
              <Image
                src={banner}
                alt="Workout Illustration"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 260px, 300px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
