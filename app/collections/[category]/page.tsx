"use client"

import { motion } from "framer-motion"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { categoriesData } from "@/lib/collections"

export default function CategoryPage() {
  const params = useParams()
  const categoryId = params.category as string
  const category = categoriesData.find(c => c.id === categoryId)

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-foreground mb-4">Catégorie non trouvée</h1>
          <Link href="/#collections" className="text-accent hover:underline">
            Retour aux collections
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
          href="/#collections"
          className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors mb-16 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm tracking-wider uppercase">Retour aux catégories</span>
        </Link>

        {/* Header */}
        <div className="mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-semibold text-foreground mb-6"
          >
            {category.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl text-lg leading-relaxed"
          >
            {category.description}
          </motion.p>
        </div>

        {/* Projects Grid */}
        {category.projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {category.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="group"
              >
                <Link href={`/collections/${categoryId}/${project.id}`}>
                  <div className="relative aspect-[16/10] overflow-hidden mb-6">
                    <Image
                      src={project.cover}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-xs tracking-[0.2em] text-accent uppercase mb-2 block">
                        {project.date || "Projet"}
                      </span>
                      <h3 className="text-2xl font-medium text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mt-2 text-sm line-clamp-1 max-w-sm">
                        {project.description}
                      </p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-accent group-hover:translate-x-2 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center border border-dashed border-border rounded-2xl">
            <p className="text-muted-foreground italic">Aucun projet dans cette catégorie pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  )
}
