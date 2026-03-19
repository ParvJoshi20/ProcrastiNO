"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Is this just another Pomodoro timer?",
    answer: "Absolutely not. Standard timers rely on your willpower, which is a flawed strategy. ProcrastiNO is a behavioral framework that actively blocks distractions and forces you into deep work states.",
  },
  {
    id: 2,
    question: "What if I just turn off the Distraction Shield?",
    answer: "We make it painfully difficult. ProcrastiNO acts as a Ulysses Contract—once you lock yourself into a focus session, we throw away the key until the session timer hits zero.",
  },
  {
    id: 3,
    question: "Will this help with ADHD paralysis?",
    answer: "While we aren't a medical tool, our 'Smart Tasks' feature is specifically designed to reduce executive dysfunction. By automatically breaking vague, massive goals into tiny actionable steps, we remove the mental friction of starting.",
  },
  {
    id: 4,
    question: "Does it sync across my mobile devices?",
    answer: "Your analytics and task lists sync everywhere, but Focus Mode and the Distraction Shield are strictly desktop-first (Mac & Windows), because that is where true, deep professional work happens.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  },
};

export default function FAQ() {
  // FIX: Initialize as null so everything is closed on the first server render,
  // perfectly matching the client and avoiding the hydration mismatch.
  const [openId, setOpenId] = useState<number | null>(null); 

  return (
    <section className="relative w-full py-32 px-6 bg-brandPink overflow-hidden border-t-4 border-brandBg">
      
      {/* Subtle Background Graphic */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brandBg/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Sticky Heading */}
        <div className="lg:w-1/3">
          <div className="sticky top-32">
            <h2 className="text-5xl md:text-7xl font-bold text-brandBg tracking-tight uppercase leading-[1.05]">
              No More <br />
              <span className="text-brandCream drop-shadow-md">Excuses.</span>
            </h2>
            <p className="mt-6 text-xl text-brandBg/80 font-medium leading-relaxed">
              Everything you need to know about locking in and getting things done.
            </p>
          </div>
        </div>

        {/* Right Side: Animated Accordion */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:w-2/3 flex flex-col gap-4"
        >
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div 
                key={faq.id} 
                variants={itemVariants}
                className={`flex flex-col rounded-4xl border-2 transition-colors duration-300 overflow-hidden ${
                  isOpen ? "bg-brandBg border-brandBg shadow-2xl shadow-brandBg/30" : "bg-brandCream border-brandCream/20 hover:border-brandBg/30 hover:bg-white shadow-lg"
                }`}
              >
                {/* Accordion Button */}
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between p-8 md:p-10 text-left focus:outline-none"
                >
                  <h3 className={`text-2xl sm:text-3xl font-bold pr-8 ${isOpen ? "text-brandCream" : "text-brandBg"}`}>
                    {faq.question}
                  </h3>
                  
                  {/* Plus/Minus Icon */}
                  <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    isOpen ? "bg-brandPink text-brandBg" : "bg-brandBg/10 text-brandBg"
                  }`}>
                    {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                  </div>
                </button>

                {/* Animated Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-8 md:px-10 pb-10">
                        <div className="w-full h-px bg-brandCream/10 mb-8" />
                        <p className="text-brandCream/70 text-lg md:text-xl leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}