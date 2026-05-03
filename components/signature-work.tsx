"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

// TODO: Ajouter vos photos signature ici
// const signatureImages = [
//   { src: "/photo1.jpg", title: "Éternité", description: "Mariage • Dakar" },
//   { src: "/photo2.jpg", title: "L'Instant", description: "Portrait • Studio" },
//   { src: "/photo3.jpg", title: "Lumière", description: "Événement • Dakar" },
// ]

const signatureImages = [
  { src: "", title: "Éternité", description: "Mariage • Dakar" },
  { src: "", title: "L'Instant", description: "Portrait • Studio" },
  { src: "", title: "Lumière", description: "Événement • Sénégal" },
]

export function SignatureWork() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section
      ref={containerRef}
      className="relative py-32 px-6 md:px-12 bg-background overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-20"
      >
        <span className="text-xs tracking-[0.3em] text-accent uppercase">
          Sélection
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-foreground">
          Signature Work
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Mes clichés les plus emblématiques, capturant l&apos;essence de chaque instant.
        </p>
      </motion.div>

      {/* Fullscreen Images */}
      <div className="space-y-32">
        {signatureImages.map((image, index) => (
          <SignatureImage
            key={image.title}
            image={image}
            index={index}
            scrollProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}

function SignatureImage({
  image,
  index,
  scrollProgress,
}: {
  image: (typeof signatureImages)[0]
  index: number
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"]
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      className={`relative max-w-6xl mx-auto ${isEven ? "md:pr-20" : "md:pl-20"}`}
      style={{ opacity }}
    >
      <motion.div
        className="relative aspect-[16/10] overflow-hidden"
        style={{ scale }}
      >
        {image.src ? (
          <motion.div className="absolute inset-0" style={{ y }}>
            <Image
              src={image.src}
              alt={image.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </motion.div>
        ) : (
          <div className="absolute inset-0 bg-secondary flex items-center justify-center">
            <div className="text-center">
              <svg className="w-12 h-12 text-muted-foreground/20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="mt-3 text-xs tracking-[0.2em] text-muted-foreground/35 uppercase">Photo à venir</p>
            </div>
          </div>
        )}

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/20" />

        {/* Content */}
        <motion.div
          className={`absolute bottom-0 ${isEven ? "left-0" : "right-0"} p-8 md:p-12`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-5xl font-serif text-foreground">
            {image.title}
          </h3>
          <p className="mt-2 text-sm tracking-wider text-muted-foreground">
            {image.description}
          </p>
        </motion.div>
      </motion.div>

      {/* Index Number */}
      <motion.span
        className={`absolute top-1/2 -translate-y-1/2 ${
          isEven ? "-right-4 md:-right-16" : "-left-4 md:-left-16"
        } text-[120px] md:text-[200px] font-serif text-accent/10 pointer-events-none`}
        style={{ y }}
      >
        0{index + 1}
      </motion.span>
    </motion.div>
  )
}
