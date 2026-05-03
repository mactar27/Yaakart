"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center bg-top"
                style={{ backgroundImage: `url(/me.jpg)` }}
              />
              <div className="absolute inset-0 bg-background/10" />
            </div>
            
            {/* Decorative Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <span className="text-xs tracking-[0.3em] text-accent uppercase">
                À propos
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mt-4">
                Al Amine
              </h2>
              <p className="text-muted-foreground mt-2 tracking-wider text-sm">
                Photographe professionnel & CEO
              </p>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Je m&apos;appelle Al Amine, photographe professionnel passionné et CEO de Yaak&apos;Art Studio.
              </p>
              <p>
                Je capture des instants authentiques où l&apos;émotion, la lumière et les détails se rencontrent. Mon approche mêle sens artistique et spontanéité afin de créer des images esthétiques, sincères et intemporelles.
              </p>
              <p>
                Que ce soit pour des portraits, des événements ou des projets créatifs, chaque cliché raconte une histoire unique.
              </p>
              <p>
                À travers mon objectif, je mets en valeur les personnalités, les ambiances et les moments fugaces qui méritent d&apos;être figés dans le temps.
              </p>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="pt-8 border-t border-border"
            >
              <blockquote className="text-xl md:text-2xl font-light text-foreground italic">
                &ldquo;Chaque regard devient une œuvre.&rdquo;
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
