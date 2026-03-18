"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full pt-40 pb-0 px-6 overflow-hidden">

      {/* Background watermark logo */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-[0.04]">
        <Image
          src="/logo.png"
          alt="ProcrastiNO"
          width={600}
          height={600}
        />
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">

        <h1 className="text-6xl md:text-8xl font-bold text-cream leading-tight">
          Procrasti<span className="text-accentNeon">NO</span>
        </h1>

        <p className="text-cream/70 text-lg md:text-xl mt-6">
          Stop procrastinating and turn your tasks into productive focus sessions.
        </p>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <Link
            href="/dashboard"
            className="bg-accentPurple text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3 hover:scale-105 transition"
          >
            <span className="bg-white text-accentPurple w-8 h-8 rounded-full flex items-center justify-center">
              →
            </span>
            Start Focusing
          </Link>
        </div>

      </div>

      {/* Feature Pillars */}
      <div className="relative z-10 mt-28 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">

        {/* Focus Mode */}
        <div className="bg-accentPink rounded-[60px] h-105 flex flex-col items-center justify-end pb-10 relative">

          <div className="absolute -top-20 w-44 h-44 rounded-full overflow-hidden border-8 border-accentPink">
            <Image src="/features/focus.jpg" alt="Focus" fill className="object-cover"/>
          </div>

          <h3 className="text-5xl font-bold text-background">Focus</h3>
          <p className="text-background/80 text-center px-6 mt-2">
            Deep work sessions powered by smart timers
          </p>

        </div>

        {/* Smart Tasks */}
        <div className="bg-accentNeon rounded-[60px] h-105 flex flex-col items-center justify-end pb-10 relative">

          <div className="absolute -top-20 w-44 h-44 rounded-full overflow-hidden border-8 border-accentNeon">
            <Image src="/features/tasks.jpg" alt="Tasks" fill className="object-cover"/>
          </div>

          <h3 className="text-5xl font-bold text-background">Tasks</h3>
          <p className="text-background/80 text-center px-6 mt-2">
            Break big goals into manageable steps
          </p>

        </div>

        {/* Analytics */}
        <div className="bg-accentYellow rounded-[60px] h-105 flex flex-col items-center justify-end pb-10 relative">

          <div className="absolute -top-20 w-44 h-44 rounded-full overflow-hidden border-8 border-accentYellow">
            <Image src="/features/analytics.jpg" alt="Analytics" fill className="object-cover"/>
          </div>

          <h3 className="text-5xl font-bold text-background">Insights</h3>
          <p className="text-background/80 text-center px-6 mt-2">
            Analyze productivity patterns
          </p>

        </div>

        {/* Distraction Shield */}
        <div className="bg-accentPurple rounded-[60px] h-[420px] flex flex-col items-center justify-end pb-10 relative">

        <div className="absolute -top-20 w-44 h-44 rounded-full overflow-hidden border-8 border-accentPurple">
            <Image src="/features/distraction.jpg" alt="Distraction Shield" fill className="object-cover"/>
        </div>

        <h3 className="text-5xl font-bold text-white">Shield</h3>
        <p className="text-white/80 text-center px-6 mt-2">
            Block distracting apps and stay locked in
        </p>

        </div>

      </div>

    </section>
  );
}