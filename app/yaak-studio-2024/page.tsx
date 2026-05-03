"use client"

import { motion } from "framer-motion"
import { 
  Images, 
  Eye, 
  FolderOpen, 
  TrendingUp,
  Clock,
  ArrowUpRight
} from "lucide-react"
import { categoriesData } from "@/lib/collections"
import { useState, useEffect } from "react"

export default function AdminDashboard() {
  const [realViews, setRealViews] = useState<number>(0)

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => setRealViews(data.views))
      .catch(err => console.error(err))
  }, [])

  // Calculate real stats
  const totalCollections = categoriesData.length
  const totalProjects = categoriesData.reduce((acc, cat) => acc + cat.projects.length, 0)
  const totalPhotos = categoriesData.reduce((acc, cat) => {
    return acc + cat.projects.reduce((pAcc, proj) => pAcc + proj.images.length, 0)
  }, 0)

  // Chiffre réel venant de MySQL (avec sécurité si undefined)
  const viewsDisplay = (realViews || 0).toLocaleString('fr-FR')

  const stats = [
    { label: "Total Photos", value: totalPhotos.toString(), icon: Images, change: "+12", trend: "up" },
    { label: "Vues ce mois", value: viewsDisplay, icon: Eye, change: "+24%", trend: "up" },
    { label: "Collections", value: totalCollections.toString(), icon: FolderOpen, change: "+1", trend: "up" },
    { label: "Projets/Albums", value: totalProjects.toString(), icon: TrendingUp, change: "+2", trend: "up" },
  ]

  const topCollections = categoriesData
    .map(cat => ({
      name: cat.name,
      photos: cat.projects.reduce((acc, p) => acc + p.images.length, 0),
      projects: cat.projects.length,
      views: Math.floor(Math.random() * 1000) + 200 // Simulation de vues pour le moment
    }))
    .sort((a, b) => b.photos - a.photos)
    .slice(0, 4)

  const recentActivity = [
    { action: "Nouvelle photo ajoutée", collection: "Mariage", time: "Il y a 2 heures" },
    { action: "Collection mise à jour", collection: "Portrait", time: "Il y a 5 heures" },
    { action: "Structure mise à jour", collection: "Système", time: "À l'instant" },
  ]

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-semibold text-foreground">
          Tableau de bord
        </h1>
        <p className="text-muted-foreground mt-1">
          Vue d&apos;ensemble de votre portfolio
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-card border border-border rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-xs text-green-500 flex items-center gap-1">
                {stat.change}
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
            <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="lg:col-span-2 bg-card border border-border rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-foreground">Activité récente</h2>
            <Clock className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b border-border last:border-0"
              >
                <div>
                  <p className="text-sm text-foreground">{activity.action}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Collection: {activity.collection}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top Collections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-foreground">Top Collections</h2>
            <TrendingUp className="w-5 h-5 text-accent" />
          </div>
          <div className="space-y-4">
            {topCollections.map((collection, index) => (
              <div key={collection.name} className="flex items-center gap-4">
                <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs text-accent font-medium">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{collection.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {collection.photos} photos • {collection.projects} albums
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">{collection.views} vues</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-8 bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-6"
      >
        <h2 className="text-lg font-medium text-foreground mb-4">Actions rapides</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/yaak-studio-2024/photos">
            <button className="px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors">
              Ajouter des photos
            </button>
          </Link>
          <button className="px-4 py-2 bg-card border border-border text-foreground rounded-lg text-sm font-medium hover:bg-secondary transition-colors">
            Créer une collection
          </button>
          <button className="px-4 py-2 bg-card border border-border text-foreground rounded-lg text-sm font-medium hover:bg-secondary transition-colors">
            Voir les statistiques
          </button>
        </div>
      </motion.div>
    </div>
  )
}
