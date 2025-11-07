"use client";
import { motion } from "framer-motion";

export default function HeroRibbon() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 1.1 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <motion.div
        animate={{ x: ["0%", "50%", "0%"], y: ["0%", "-20%", "0%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 w-[140vw] h-[60vh] -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-[0.45]"
        style={{
          background:
            "linear-gradient(110deg, #0f172a 0%, #475569 30%, #64748b 60%, #94a3b8 100%)",
        }}
      />
    </motion.div>
  );
}
