"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

// The content we want to loop
const marqueeItems = [
  "1.5X PRODUCTIVITY BOOST",
  "40% LESS STRESS",
  "2 HOURS SAVED DAILY",
  "DEEP WORK UNLOCKED",
];

export default function Marquee() {
  // We duplicate the items a few times to ensure the screen is filled 
  // and the infinite scroll loop is seamless.
  const repeatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="w-full bg-brandSand border-y-4 border-brandBg overflow-hidden py-6 sm:py-8 flex items-center">
      
      {/* The motion container slides from 0% to -50% continuously.
        Because the content is duplicated, -50% looks exactly like 0%, 
        creating a perfect infinite loop.
      */}
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25, // Adjust this value to make it scroll faster or slower
        }}
        className="flex whitespace-nowrap items-center w-max"
      >
        {repeatedItems.map((item, index) => (
          <div key={index} className="flex items-center gap-8 sm:gap-12 px-4 sm:px-6">
            <span className="text-4xl sm:text-5xl md:text-6xl font-black text-brandBg tracking-tighter uppercase">
              {item}
            </span>
            <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-brandYellow fill-brandYellow" />
          </div>
        ))}
      </motion.div>

    </section>
  );
}