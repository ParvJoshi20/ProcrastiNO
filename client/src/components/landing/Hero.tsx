"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Zap, Timer, ListTodo, LineChart, ShieldX, Check } from "lucide-react";

// --- Animation Variants ---
const wordContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const letterDrop: Variants = {
  hidden: { opacity: 0, y: -80 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 150, damping: 12 } 
  },
};

const gridContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 1.2 },
  },
};

const cardFadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  },
};

// --- Micro-UI Components ---

const TimerWidget = () => (
  <div className="flex flex-col items-center justify-center h-full scale-90 sm:scale-100">
    <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
      <svg className="w-full h-full transform -rotate-90">
        <circle cx="50%" cy="50%" r="45%" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-brandPink/10" />
        <motion.circle
          cx="50%" cy="50%" r="45%" stroke="currentColor" strokeWidth="8" fill="transparent"
          strokeDasharray="283"
          initial={{ strokeDashoffset: 283 }}
          animate={{ strokeDashoffset: 80 }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-brandPink"
        />
      </svg>
      <span className="absolute text-xl sm:text-2xl font-black text-brandCream">24:59</span>
    </div>
  </div>
);

const TaskWidget = () => (
  <div className="flex flex-col justify-center h-full space-y-2 sm:space-y-3 py-2">
    {[
      { text: "Draft proposal", done: true },
      { text: "Milestones", done: false },
      { text: "Deep work", done: false },
    ].map((task, i) => (
      <motion.div 
        key={i}
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5 + (i * 0.2) }}
        className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-brandCream/5 border border-brandCream/10"
      >
        <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-md flex items-center justify-center border ${task.done ? 'bg-brandNeon border-brandNeon' : 'border-brandCream/30'}`}>
          {task.done && <Check className="w-3 h-3 text-brandBg" />}
        </div>
        <span className={`text-xs sm:text-sm font-medium ${task.done ? 'text-brandCream/40 line-through' : 'text-brandCream'}`}>{task.text}</span>
      </motion.div>
    ))}
  </div>
);

const GraphWidget = () => (
  <div className="flex items-end justify-between h-24 sm:h-32 px-2 sm:px-6 overflow-hidden">
    {[30, 60, 40, 90, 50, 75, 100].map((h, i) => (
      <motion.div
        key={i}
        initial={{ height: 0 }}
        animate={{ height: `${h}%` }}
        transition={{ duration: 1, delay: 2 + (i * 0.1), repeat: Infinity, repeatType: 'reverse' }}
        className="w-2 sm:w-3 rounded-t-full bg-brandPurple/40 group-hover:bg-brandPurple transition-colors"
      />
    ))}
  </div>
);

const ShieldWidget = () => (
  <div className="flex flex-col items-center justify-center h-full scale-90 sm:scale-100">
    <motion.div 
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="p-4 sm:p-6 rounded-full bg-brandYellow/10 border-2 border-brandYellow/50 mb-3 sm:mb-4"
    >
      <ShieldX className="w-10 h-10 sm:w-12 sm:h-12 text-brandYellow" />
    </motion.div>
    <div className="flex gap-1.5 sm:gap-2">
      <span className="px-2 sm:px-3 py-1 rounded-full bg-red-500/20 text-red-500 text-[8px] sm:text-[10px] font-bold uppercase tracking-tight">X Blocked</span>
      <span className="px-2 sm:px-3 py-1 rounded-full bg-red-500/20 text-red-500 text-[8px] sm:text-[10px] font-bold uppercase tracking-tight">YT Locked</span>
    </div>
  </div>
);

export default function Hero() {
  const word1 = "PROCRASTI".split("");
  const word2 = "NO".split("");

  return (
    <section className="relative w-full pt-40 md:pt-50 pb-32 px-4 md:px-6 overflow-hidden flex flex-col items-center justify-center text-center">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-brandNeon/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-50 max-w-7xl mx-auto flex flex-col items-center">
        <motion.h1 
          variants={wordContainer}
          initial="hidden"
          animate="visible"
          className="text-[15vw] sm:text-[14vw] md:text-[10rem] lg:text-[11.5rem] font-bold tracking-tighter leading-[0.8] uppercase flex justify-center flex-wrap z-10 relative"
        >
          <span className="flex">
            {word1.map((char, index) => (
              <motion.span key={index} variants={letterDrop} className="text-brandCream inline-block">
                {char}
              </motion.span>
            ))}
          </span>

          <span className="relative flex text-brandNeon ml-1 sm:ml-4">
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 12 }}
              transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
              className="absolute -top-[15%] -right-[15%] w-10 h-10 md:w-24 md:h-24 bg-brandNeon rounded-full border-4 md:border-8 border-brandBg shadow-2xl z-20 flex items-center justify-center"
            >
              <Zap className="w-5 h-5 md:w-12 md:h-12 text-brandBg fill-brandBg" />
            </motion.div>

            {word2.map((char, index) => (
              <motion.span key={`no-${index}`} variants={letterDrop} className="inline-block relative z-10">
                {char}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-6 md:mt-8 text-base md:text-2xl text-brandCream/70 max-w-2xl font-medium leading-relaxed px-4"
        >
          The ultimate anti-procrastination system. Break down overwhelming goals and force yourself into deep work.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-10 md:mt-12"
        >
          <Link href="/dashboard" className="group relative inline-flex items-center gap-4 md:gap-8 pl-6 md:pl-8 pr-2 py-2 bg-brandYellow text-brandBg border-4 border-brandRust rounded-full text-base md:text-lg font-bold transition-transform hover:scale-[1.02]">
            <span>Start Focusing</span>
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-brandRust flex items-center justify-center overflow-hidden">
               <div className="relative w-5 h-5">
                  <svg viewBox="0 0 12 24" className="absolute w-full h-full transition-transform duration-500 ease-in-out group-hover:translate-x-[150%]">
                    <path d="M10.1569 12.711L4.49994 18.368L3.08594 16.954L8.03594 12.004L3.08594 7.05401L4.49994 5.64001L10.1569 11.297C10.3444 11.4845 10.4497 11.7389 10.4497 12.004C10.4497 12.2692 10.3444 12.5235 10.1569 12.711Z" fill="currentColor" />
                  </svg>
                  <svg viewBox="0 0 12 24" className="absolute w-full h-full -translate-x-[150%] transition-transform duration-500 ease-in-out group-hover:translate-x-0">
                    <path d="M10.1569 12.711L4.49994 18.368L3.08594 16.954L8.03594 12.004L3.08594 7.05401L4.49994 5.64001L10.1569 11.297C10.3444 11.4845 10.4497 11.7389 10.4497 12.004C10.4497 12.2692 10.3444 12.5235 10.1569 12.711Z" fill="currentColor" />
                  </svg>
               </div>
            </div>
          </Link>
        </motion.div>
      </div>

      <motion.div 
        variants={gridContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
      >
        {/* Large Cards use h-[450px] on mobile to prevent clipping when stacked */}
        <motion.div variants={cardFadeUp} className="group relative h-112.5 md:h-80 col-span-1 md:col-span-2 rounded-4xl bg-brandBg border border-brandPink/20 flex flex-col md:flex-row p-6 md:p-8 overflow-hidden">
          <div className="flex-1 text-left flex flex-col justify-center">
            <Timer className="w-7 h-7 md:w-8 md:h-8 text-brandPink mb-3 md:mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-brandCream mb-2">Focus Mode</h3>
            <p className="text-brandCream/50 text-xs md:text-sm">Automated pomodoro sessions that lock you into deep work.</p>
          </div>
          <div className="flex-1 mt-4 md:mt-0 flex items-center justify-center overflow-hidden"><TimerWidget /></div>
        </motion.div>

        <motion.div variants={cardFadeUp} className="group relative h-80 rounded-4xl bg-brandBg border border-brandNeon/20 p-6 md:p-8 flex flex-col text-left overflow-hidden">
          <ListTodo className="w-7 h-7 md:w-8 md:h-8 text-brandNeon mb-3 md:mb-4" />
          <h3 className="text-xl font-bold text-brandCream mb-1 md:mb-2">Smart Tasks</h3>
          <div className="flex-1 overflow-hidden"><TaskWidget /></div>
        </motion.div>

        <motion.div variants={cardFadeUp} className="group relative h-80 rounded-4xl bg-brandBg border border-brandPurple/20 p-6 md:p-8 flex flex-col text-left overflow-hidden">
          <LineChart className="w-7 h-7 md:w-8 md:h-8 text-brandPurple mb-3 md:mb-4" />
          <h3 className="text-xl font-bold text-brandCream mb-1 md:mb-2">Analytics</h3>
          <div className="mt-auto overflow-hidden"><GraphWidget /></div>
        </motion.div>

        <motion.div variants={cardFadeUp} className="group relative h-112.5 md:h-80 col-span-1 md:col-span-2 rounded-4xl bg-brandBg border border-brandYellow/20 flex flex-col md:flex-row p-6 md:p-8 overflow-hidden">
          <div className="flex-1 text-left flex flex-col justify-center">
            <ShieldX className="w-7 h-7 md:w-8 md:h-8 text-brandYellow mb-3 md:mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-brandCream mb-2">Distraction Shield</h3>
            <p className="text-brandCream/50 text-xs md:text-sm">Forcefully block social media and scrolling until the work is done.</p>
          </div>
          <div className="flex-1 mt-4 md:mt-0 flex items-center justify-center overflow-hidden"><ShieldWidget /></div>
        </motion.div>
      </motion.div>
    </section>
  );
}