"use client";
import { motion } from "framer-motion";

export default function AdaptiveWave() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          y: [0, -20, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-0 w-[200%] h-[120%] -translate-x-1/4 rotate-[8deg]
        bg-gradient-to-r from-[#5A3A2E]/25 via-[#7B5243]/20 to-[#C6B4A9]/15 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0.25 }}
        animate={{ 
          opacity: [0.25, 0.45, 0.25],
          y: [0, 25, 0]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-0 w-[180%] h-[120%] translate-x-1/4 rotate-[-6deg]
        bg-gradient-to-l from-[#5A3A2E]/20 via-[#7B5243]/18 to-[#C6B4A9]/12 blur-3xl"
      />
    </div>
  );
}
