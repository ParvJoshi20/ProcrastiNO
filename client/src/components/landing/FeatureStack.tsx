"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    id: 1,
    number: "01",
    tag: "Core of the app",
    title: "Focus Mode",
    points: ["Pomodoro timer", "Active session tracking", "Deep work enforcement"],
    takeaway: "This is where you spend time.",
    image: "/features/foxus.jpg",
    borderColor: "border-brandPink/30",
    accentText: "text-brandPink",
    shadowColor: "shadow-brandPink/10",
  },
  {
    id: 2,
    number: "02",
    tag: "Entry point of productivity",
    title: "Smart Tasks",
    points: ["Task breakdown", "Converts vague goals into actionable steps", "Removes mental friction"],
    takeaway: "This removes overwhelm.",
    image: "/features/tasks.jpg",
    borderColor: "border-brandNeon/30",
    accentText: "text-brandNeon",
    shadowColor: "shadow-brandNeon/10",
  },
  {
    id: 3,
    number: "03",
    tag: "Feedback loop",
    title: "Analytics",
    points: ["Productivity patterns", "Focus time measurement", "Habit tracking"],
    takeaway: "This gives clarity + improvement.",
    image: "/features/analytics.jpg",
    borderColor: "border-brandPurple/30",
    accentText: "text-brandPurple",
    shadowColor: "shadow-brandPurple/10",
  },
  {
    id: 4,
    number: "04",
    tag: "Protection layer",
    title: "Distraction Shield",
    points: ["Blocks distracting apps", "Prevents doom scrolling", "Enforces strict discipline"],
    takeaway: "This makes the system actually work.",
    image: "/features/distraction.jpg",
    borderColor: "border-brandYellow/30",
    accentText: "text-brandYellow",
    shadowColor: "shadow-brandYellow/10",
  },
];

export default function FeatureStack() {
  return (
    <section id="features" className="relative w-full px-6 lg:px-12 py-32 bg-brandCream">
      
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-bold text-brandBg tracking-tight uppercase">
          How it <span className="text-graysoft">Works.</span>
        </h2>
        <p className="mt-6 text-xl text-brandBg/70 font-medium">
          A four-step system designed specifically to kill procrastination.
        </p>
      </div>

      {/* The Stack Container */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="sticky w-full min-h-[70vh] flex items-center mb-12"
            // Pushes each subsequent card slightly lower so they stack like a deck
            style={{ top: `calc(10vh + ${index * 40}px)` }}
          >
            {/* The Card */}
            <div className={`w-full flex flex-col lg:flex-row border ${feature.borderColor} bg-brandBg rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl ${feature.shadowColor}`}>
              
              {/* Left Side: Content */}
              <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                
                <div className="flex items-center gap-4 mb-6">
                  <span className={`text-5xl md:text-6xl font-black ${feature.accentText} opacity-30`}>
                    {feature.number}
                  </span>
                  <span className="px-4 py-1.5 rounded-full border border-brandCream/20 text-brandCream/80 text-sm font-bold uppercase tracking-wider">
                    {feature.tag}
                  </span>
                </div>

                <h3 className="text-4xl md:text-6xl font-bold text-brandCream mb-8 leading-tight">
                  {feature.title}
                </h3>

                <ul className="space-y-4 mb-12">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-4 text-lg md:text-xl text-brandCream/80">
                      <CheckCircle2 className={`w-6 h-6 mt-1 shrink-0 ${feature.accentText}`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto inline-flex items-center gap-4 bg-brandBg border border-brandCream/10 p-5 rounded-2xl w-fit shadow-lg">
                  <span className="text-2xl">👉</span>
                  <span className="text-lg md:text-xl font-bold text-brandCream">
                    {feature.takeaway}
                  </span>
                </div>
              </div>

              {/* Right Side: Visual Image */}
              <div className="w-full lg:w-1/2 relative min-h-100 lg:min-h-full border-t lg:border-t-0 lg:border-l border-brandCream/10 overflow-hidden group">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brandBg/60 to-transparent" />
              </div>

            </div>
          </motion.div>
        ))}

        {/* --- THE FIX: The Scroll Spacer --- */}
        {/* This empty div gives the user 50vh of extra scrolling distance. 
            During this time, all 4 cards are perfectly stacked and sticky. 
            Once the user scrolls past this div, the whole stack moves up together. */}
        <div className="w-full h-[50vh] pointer-events-none" />

      </div>
    </section>
  );
}