"use client"

import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence, Reorder } from "framer-motion"
import Image from "next/image"
import { 
  Upload, 
  Search, 
  Filter, 
  Grid3X3, 
  LayoutList,
  Trash2,
  Star,
  MoreVertical,
  X,
  Check
} from "lucide-react"

const collections = ["Tous", "Mariage", "Portrait", "Mode", "Événementiel", "Paysage", "Urbain", "Nature", "Lifestyle"]

interface Photo {
  id: string;
  src: string;
  collection: string;
  featured: boolean;
}

export default function AdminPhotos() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState(true)

  const fetchPhotos = useCallback(async () => {
    try {
      const res = await fetch('/api/photos')
      const data = await res.json()
      setPhotos(Array.isArray(data) ? data : [])
    } catch (err) {
      console.error(err)
      setPhotos([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPhotos()
  }, [fetchPhotos])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCollection, setSelectedCollection] = useState("Tous")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const filteredPhotos = Array.isArray(photos) ? photos.filter(photo => {
    const matchesSearch = photo.collection.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCollection = selectedCollection === "Tous" || photo.collection === selectedCollection
    return matchesSearch && matchesCollection
  }) : []

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      handleUpload(file)
    }
  }

  const handleUpload = useCallback(async (file: File) => {
    setIsUploading(true)
    setUploadProgress(20)

    try {
      // Pour cette démo, on utilise l'URL locale, mais on l'enregistre en DB
      // Dans un vrai projet, on uploaderait le fichier vers un S3 ou un dossier public via une API
      const localSrc = URL.createObjectURL(file)
      
      const res = await fetch('/api/photos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          src: localSrc, // Idéalement ici un chemin vers /public/uploads/
          collection: selectedCollection === "Tous" ? "Mariage" : selectedCollection,
          featured: false
        })
      })

      if (res.ok) {
        setUploadProgress(100)
        fetchPhotos() // Recharger la liste depuis MySQL
      }
    } catch (err) {
      console.error(err)
    } finally {
      setTimeout(() => setIsUploading(false), 500)
    }
  }, [selectedCollection, fetchPhotos])

  const togglePhotoSelection = (id: string) => {
    setSelectedPhotos(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    )
  }

  const toggleFeatured = async (id: string, currentStatus: boolean) => {
    try {
      await fetch(`/api/photos/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ featured: !currentStatus })
      })
      fetchPhotos()
    } catch (err) {
      console.error(err)
    }
  }

  const deleteSelected = async () => {
    try {
      await fetch('/api/photos', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: selectedPhotos })
      })
      fetchPhotos()
      setSelectedPhotos([])
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold text-foreground">Photos</h1>
          <p className="text-muted-foreground mt-1">{photos.length} photos au total</p>
        </div>
        <div>
          <input
            type="file"
            id="photo-upload"
            className="hidden"
            accept="image/*"
            onChange={onFileChange}
          />
          <button
            onClick={() => document.getElementById('photo-upload')?.click()}
            className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
          >
            <Upload className="w-4 h-4" />
            Ajouter des photos
          </button>
        </div>
      </div>

      {/* Upload Progress */}
      <AnimatePresence>
        {isUploading && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 bg-card border border-border rounded-xl p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-foreground">Upload en cours...</span>
              <span className="text-sm text-muted-foreground">{uploadProgress}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${uploadProgress}%` }}
                className="h-full bg-accent"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toolbar */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Rechercher..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
            {collections.map(collection => (
              <button
                key={collection}
                onClick={() => setSelectedCollection(collection)}
                className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-colors ${
                  selectedCollection === collection
                    ? "bg-accent text-accent-foreground"
                    : "bg-card border border-border text-foreground hover:bg-secondary"
                }`}
              >
                {collection}
              </button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex items-center bg-card border border-border rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded ${viewMode === "grid" ? "bg-secondary" : ""}`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded ${viewMode === "list" ? "bg-secondary" : ""}`}
            >
              <LayoutList className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Selected Actions */}
      <AnimatePresence>
        {selectedPhotos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 flex items-center justify-between p-4 bg-accent/10 border border-accent/20 rounded-xl"
          >
            <span className="text-sm text-foreground">
              {selectedPhotos.length} photo(s) sélectionnée(s)
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedPhotos([])}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={deleteSelected}
                className="flex items-center gap-2 px-3 py-1.5 bg-destructive text-destructive-foreground rounded-lg text-sm hover:bg-destructive/90 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Supprimer
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Photos Grid */}
      <Reorder.Group
        axis="x"
        values={filteredPhotos}
        onReorder={setPhotos}
        className={`${
          viewMode === "grid"
            ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            : "space-y-3"
        }`}
      >
        {filteredPhotos.map((photo) => (
          <Reorder.Item
            key={photo.id}
            value={photo}
            className={`group relative cursor-grab active:cursor-grabbing ${
              viewMode === "list" ? "flex items-center gap-4 bg-card border border-border rounded-xl p-3" : ""
            }`}
          >
            <div className={`relative ${viewMode === "grid" ? "aspect-square" : "w-20 h-20"} rounded-lg overflow-hidden`}>
              <Image
                src={photo.src}
                alt={photo.collection}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              
              {/* Selection Overlay */}
              <div
                className={`absolute inset-0 bg-background/50 transition-opacity ${
                  selectedPhotos.includes(photo.id) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <button
                  onClick={() => togglePhotoSelection(photo.id)}
                  className={`absolute top-2 left-2 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                    selectedPhotos.includes(photo.id)
                      ? "bg-accent text-accent-foreground"
                      : "bg-card/80 text-foreground hover:bg-card"
                  }`}
                >
                  {selectedPhotos.includes(photo.id) && <Check className="w-4 h-4" />}
                </button>
              </div>

              {/* Featured Star */}
              {photo.featured && (
                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                  <Star className="w-3 h-3 text-accent-foreground" fill="currentColor" />
                </div>
              )}
            </div>

            {viewMode === "list" && (
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">{photo.collection}</p>
                  <p className="text-xs text-muted-foreground">ID: {photo.id}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleFeatured(photo.id, photo.featured)}
                    className={`p-2 rounded-lg transition-colors ${
                      photo.featured ? "text-accent" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Star className="w-4 h-4" fill={photo.featured ? "currentColor" : "none"} />
                  </button>
                  <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </Reorder.Item>
        ))}
      </Reorder.Group>

      {filteredPhotos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Aucune photo trouvée</p>
        </div>
      )}
    </div>
  )
}
