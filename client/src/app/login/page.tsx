"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, ShieldCheck, Zap, Fingerprint, Mail, Lock, KeyRound } from "lucide-react";

export default function LoginPage() {
  const [isNewUser, setIsNewUser] = useState(false);
  const [useFailsafe, setUseFailsafe] = useState(false);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-brandBg font-sans overflow-hidden">
      
      {/* LEFT SIDE - Branding & Gateway */}
      <div className="lg:w-1/2 p-8 lg:p-20 flex flex-col justify-between relative overflow-hidden bg-brandBg min-h-[50vh] lg:min-h-screen">
        {/* Background ambient glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-brandNeon/5 blur-[100px] pointer-events-none" />

        {/* Top Navigation */}
        <div className="relative z-30">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-brandCream/50 hover:text-brandCream transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Vertically Centered Text Area */}
        <div className="relative z-20 flex-1 flex flex-col justify-center items-start mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[12vw] lg:text-7xl xl:text-8xl font-black text-brandCream uppercase leading-[0.85] tracking-tighter">
              Enter<br />
              <span className="text-brandNeon">The Zone.</span>
            </h1>
            <p className="mt-8 text-brandCream/60 text-lg lg:text-xl max-w-md font-medium">
              The Kinetic Gate. Authenticate to initialize your workspace and silence the noise.
            </p>
          </motion.div>
        </div>

        {/* Graphic Area - Pushed to bottom */}
        <div className="relative z-10 mt-12 lg:mt-0 flex items-center justify-start lg:justify-center opacity-80">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative w-48 h-48 lg:w-72 lg:h-72 border-4 border-dashed border-brandCream/10 rounded-full flex items-center justify-center"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-32 h-32 lg:w-48 lg:h-48 bg-brandNeon/10 rounded-full blur-[40px]"
            />
            <Zap className="w-16 h-16 lg:w-24 lg:h-24 text-brandNeon" />
          </motion.div>
        </div>
      </div>

      {/* RIGHT SIDE - Authentication Flow */}
      <div className="lg:w-1/2 bg-brandBg lg:bg-brandCream/5 flex flex-col relative border-l border-brandCream/10">
        
        {/* Right Top - Intentionally left completely uncluttered (From original layout) */}
        <div className="hidden lg:block h-24 xl:h-32 w-full" />

        {/* Center - Core Interactive Form */}
        <div className="flex-1 px-6 py-12 lg:px-20 max-w-3xl mx-auto w-full flex flex-col justify-center">
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            {/* Massive Toggle Buttons */}
            <div className="flex w-full bg-brandBg lg:bg-black/30 rounded-[2rem] p-3 mb-12 border border-brandCream/10 shadow-inner">
              <button 
                onClick={() => { setIsNewUser(false); setUseFailsafe(false); }} 
                className={`flex-1 py-5 lg:py-6 text-xl lg:text-2xl font-black tracking-tight rounded-[1.5rem] transition-all duration-300 ${!isNewUser ? 'bg-brandCream text-brandBg shadow-xl scale-[1.02]' : 'text-brandCream/40 hover:text-brandCream/70 hover:bg-white/5'}`}
              >
                Returning
              </button>
              <button 
                onClick={() => setIsNewUser(true)} 
                className={`flex-1 py-5 lg:py-6 text-xl lg:text-2xl font-black tracking-tight rounded-[1.5rem] transition-all duration-300 ${isNewUser ? 'bg-brandNeon text-brandBg shadow-xl scale-[1.02]' : 'text-brandCream/40 hover:text-brandCream/70 hover:bg-white/5'}`}
              >
                New Identity
              </button>
            </div>

            <div className="space-y-4 mb-10">
               <h2 className="text-3xl lg:text-4xl font-bold text-brandCream">
                 {isNewUser ? "Initialize Profile" : (useFailsafe ? "Manual Override" : "Welcome Back")}
               </h2>
               <p className="text-brandCream/50 text-lg">
                 {isNewUser 
                   ? "Connect a provider to begin the onboarding protocol and set your long-term intent." 
                   : (useFailsafe ? "Enter your credentials to bypass the biometric gate." : "Scan your biometrics to instantly unlock your secure workspace.")}
               </p>
            </div>

            {/* Dynamic Auth Forms */}
            <div className="min-h-[300px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {isNewUser ? (
                  /* ---------------- NEW USER FLOW (OAUTH ONLY) ---------------- */
                  <motion.div 
                    key="new-user"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6 w-full"
                  >
                    <button className="group relative w-full flex items-center justify-center gap-4 py-6 bg-white text-black rounded-3xl font-bold text-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(255,255,255,0.25)] border-2 border-transparent hover:border-brandCream/50">
                      <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      <span>Start Journey with Google</span>
                    </button>

                    <button className="group relative w-full flex items-center justify-center gap-4 py-6 bg-[#24292e] text-white rounded-3xl font-bold text-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(36,41,46,0.6)] border-2 border-transparent hover:border-gray-500">
                      <Github className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
                      <span>Start Journey with GitHub</span>
                    </button>
                  </motion.div>
                ) : (
                  /* ---------------- RETURNING USER FLOW ---------------- */
                  <motion.div 
                    key="returning-user"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="w-full flex flex-col items-center"
                  >
                    {!useFailsafe ? (
                      /* Primary: MASSIVE Biometric Button */
                      <div className="flex flex-col items-center justify-center w-full py-4">
                        <button className="group relative w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-brandNeon/10 border-[6px] border-brandNeon/40 hover:border-brandNeon flex flex-col items-center justify-center gap-6 transition-all duration-500 hover:bg-brandNeon/20 hover:shadow-[0_0_80px_rgba(191,251,17,0.3)] hover:scale-105">
                          <div className="absolute inset-0 rounded-full border-2 border-brandNeon/20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30" />
                          <Fingerprint className="w-28 h-28 lg:w-32 lg:h-32 text-brandNeon group-hover:scale-110 transition-transform duration-500" />
                          <span className="font-black text-brandCream tracking-widest uppercase text-base lg:text-lg">Scan Passkey</span>
                        </button>
                        
                        <button 
                          onClick={() => setUseFailsafe(true)}
                          className="mt-12 text-brandCream/40 hover:text-brandCream font-medium transition-colors flex items-center gap-2 px-6 py-3 rounded-xl hover:bg-brandCream/5"
                        >
                          <KeyRound className="w-5 h-5" />
                          Scanner Offline? Use Password
                        </button>
                      </div>
                    ) : (
                      /* Secondary: Failsafe Credentials */
                      <div className="space-y-5 w-full">
                        <div className="relative">
                          <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-brandCream/30" />
                          <input 
                            type="email" 
                            placeholder="Email Address" 
                            className="w-full bg-black/20 border-2 border-brandCream/10 rounded-2xl py-5 pl-14 pr-6 text-lg text-brandCream placeholder:text-brandCream/30 focus:border-brandNeon focus:outline-none focus:bg-black/40 transition-all"
                          />
                        </div>
                        <div className="relative">
                          <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-brandCream/30" />
                          <input 
                            type="password" 
                            placeholder="Password" 
                            className="w-full bg-black/20 border-2 border-brandCream/10 rounded-2xl py-5 pl-14 pr-6 text-lg text-brandCream placeholder:text-brandCream/30 focus:border-brandNeon focus:outline-none focus:bg-black/40 transition-all"
                          />
                        </div>
                        <button className="w-full py-5 bg-brandCream text-brandBg font-bold text-xl rounded-2xl hover:bg-white hover:scale-[1.02] transition-all shadow-xl mt-2">
                          Authorize Override
                        </button>
                        
                        <button 
                          onClick={() => setUseFailsafe(false)}
                          className="w-full mt-4 text-brandCream/40 hover:text-brandCream font-medium transition-colors py-3"
                        >
                          ← Back to Biometrics
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Right Bottom - System Monitor UI (From original layout placement) */}
        <div className="mt-auto px-6 pb-12 pt-8 lg:px-20 lg:pb-20 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-brandBg lg:bg-black/40 border border-brandPurple/20 rounded-[2rem] p-8 flex flex-col shadow-2xl relative overflow-hidden group"
          >
            {/* Decorative background gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brandPurple/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 group-hover:bg-brandPurple/10 transition-colors duration-700" />
            
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="p-5 bg-brandPurple/10 rounded-2xl shrink-0 border border-brandPurple/20">
                <ShieldCheck className="w-10 h-10 lg:w-12 lg:h-12 text-brandPurple" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-brandCream font-bold text-xl lg:text-2xl">The Shield is Active</h4>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase rounded-full tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Online
                  </span>
                </div>
                <p className="text-brandCream/60 text-base lg:text-lg leading-relaxed max-w-lg">
                  {isNewUser 
                    ? "Setting up your profile takes exactly 2 minutes. The distraction blocker engages immediately after." 
                    : "Your workflow and configurations are securely stored. Re-authenticate to deploy."}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}