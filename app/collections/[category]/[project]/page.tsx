"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Lightbox } from "@/components/lightbox"
import { categoriesData } from "@/lib/collections"

export default function ProjectPage() {
  const params = useParams()
  const categoryId = params.category as string
  const projectId = params.project as string
  
  const category = categoriesData.find(c => c.id === categoryId)
  const project = category?.projects.find(p => p.id === projectId)

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-foreground mb-4">Projet non trouvé</h1>
          <Link href={`/collections/${categoryId}`} className="text-accent hover:underline">
            Retour à la catégorie
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          href={`/collections/${categoryId}`}
          className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors mb-16 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm tracking-wider uppercase">Retour à {category?.name}</span>
        </Link>

        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="text-xs tracking-[0.3em] text-accent uppercase">{category?.name}</span>
            <span className="w-8 h-[1px] bg-border" />
            <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">{project.date}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-semibold text-foreground mb-6"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl text-lg leading-relaxed"
          >
            {project.description}
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`group cursor-pointer overflow-hidden ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => {
                setCurrentImageIndex(index)
                setLightboxOpen(true)
              }}
            >
              <div className={`relative ${index === 0 ? "aspect-square" : "aspect-[3/4]"}`}>
                <Image
                  src={image}
                  alt={`${project.title} ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={project.images}
        currentIndex={currentImageIndex}
        onIndexChange={setCurrentImageIndex}
        title={project.title}
      />
    </div>
  )
}
