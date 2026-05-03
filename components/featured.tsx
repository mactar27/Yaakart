"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

// TODO: Ajouter vos photos vedettes ici
// const featuredWorks = [
//   { image: "/photo1.jpg", category: "Mariage" },
//   { image: "/photo2.jpg", category: "Portrait" },
//   { image: "/photo3.jpg", category: "Mode" },
// ]

const featuredWorks = [
  { image: "", category: "Mariage" },
  { image: "", category: "Portrait" },
  { image: "", category: "Mode" },
]

export function Featured() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 px-6 md:px-12 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-accent uppercase">
            Travaux récents
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mt-4">
            Sélection
          </h2>
        </motion.div>

        {/* Large Featured Images */}
        <div className="space-y-24">
          {featuredWorks.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative group ${index % 2 === 0 ? "md:ml-0 md:mr-24" : "md:ml-24 md:mr-0"}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {work.image ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                    style={{ backgroundImage: `url(${work.image})` }}
                  />
                ) : (
                  <div className="absolute inset-0 bg-secondary flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-10 h-10 text-muted-foreground/25 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="mt-2 text-xs tracking-[0.2em] text-muted-foreground/40 uppercase">Photo à venir</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors duration-500" />
              </div>

              {/* Category Tag */}
              <div className={`absolute bottom-8 ${index % 2 === 0 ? "left-8" : "right-8"}`}>
                <span className="inline-block px-4 py-2 bg-background/80 backdrop-blur-sm text-xs tracking-[0.3em] text-foreground uppercase">
                  {work.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
