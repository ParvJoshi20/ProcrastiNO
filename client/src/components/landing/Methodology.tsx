"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Brain, Zap, ShieldAlert } from "lucide-react";

const methods = [
  {
    id: 1,
    title: "The Zeigarnik Effect",
    desc: "Our 'Smart Tasks' utilize the psychological tendency to remember uncompleted tasks better than completed ones, forcing your brain to seek closure.",
    icon: <Brain className="w-6 h-6 text-brandNeon" />,
    // Architectural/Structured shot
    image: "https://images.pexels.com/photos/6492156/pexels-photo-6492156.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverBorder: "group-hover:border-brandNeon",
    hoverShadow: "group-hover:shadow-brandNeon/30",
  },
  {
    id: 2,
    title: "Dopamine Re-calibration",
    desc: "By blocking instant-gratification loops via the Shield, we reset your focus threshold, making 'boring' deep work feel rewarding again.",
    icon: <Zap className="w-6 h-6 text-brandPink" />,
    // Fluid/Brain Chemistry shot
    image: "https://images.pexels.com/photos/724994/pexels-photo-724994.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverBorder: "group-hover:border-brandPink",
    hoverShadow: "group-hover:shadow-brandPink/30",
  },
  {
    id: 3,
    title: "Pre-commitment Theory",
    desc: "ProcrastiNO acts as a 'Ulysses Contract'—locking your future self into a path of productivity before the temptation to drift arises.",
    icon: <ShieldAlert className="w-6 h-6 text-brandPurple" />,
    // Discipline/Focus shot
    image: "https://images.pexels.com/photos/1004014/pexels-photo-1004014.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverBorder: "group-hover:border-brandPurple",
    hoverShadow: "group-hover:shadow-brandPurple/30",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  },
};

export default function Methodology() {
  return (
    // The entire section is now bright yellow
    <section className="relative w-full py-32 px-6 bg-brandYellow overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header (Dark text for contrast against yellow) */}
        <div className="mb-20 md:mb-24 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-brandBg tracking-tight uppercase leading-[1.1]">
            Built on <span className="text-transparent bg-clip-text bg-linear-to-r from-brandRust to-brandPink italic">Science</span>,<br />
            Not just code.
          </h2>
          <p className="mt-6 text-xl text-brandBg/80 font-medium">
            ProcrastiNO isn't just a timer. It's a behavioral framework designed to outsmart your brain's worst habits.
          </p>
        </div>

        {/* The Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {methods.map((method) => (
            <motion.div
              key={method.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              // Cards are dark (brandBg) to pop off the yellow, with a heavy drop shadow
              className={`group flex flex-col rounded-4xl bg-brandBg border-2 border-brandBg shadow-2xl shadow-brandBg/40 overflow-hidden transition-all duration-300 ${method.hoverBorder} ${method.hoverShadow}`}
            >
              {/* Top Image Header */}
              <div className="relative w-full h-56 md:h-64 overflow-hidden bg-black">
                <Image 
                  src={method.image} 
                  alt={method.title} 
                  fill 
                  className="object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brandBg to-transparent" />
                
                {/* Floating Icon Badge */}
                <div className="absolute bottom-4 left-6 w-12 h-12 rounded-2xl bg-brandBg backdrop-blur-md border border-brandCream/10 flex items-center justify-center shadow-xl">
                  {method.icon}
                </div>
              </div>

              {/* Bottom Text Content */}
              <div className="p-8 md:p-10 flex flex-col grow">
                <h3 className="text-2xl font-bold text-brandCream mb-4">{method.title}</h3>
                <p className="text-brandCream/70 leading-relaxed font-medium">
                  {method.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}