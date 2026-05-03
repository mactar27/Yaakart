"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Philosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section className="relative py-48 overflow-hidden" ref={ref}>
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1920&q=80)`,
          }}
        />
        <div className="absolute inset-0 bg-background/85" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs tracking-[0.3em] text-accent uppercase">
            Notre vision
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mt-8 leading-relaxed">
            Capturer l&apos;essence de chaque instant, révéler la beauté dans les détails et raconter des histoires à travers l&apos;objectif.
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 text-muted-foreground tracking-wider"
          >
            Chez Yaak&apos;Art Studio, chaque émotion devient une inspiration visuelle.
          </motion.p>

          {/* Decorative Lines */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-4 mt-12"
          >
            <span className="w-12 h-[1px] bg-accent" />
            <span className="w-2 h-2 border border-accent rotate-45" />
            <span className="w-12 h-[1px] bg-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
