"use client"

import { motion } from "framer-motion"
import Link from "next/link"

// TODO: Ajouter les photos du Hero ici quand prêtes
// const heroImages = ["/photo1.jpg", "/photo2.jpg", "/photo3.jpg", "/photo4.jpg"]

export function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background — à remplacer par vos photos */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/8 via-foreground/3 to-background" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground">
            {"Yaak'art Studio"}
          </h1>
          
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-[1px] bg-accent" />
            <p className="text-lg md:text-xl tracking-[0.2em] text-accent font-light">
              Œil pour œil
            </p>
            <span className="w-12 h-[1px] bg-accent" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 text-sm md:text-base tracking-wider text-muted-foreground max-w-xl"
        >
          Photographie artistique • Émotions authentiques • Instants intemporels
        </motion.p>



        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
            Défiler
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-gradient-to-b from-accent to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
