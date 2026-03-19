"use client";

import { motion, Variants } from "framer-motion";

const stats = [
  { 
    id: 1,
    label: "Productivity Boost", 
    value: "~1.5x", 
    color: "text-brandNeon" 
  },
  { 
    id: 2,
    label: "Daily Time Saved", 
    value: "~2Hrs", 
    color: "text-brandPink" 
  },
  { 
    id: 3,
    label: "Mental Friction", 
    value: "-60%", 
    color: "text-brandPurple" 
  },
];

// Explicitly type as Variants to fix the TypeScript error
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  },
};

export default function Stats() {
  return (
    <section className="relative w-full py-32 px-6 bg-brandBg border-y border-brandCream/10 overflow-hidden">
      
      {/* Background Radial Glow for extra depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-brandPurple/5 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center"
        >
          {stats.map((stat) => (
            <motion.div key={stat.id} variants={itemVariants} className="flex flex-col items-center justify-center group">
              
              {/* Massive Number */}
              <h3 className={`text-7xl sm:text-8xl lg:text-[9rem] font-black tracking-tighter leading-none mb-6 ${stat.color} transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2`}>
                {stat.value}
              </h3>
              
              {/* Crisp Label */}
              <p className="text-brandCream/70 text-lg sm:text-xl font-bold uppercase tracking-[0.2em]">
                {stat.label}
              </p>
              
            </motion.div>
          ))}
        </motion.div>

        {/* Portfolio Transparency Disclaimer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-24 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brandCream/10 bg-brandCream/5"
        >
          <span className="w-2 h-2 rounded-full bg-brandCream/40" />
          <span className="text-xs text-brandCream/40 uppercase tracking-widest font-medium">
            * Projected metrics based on standard deep-work frameworks
          </span>
        </motion.div>

      </div>
    </section>
  );
}