"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { categoriesData } from "@/lib/collections"

export function Collections() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="collections" className="py-32 px-6 md:px-12 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground">
            Collections
          </h2>
          <p className="mt-4 text-sm tracking-wider text-muted-foreground">
            Explorez notre univers à travers nos différentes spécialités
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categoriesData.map((category, index) => (
            <Link
              key={category.id}
              href={`/collections/${category.id}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative cursor-pointer overflow-hidden ${
                  index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className={`relative ${index === 0 || index === 5 ? "aspect-square" : "aspect-[3/4]"}`}>
                  {category.cover ? (
                    <Image
                      src={category.cover}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-secondary flex items-center justify-center transition-colors duration-500 group-hover:bg-secondary/70">
                      <svg className="w-8 h-8 text-muted-foreground/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500" />

                  {/* Category Name */}
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-xs tracking-[0.3em] text-accent uppercase">
                        {category.projects.length} {category.projects.length > 1 ? "albums" : "album"}
                      </span>
                      <h3 className="text-xl md:text-2xl font-medium text-foreground mt-1">
                        {category.name}
                      </h3>
                    </div>
                  </div>

                  {/* Hover Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
