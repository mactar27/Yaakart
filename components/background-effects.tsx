"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

export function BackgroundEffects() {
  const [isMounted, setIsMounted] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Cinematic Light Leaks */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-accent/20 rounded-full ${isMobile ? 'blur-[60px]' : 'blur-[150px]'}`}
      />
      
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1.2, 1, 1.2],
          y: [-30, 30, -30],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-[30%] -right-[20%] w-[60%] h-[60%] bg-foreground/5 rounded-full ${isMobile ? 'blur-[50px]' : 'blur-[130px]'}`}
      />

      {/* Floating Dust Particles (Cinematic Motes) */}
      {isMounted && [...Array(isMobile ? 5 : 20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: Math.random() * 0.5, 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%" 
          }}
          animate={{
            y: ["-10%", "110%"],
            x: ["-5%", "5%"],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 20,
          }}
          className="absolute w-[2px] h-[2px] bg-accent/80 rounded-full blur-[0.5px] shadow-[0_0_8px_rgba(184,160,112,0.6)]"
        />
      ))}

      {/* Vertical Light Beams */}
      <div className="absolute inset-0 flex justify-around opacity-[0.03]">
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-foreground to-transparent" />
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-foreground to-transparent" />
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-foreground to-transparent" />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)]" />
    </div>
  )
}
