"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Github, ArrowUpRight, Linkedin, Instagram, Mail, Zap } from "lucide-react";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Footer() {
  return (
    <footer className="relative w-full bg-brandBg pt-32 pb-12 px-6 overflow-hidden border-t border-brandCream/10">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-brandNeon/5 rounded-[100%] blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* --- 1. MASSIVE PORTFOLIO CTA --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full text-center pb-32 border-b border-brandCream/10"
        >
          <motion.h2 variants={fadeUpVariants} className="text-[10vw] sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none uppercase text-brandCream">
            The code is <span className="text-brandNeon italic">open.</span><br />
            The focus is <span className="text-transparent bg-clip-text bg-linear-to-r from-brandPink to-brandPurple">yours.</span>
          </motion.h2>
          
          <motion.p variants={fadeUpVariants} className="mt-8 text-xl text-brandCream/60 max-w-2xl mx-auto font-medium">
            Stop scrolling. Start reviewing. Dive into the repository to see how this behavioral framework was built.
          </motion.p>

          <motion.div variants={fadeUpVariants} className="mt-12 flex justify-center">
            <Link 
              href="https://github.com/parvjoshi20/procrastino" 
              target="_blank"
              className="group relative inline-flex items-center gap-4 px-10 py-5 bg-brandYellow text-brandBg border-4 border-brandRust rounded-full text-xl font-bold transition-transform hover:scale-105 shadow-2xl shadow-brandCream/10"
            >
              <Github className="w-7 h-7" />
              <span>Review the Code</span>
              <div className="w-10 h-10 rounded-full bg-brandRust flex items-center justify-center group-hover:bg-brandBg group-hover:text-brandCream transition-colors duration-300 ml-2">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </motion.div>

        {/* --- 2. FOOTER LINKS --- */}
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-12 pt-16 pb-16 text-left">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-black text-brandCream tracking-tighter uppercase mb-4">
              Procrasti<span className="text-brandNeon">NO</span>
            </h3>
            <p className="text-brandCream/60 max-w-sm leading-relaxed">
              A portfolio project exploring behavioral design, focus mechanics, and modern web development architectures.
            </p>
          </div>
          
          {/* Tech Stack Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-brandCream font-bold uppercase tracking-widest text-sm mb-2 opacity-50">Tech Stack</h4>
            <span className="text-brandCream/80 font-medium hover:text-brandNeon transition-colors cursor-default">Next.js 15 (App Router)</span>
            <span className="text-brandCream/80 font-medium hover:text-brandNeon transition-colors cursor-default">Tailwind CSS v4</span>
            <span className="text-brandCream/80 font-medium hover:text-brandNeon transition-colors cursor-default">Framer Motion</span>
            <span className="text-brandCream/80 font-medium hover:text-brandNeon transition-colors cursor-default">TypeScript</span>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-brandCream font-bold uppercase tracking-widest text-sm mb-2 opacity-50">Connect</h4>
            <Link href="https://github.com/parvjoshi20" target="_blank" className="text-brandCream/80 font-medium hover:text-graysoft transition-colors flex items-center gap-2">
              <Github className="w-4 h-4" /> GitHub
            </Link>
            <Link href="#" className="text-brandCream/80 font-medium hover:text-blue-500 transition-colors flex items-center gap-2">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </Link>
            <Link href="#" className="text-brandCream/80 font-medium hover:text-brandPink transition-colors flex items-center gap-2">
              <Instagram className="w-4 h-4" /> Instagram
            </Link>
          </div>

        </div>

        {/* --- 3. COPYRIGHT ROW --- */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-brandCream/10 text-brandCream/40 text-sm font-medium">
          <p>© {new Date().getFullYear()} ProcrastiNO. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 flex items-center gap-2">
            Designed & developed by <span className="text-brandNeon flex flex-row font-bold">Parv Joshi &nbsp; <Zap className="w-4 h-4 text-brandYellow fill-brandYellow" /></span>
          </p>
        </div>

      </div>
    </footer>
  );
}