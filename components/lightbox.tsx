"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useCallback } from "react"

interface LightboxProps {
  isOpen: boolean
  onClose: () => void
  images: string[]
  currentIndex: number
  onIndexChange: (index: number) => void
  title: string
}

export function Lightbox({ isOpen, onClose, images, currentIndex, onIndexChange, title }: LightboxProps) {
  const goNext = useCallback(() => {
    onIndexChange((currentIndex + 1) % images.length)
  }, [currentIndex, images.length, onIndexChange])

  const goPrev = useCallback(() => {
    onIndexChange(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }, [currentIndex, images.length, onIndexChange])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose, goNext, goPrev])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[70] bg-background/95 backdrop-blur-xl flex items-center justify-center"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-3 text-foreground hover:text-accent transition-colors duration-300"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Title */}
          <div className="absolute top-6 left-6 z-10">
            <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">{title}</span>
            <p className="text-sm text-foreground mt-1">
              {currentIndex + 1} / {images.length}
            </p>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goPrev}
            className="absolute left-4 md:left-8 z-10 p-3 text-foreground hover:text-accent transition-colors duration-300"
            aria-label="Previous image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goNext}
            className="absolute right-4 md:right-8 z-10 p-3 text-foreground hover:text-accent transition-colors duration-300"
            aria-label="Next image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full max-w-[90vw] max-h-[85vh] flex items-center justify-center p-12"
            >
              <img
                src={images[currentIndex]}
                alt={`${title} - Image ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          </AnimatePresence>

          {/* Thumbnails */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => onIndexChange(index)}
                className={`w-8 h-1 transition-all duration-300 ${
                  index === currentIndex ? "bg-accent" : "bg-foreground/20 hover:bg-foreground/40"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
